import { CountrySelect } from "@repo/ui/country-select";
import { Select, SelectItem } from "@repo/ui/select";
import * as styles from "./FilterBar.css";
import { useDashboardContext } from "../../hooks/DashboardContext";

type FilterBarProps = {};

const sortOptions: SelectItem[] = [
  { id: "DESC", name: "High to low" },
  { id: "ASC", name: "Low to high" },
];

export const FilterBar: React.FC<FilterBarProps> = () => {
  const {
    marketCountry,
    handleMarketCountry,
    marketCapSort,
    handleMarketCapSort,
  } = useDashboardContext();
  return (
    <header className={styles.root}>
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <CountrySelect
            label="Market country"
            onCountrySelect={(countryCode) => handleMarketCountry(countryCode)}
            selectedCountryCode={marketCountry}
          />
          <Select
            label="Sort by market cap"
            items={sortOptions}
            onItemSelect={(selectedItem) => handleMarketCapSort(selectedItem)}
            selectedItemOption={marketCapSort}
          />
        </div>
      </div>
    </header>
  );
};
