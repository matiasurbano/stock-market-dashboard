import * as styles from "./StockTile.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const StockTileLoading: React.FC = () => {
  return (
    <div className={styles.wrapper} aria-busy="true">
      <div className={styles.root}>
        <div className={styles.info}>
          <p className={styles.title}>
            <Skeleton width={50} />
          </p>
          <p className={styles.subTitle}>
            <Skeleton width={30} />
          </p>
        </div>
        <div className={styles.graph}>
          <Skeleton circle={true} height={200} width={200} />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>
            <Skeleton width={30} />
          </p>
          <p className={styles.subTitle} aria-disabled="true">
            Market Cap
          </p>
        </div>
      </div>
    </div>
  );
};
