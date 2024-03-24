"use client";
import { Fragment, useState } from "react";
import * as styles from "./Stocks.css";
import { StockTile } from "../StockTile/StockTile";
import { Snowflake } from "@repo/ui/snowflake";
import { OrderDirection, useGetStocks } from "../../hooks/useGetStocks";
import { CountryOption } from "@repo/types";

type StocksProps = {};

const defaultCountryOption: CountryOption = { id: "XX", name: "Global" };

export const Stocks: React.FC<StocksProps> = () => {
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
    <>
      {isLoading && <div>Loading Results</div>}
      {isSuccess && (
        <div className={styles.root}>
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
        </div>
      )}
      {!isLoading && (
        <footer className={styles.footer}>
          <button
            className={styles.nextButton}
            disabled={isFetchingNextPage || !hasNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading" : "Load Next Page"}
          </button>
        </footer>
      )}
    </>
  );
};
