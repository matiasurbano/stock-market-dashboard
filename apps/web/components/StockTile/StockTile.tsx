"use client";
import * as styles from "./StockTile.css";

type StockTileProps = {
  name: string;
  uniqueSymbol: string;
  url: string;
  renderGraph: () => React.ReactNode;
};

export const StockTile: React.FC<StockTileProps> = ({
  url,
  name,
  uniqueSymbol,
  renderGraph,
}) => {
  return (
    <div className={styles.wrapper}>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://simplywall.st${url}`}
        className={styles.root}
        aria-label={`Open ${name} stock page in a new tab`}
      >
        <div className={styles.info}>
          <p className={styles.title}>{name}</p>
          <p className={styles.subTitle}>{uniqueSymbol}</p>
        </div>
        <div className={styles.graph}>{renderGraph()}</div>
      </a>
    </div>
  );
};
