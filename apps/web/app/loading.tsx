import styles from "./page.module.css";

import StockTileLoading from "../components/StockTile/StockTileLoading";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <StockTileLoading />
      <StockTileLoading />
    </main>
  );
}
