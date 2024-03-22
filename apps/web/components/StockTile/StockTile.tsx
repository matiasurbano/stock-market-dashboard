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
    <a
      target="_blank"
      rel="noreferrer"
      href={`https://simplywall.st${url}`}
      className={styles.root}
      aria-label={`Open ${name} stock page in a new tab`}
    >
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
      </div>
      <div className={styles.graph}>{renderGraph()}</div>
      <div className={styles.info}>
        <h2 className={styles.lead}>{uniqueSymbol}</h2>
      </div>
    </a>
  );
};
