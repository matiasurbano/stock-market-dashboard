import * as styles from "./page.css";

import StockTileLoading from "../components/StockTile/StockTileLoading";

export default function Page(): JSX.Element {
  return (
    <main className={styles.container}>
      <StockTileLoading />
      <StockTileLoading />
    </main>
  );
}
