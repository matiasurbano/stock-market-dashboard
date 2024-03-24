import { CountryOption } from "@repo/types";
import { useSelect } from "downshift";
import countries from "i18n-iso-countries";
import { FC } from "react";
import * as styles from "./CountrySelect.css";
import { SupportedCountryCodes } from "./supported-countries";

// Support english languages.
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

type CountrySelectProps = {
  label: string;
  selectedCountryCode: CountryOption;
  onCountrySelect: (countryCode: CountryOption) => void;
};

type CountryIconProps = {
  countryCode: string;
};

const getFlagEmoji = (countryCode: any) =>
  String.fromCodePoint(
    ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
  );

const Chevron = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9497 9.0474C16.5592 8.65688 15.9261 8.65688 15.5355 9.0474L12 12.5829L8.46447 9.0474C8.07394 8.65688 7.44078 8.65688 7.05025 9.0474C6.65973 9.43793 6.65973 10.0711 7.05025 10.4616L11.2929 14.7043C11.6834 15.0948 12.3166 15.0948 12.7071 14.7043L16.9497 10.4616C17.3403 10.0711 17.3403 9.43793 16.9497 9.0474Z"
      ></path>
    </svg>
  );
};

const CountryIcon: React.FC<CountryIconProps> = ({ countryCode }) => {
  if (!countryCode || countryCode === "XX") return "🌏";
  return <>{getFlagEmoji(countryCode)}</>;
};

export const CountrySelect: FC<CountrySelectProps> = ({
  selectedCountryCode,
  onCountrySelect,
  label,
}) => {
  const itemToString = (item: CountryOption | null) => {
    return item ? item.name : "";
  };

  const list: CountryOption[] = Object.entries(
    countries.getNames("en", { select: "official" })
  )
    .map(([id, name]) => ({ id, name }) as CountryOption)
    .filter((country) => SupportedCountryCodes.includes(country.id))
    .sort((a, b) => a.name.localeCompare(b.name));

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect<CountryOption>({
    items: list,
    itemToString,
    selectedItem: selectedCountryCode,
    onSelectedItemChange: ({ selectedItem }) => {
      onCountrySelect(
        selectedItem ||
          ({
            id: "XX",
            name: "Global",
          } as CountryOption)
      );
    },
  });

  return (
    <div className={styles.root}>
      {label && (
        <legend className={styles.label} {...getLabelProps()}>
          {label}
        </legend>
      )}

      <button className={styles.trigger} {...getToggleButtonProps()}>
        <span className={styles.preview}>
          {selectedItem && (
            <>
              <CountryIcon countryCode={selectedItem?.id || ""} />
              {"  "}
              {selectedItem.name}
            </>
          )}
        </span>
        <span className={styles.chevron}>
          <Chevron />
        </span>
      </button>
      <ul
        className={`${styles.list({
          isOpen,
        })}`}
        {...getMenuProps()}
      >
        {isOpen &&
          list.map((item, index) => (
            <li
              className={`${styles.listItem({
                highlighted: highlightedIndex === index,
                selected: selectedItem === item,
              })}`}
              key={item.id}
              {...getItemProps({ item, index })}
            >
              <span className={styles.listItemLabel}>
                <CountryIcon countryCode={item?.id || ""} />
                {"  "} {item.name}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
