import { useSelect } from "downshift";
import countries, { Alpha2Code } from "i18n-iso-countries";
import { FC } from "react";
import * as styles from "./CountrySelect.css";
import { CountryOption } from "@repo/types";

// Support english languages.
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

type countryCode = Alpha2Code;
type CountrySelectProps = {
  label: string;
  selectedCountryCode: CountryOption;
  onCountrySelect: (countryCode: countryCode) => void;
};

type CountryIconProps = {
  countryCode: string;
};

const getFlagEmoji = (countryCode: any) =>
  String.fromCodePoint(
    ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
  );

const CountryIcon: React.FC<CountryIconProps> = ({ countryCode }) => {
  if (!countryCode || countryCode === "XX") return "🌏";
  return <>{getFlagEmoji(countryCode)}</>;
};

export const CountrySelect: FC<CountrySelectProps> = ({
  selectedCountryCode,
  label,
}) => {
  const itemToString = (item: CountryOption | null) => {
    return item ? item.name : "";
  };

  const list: CountryOption[] = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([id, name]) => ({ id, name }) as CountryOption);

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
  });

  return (
    <div className={styles.root}>
      <legend className={styles.label} {...getLabelProps()}>
        {label}
      </legend>
      <button className={styles.trigger} {...getToggleButtonProps()}>
        <span className={styles.preview}>
          {selectedItem && (
            <>
              <CountryIcon countryCode={selectedItem?.id || ""} />{" "}
              {selectedItem.name}
            </>
          )}
        </span>
        <span>{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
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
                <CountryIcon countryCode={item?.id || ""} /> {item.name}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
