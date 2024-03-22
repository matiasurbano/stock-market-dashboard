import { CountrySelect } from "@repo/ui/country-select";
import * as styles from "./FilterBar.css";
import { CountryOption } from "@repo/types";

type FilterBarProps = {};

const defaultCountryOption: CountryOption = { id: "AU", name: "Australia" };
const defaultCountryOption2: CountryOption = { id: "US", name: "USA" };

export const FilterBar: React.FC<FilterBarProps> = () => {
  return (
    <header className={styles.root}>
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <CountrySelect
            label="by country"
            onCountrySelect={(countryCode) => console.log(countryCode)}
            selectedCountryCode={defaultCountryOption}
          />
          <CountrySelect
            label="by country2"
            onCountrySelect={(countryCode) => console.log(countryCode)}
            selectedCountryCode={defaultCountryOption2}
          />
        </div>
      </div>
    </header>
  );
};
