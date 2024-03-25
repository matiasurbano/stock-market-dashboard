"use client";
import { SnowflakeLoading } from "@repo/ui/snowflake-loading";
import { StockTile } from "../StockTile/StockTile";
import * as styles from "./Stocks.css";

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
