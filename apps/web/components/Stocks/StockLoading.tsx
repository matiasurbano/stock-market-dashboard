"use client";
import { SnowflakeLoading } from "@repo/ui/snowflake-loading";
import { StockTile } from "../StockTile/StockTile";
import * as styles from "./Stocks.css";

const data = [
  {
    subject: "Value",
    successfulChecks: 0,
  },
  {
    subject: "Fut.",
    successfulChecks: 0,
  },
  {
    subject: "Past",
    successfulChecks: 0,
  },
  {
    subject: "Health",
    successfulChecks: 0,
  },
  {
    subject: "Div.",
    successfulChecks: 0,
  },
];

export const StocksLoading: React.FC = () => {
  return (
    <>
      <div className={styles.root}>
        <StockTile renderGraph={() => <SnowflakeLoading />} />
        <StockTile renderGraph={() => <SnowflakeLoading />} />
        <StockTile renderGraph={() => <SnowflakeLoading />} />
        <StockTile renderGraph={() => <SnowflakeLoading />} />
        <StockTile renderGraph={() => <SnowflakeLoading />} />
        <StockTile renderGraph={() => <SnowflakeLoading />} />
      </div>
    </>
  );
};
