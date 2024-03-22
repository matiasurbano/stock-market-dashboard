"use client";
import { CountryOption, Workspace } from "@repo/types";
import { FilterBar } from "../components/FilterBar/FilterBar";
import * as styles from "./page.css";

import { Fragment, useState } from "react";
import { SupportedCountryCodes } from "../hooks/countries";
import { OrderDirection, useGetStocks } from "../hooks/useGetStocks";

const workspace: Workspace = {
  name: "web",
  version: "2",
};

const defaultCountryOption: CountryOption = { id: "AU", name: "Australia" };

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
    </main>
  );
}
