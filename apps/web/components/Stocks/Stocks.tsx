"use client";
import { Snowflake } from "@repo/ui/snowflake";
import { Fragment } from "react";
import { useDashboardContext } from "../../hooks/DashboardContext";
import { useStocksDetails } from "../../hooks/useStocksDetails";
import { StockTile } from "../StockTile/StockTile";
import * as styles from "./Stocks.css";

type StocksProps = {};

type DataToFormat = {
  [x: string]: { [x: string]: any };
  marketCap: number;
};

const BILLION = 1_000_000_000;
const MILLION = 1_000_000;

const formatMarketCap = (data: DataToFormat) => {
  if (
    !data ||
    data["market_cap"] === null ||
    data["currency_info"]?.["reporting_currency_symbol"] === null
  ) {
    return "N/A";
  }

  const { market_cap: marketCap, currency_info: currencyInfo } = data;
  const marketCapValue = Number(marketCap);

  if (marketCapValue >= BILLION) {
    return `${currencyInfo?.reporting_currency_symbol || ""} ${(marketCapValue / BILLION).toFixed(2)}B`;
  }

  if (marketCapValue >= MILLION) {
    return `${currencyInfo?.reporting_currency_symbol || ""} ${(marketCapValue / MILLION).toFixed(2)}M`;
  }

  return `${currencyInfo?.reporting_currency_symbol || ""} ${marketCap}`;
};

export const Stocks: React.FC<StocksProps> = () => {
  const { marketCountry, marketCapSort } = useDashboardContext();
  const sortOrder = marketCapSort?.id === "asc" ? "asc" : "desc";
  const {
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    data,
    isLoading,
  } = useStocksDetails({ countryCode: marketCountry?.id, sortOrder });

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
                  marketCap={formatMarketCap(company.grid.data)}
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
