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
      <div className={styles.graph}>{renderGraph()}</div>
      <div className={styles.info}>
        <h2 className={styles.title}>{uniqueSymbol}</h2>
        <h3 className={styles.lead}>{name}</h3>
      </div>
    </a>
  );
};
