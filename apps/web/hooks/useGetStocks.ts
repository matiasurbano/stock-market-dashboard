import { useInfiniteQuery, QueryClient } from "@tanstack/react-query";
import { SupportedCountryCodes } from "./countries";

const PAGE_SIZE = 40;

export enum OrderDirection {
  ASC = "asc",
  DESC = "desc",
}

export const ORDER_DIRECTION_LABELS = {
  [OrderDirection.DESC]: "Descending",
  [OrderDirection.ASC]: "Ascending",
};

export type ScoreSchema = {
  value: number;
  future: number;
  past: number;
  health: number;
  income: number;
  total: number;
  sentence: string;
};

export type CompanyDataSchema = {
  id: number;
  name: string;
  slug: string;
  unique_symbol: string;
  canonical_url: string;
  score: {
    data: ScoreSchema;
  };
};

export type DataSchema = CompanyDataSchema[];
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
  countryCode: SupportedCountryCodes;
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
            ...(countryCode !== SupportedCountryCodes.XX
              ? [["aor", [["country_name", "in", [countryCode]]]]]
              : []),
          ],
        }),
      }
    );
    return await res.json();
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
  countryCode: SupportedCountryCodes;
  sortOrder: OrderDirection;
}): ReturnType<typeof useInfiniteQuery> => {
  return useInfiniteQuery({
    queryKey: ["data"],
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
