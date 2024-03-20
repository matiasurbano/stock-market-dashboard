"use client";
import { Workspace } from "@repo/types";
import { Button } from "@repo/ui/button";
import { SnowflakeScore } from "@repo/ui/snowflake";
import { FilterBar } from "../components/FilterBar/FilterBar";
import styles from "./page.module.css";

import StockTile from "../components/StockTile/StockTile";
import { OrderDirection, useGetStocks } from "../hooks/useGetStocks";
import { SupportedCountryCodes } from "../hooks/countries";
import { Fragment, useState } from "react";

const workspace: Workspace = {
  name: "web",
  version: "2",
};

export default function Page() {
  const [countryCode, setCountryCode] = useState<SupportedCountryCodes>(
    SupportedCountryCodes.XX
  );
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
  } = useGetStocks({ countryCode, sortOrder });

  return (
    <main className={styles.main}>
      {isLoading && <div>Loading Results</div>}
      {isSuccess && (
        <main className={styles.results}>
          {data.pages.map((page) => (
            <Fragment key={page.meta.currentPage}>
              {page.data.map((company) => (
                <h1>{company.name}</h1>
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

      <FilterBar />
      <Button appName="asdsad">Click me</Button>
      {/* StockList */}
      <SnowflakeScore />

      {/* <Suspense fallback={<h1>$$$$$######################################</h1>}> */}
      <StockTile />
      {/* </Suspense> */}
    </main>
  );
}
