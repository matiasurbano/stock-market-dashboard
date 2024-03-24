import { CompanyData } from "@repo/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const SWT_HEADER = { sws: "fe-challenge" };
const SWT_BASE_URL = "https://simplywall.st/api/grid/filter?include=grid,score";
const PAGE_SIZE = 24;

export type DataSchema = CompanyData[];
export type MetaSchema = {
  currentPage: number;
  totalPages: number;
  total_records: number;
};

export type ApiResponseSchema = {
  data: DataSchema;
  meta: MetaSchema;
};

export const fetchStocks = async ({
  sortOrder,
  countryCode,
  page,
}: {
  sortOrder: string;
  countryCode: string;
  page: number;
}): Promise<ApiResponseSchema | undefined> => {
  try {
    console.log(PAGE_SIZE * (page - 1));
    const res = await fetch(SWT_BASE_URL, {
      method: "post",
      headers: {
        ...SWT_HEADER,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "0",
        no_result_if_limit: false,
        offset: PAGE_SIZE * (page - 1),
        size: PAGE_SIZE,
        state: "read",
        rules: [
          ["order_by", "market_cap", sortOrder],
          ["grid_visible_flag", "=", true],
          ["market_cap", "is_not_null"],
          ["primary_flag", "=", true],
          ["is_fund", "=", false],
          ...(countryCode !== "XX"
            ? [["aor", [["country_name", "in", [countryCode]]]]]
            : []),
        ],
      }),
    });
    const result = await res.json();

    return {
      ...result,
      meta: {
        ...result.meta,
        currentPage: page,
        totalPages: Math.ceil(result.meta.total_records / PAGE_SIZE),
      },
    };
  } catch (error: unknown) {
    if (error) {
      throw error;
    }
  }
};

export function useStocksDetails({
  countryCode,
  sortOrder,
}: {
  countryCode: string;
  sortOrder: string;
}): ReturnType<typeof useInfiniteQuery> {
  return useInfiniteQuery({
    queryKey: ["stocks", countryCode, sortOrder],
    queryFn: ({ pageParam: page = 1 }) =>
      fetchStocks({
        countryCode,
        sortOrder,
        page,
      }),
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) =>
      lastPage
        ? lastPage.meta.currentPage < lastPage.meta.totalPages
          ? lastPage.meta.currentPage + 1
          : undefined
        : undefined,
  });
}
