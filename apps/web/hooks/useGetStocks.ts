import { CompanyData } from "@repo/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 40;

export enum OrderDirection {
  ASC = "asc",
  DESC = "desc",
}

export const ORDER_DIRECTION_LABELS = {
  [OrderDirection.DESC]: "Descending",
  [OrderDirection.ASC]: "Ascending",
};

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
  sortOrder: OrderDirection;
  countryCode: string;
  page: number;
}): Promise<ApiResponseSchema | undefined> => {
  try {
    console.log(PAGE_SIZE * (page - 1));
    const res = await fetch(
      "https://simplywall.st/api/grid/filter?include=grid,score",
      {
        method: "post",
        headers: {
          sws: "fe-challenge",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // In an effort not to over engineer this, we will only type and change the in-scope variables
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
      }
    );
    const result = await res.json();

    return {
      ...result,
      meta: {
        ...result.meta,
        currentPage: page,
        totalPages: Math.ceil(result.meta.totalRecords / PAGE_SIZE),
      },
    };
  } catch (error: unknown) {
    if (error) {
      throw error;
    }
  }
};

export const useGetStocks = ({
  countryCode,
  sortOrder,
}: {
  countryCode: string;
  sortOrder: OrderDirection;
}): ReturnType<typeof useInfiniteQuery> => {
  return useInfiniteQuery({
    queryKey: ["stocks", countryCode, sortOrder],
    queryFn: ({ pageParam: page = 1 }) =>
      fetchStocks({
        countryCode,
        sortOrder,
        page,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage
        ? lastPage.meta.currentPage < lastPage.meta.totalPages
          ? lastPage.meta.currentPage + 1
          : undefined
        : undefined,
  });
};
