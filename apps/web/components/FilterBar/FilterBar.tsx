import { CountrySelect } from "@repo/ui/country-select";
import * as styles from "./FilterBar.css";
import { CountryOption } from "@repo/types";
import { Select, SelectItem } from "@repo/ui/select";

type FilterBarProps = {};

const defaultCountryOption: CountryOption = { id: "XX", name: "Global" };

const sortOptions: SelectItem[] = [
  { id: "DESC", name: "High to low" },
  { id: "ASC", name: "Low to high" },
];

export const FilterBar: React.FC<FilterBarProps> = () => {
  return (
    <header className={styles.root}>
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <CountrySelect
            label="Market country"
            onCountrySelect={(countryCode) => console.log(countryCode)}
            selectedCountryCode={defaultCountryOption}
          />
          <Select
            label="Sort by market cap"
            items={sortOptions}
            onItemSelect={(selectedItem) => console.log(selectedItem)}
            selectedItemOption={sortOptions[0]}
          />
        </div>
      </div>
    </header>
  );
};
