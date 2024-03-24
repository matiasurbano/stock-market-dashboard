"use client";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { Stocks } from "../components/Stocks/Stocks";
import * as styles from "./page.css";

export default function Page() {
  return (
    <main className={styles.container}>
      <div className={styles.filterBar}>
        <FilterBar />
      </div>

      <Stocks />
    </main>
  );
}
