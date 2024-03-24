"use client";
import { CountryOption } from "@repo/types";
import { Snowflake } from "@repo/ui/snowflake";
import { Fragment } from "react";
import { useDashboardContext } from "../../hooks/DashboardContext";
import { useGetStocks } from "../../hooks/useGetStocks";
import { StockTile } from "../StockTile/StockTile";
import * as styles from "./Stocks.css";

type StocksProps = {};

const defaultCountryOption: CountryOption = { id: "XX", name: "Global" };

export const Stocks: React.FC<StocksProps> = () => {
  const { marketCountry, marketCapSort } = useDashboardContext();
  const sortOrder = marketCapSort?.id === "ASC" ? "asc" : "desc";
  const {
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    data,
    isLoading,
  } = useGetStocks({ countryCode: marketCountry?.id, sortOrder });

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
