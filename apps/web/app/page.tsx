"use client";
import { CountryOption } from "@repo/types";
import { SelectItem } from "@repo/ui/select";
import { useState } from "react";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { Stocks } from "../components/Stocks/Stocks";
import { DashboardContext } from "../hooks/DashboardContext";
import * as styles from "./page.css";

export default function Page() {
  const [marketCountry, setMarketCountry] = useState<CountryOption>({
    id: "XX",
    name: "Global",
  });
  const [marketCapSort, setMarketCapSort] = useState<SelectItem>({
    id: "DESC",
    name: "High to low",
  });

  const handleMarketCountry = (countryCode: CountryOption) => {
    setMarketCountry(countryCode);
  };

  const handleMarketCapSort = (sortOption: SelectItem) => {
    setMarketCapSort(sortOption);
  };

  return (
    <main className={styles.container}>
      <DashboardContext.Provider
        value={{
          marketCountry,
          handleMarketCountry,
          marketCapSort,
          handleMarketCapSort,
        }}
      >
        <div className={styles.filterBar}>
          <FilterBar />
        </div>

        <Stocks />
      </DashboardContext.Provider>
    </main>
  );
}
