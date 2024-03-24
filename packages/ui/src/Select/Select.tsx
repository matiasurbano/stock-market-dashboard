import { useSelect } from "downshift";
import { FC } from "react";
import * as styles from "./Select.css";

export type SelectItem = {
  id: string;
  name: string;
};
type SelectProps = {
  label: string;
  selectedItemOption?: SelectItem;
  items: SelectItem[];
  onItemSelect: (item: SelectItem) => void;
};

export const Select: FC<SelectProps> = ({
  label,
  items,
  selectedItemOption,
  onItemSelect,
}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect<SelectItem>({
    items,
    selectedItem: selectedItemOption,
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
          {selectedItem && <>{selectedItem.name}</>}
        </span>
      </button>
      <ul
        className={`${styles.list({
          isOpen,
        })}`}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={`${styles.listItem({
                highlighted: highlightedIndex === index,
                selected: selectedItem === item,
              })}`}
              key={item.id}
              {...getItemProps({ item, index })}
            >
              <span className={styles.listItemLabel}>{item.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
