"use client";
import * as styles from "./StockTile.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type StockTileProps = {
  name?: string;
  uniqueSymbol?: string;
  marketCap?: string;
  url?: string;
  renderGraph: () => React.ReactNode;
};

export const StockTile: React.FC<StockTileProps> = ({
  url,
  name,
  uniqueSymbol,
  marketCap,
  renderGraph,
}) => {
  return (
    <div className={styles.wrapper} aria-busy="false">
      <a
        target="_blank"
        rel="noreferrer"
        href={url ? `https://simplywall.st${url}` : "#"}
        className={styles.root}
        aria-description={`Open ${name} stock page in a new tab`}
      >
        <div className={styles.info}>
          <p className={styles.title} aria-label={`Company: ${name}`}>
            {name ? name : <Skeleton width={50} height={5} />}
          </p>
          <p className={styles.subTitle} aria-label={`Symbol: ${uniqueSymbol}`}>
            {uniqueSymbol ? uniqueSymbol : <Skeleton width={30} height={5} />}
          </p>
        </div>
        <div className={styles.graph}>{renderGraph()}</div>
        <div className={styles.info}>
          <p className={styles.title} aria-label={`Market cap: ${marketCap}`}>
            {marketCap ? marketCap : <Skeleton width={30} height={5} />}
          </p>
          <p className={styles.subTitle} aria-disabled="true">
            Market Cap
          </p>
        </div>
      </a>
    </div>
  );
};
