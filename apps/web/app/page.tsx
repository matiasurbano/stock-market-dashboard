import { Workspace } from "@repo/types";
import { SnowflakeScore } from "@repo/ui/snowflake";
import styles from "./page.module.css";
import { FilterBar } from "../components/FilterBar/FilterBar";

const workspace: Workspace = {
  name: "web",
  version: "2",
};

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <FilterBar />
      {/* StockList */}
      <SnowflakeScore />
    </main>
  );
}
