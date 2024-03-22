"use client";
import { CountryOption } from "@repo/types";
import { FilterBar } from "../components/FilterBar/FilterBar";
import * as styles from "./page.css";

import { Fragment, useState } from "react";
import { OrderDirection, useGetStocks } from "../hooks/useGetStocks";
import { StockTile } from "../components/StockTile/StockTile";
import { Snowflake } from "@repo/ui/snowflake";

const defaultCountryOption: CountryOption = { id: "AU", name: "Australia" };

export default function Page() {
  const [countryCode, setCountryCode] =
    useState<CountryOption>(defaultCountryOption);
  const [sortOrder, setSortOrder] = useState<OrderDirection>(
    OrderDirection.DESC
  );
  const {
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    data,
    isLoading,
  } = useGetStocks({ countryCode: countryCode?.id, sortOrder });

  return (
    <main className={styles.container}>
      <div className={styles.filterBar}>
        <FilterBar />
      </div>

      {isLoading && <div>Loading Results</div>}
      {isSuccess && (
        <main className={styles.results}>
          {/* @ts-ignore */}
          {data?.pages.map((page) => (
            <Fragment key={page.meta.currentPage}>
              {/* @ts-ignore */}
              {page.data.map((company, index) => (
                <StockTile
                  key={`${company.id}-${index}`}
                  name={company.name}
                  uniqueSymbol={company.unique_symbol}
                  url={company.canonical_url}
                  renderGraph={() => <Snowflake score={company.score.data} />}
                />
              ))}
            </Fragment>
          ))}
        </main>
      )}
      {!isLoading && (
        <footer className={styles.resultsFooter}>
          <button
            className={styles.nextButton}
            disabled={isFetchingNextPage || !hasNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading" : "Load Next Page"}
          </button>
        </footer>
      )}
    </main>
  );
}
