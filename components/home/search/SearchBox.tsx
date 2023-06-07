"use client";

import { useCombobox } from "downshift";
import cx from "classnames";
import { WikiPage as WikiPageType } from "@prismatypes";
import { useState, useEffect } from "react";

interface SearchBoxProps {
  className?: string;
  handleSelect?: (eventName: string) => void;
  items: WikiPageType[];
}

export default function SearchBox({ items }: SearchBoxProps) {
  const itemTitles = items.map((wikiPage) => {
    return wikiPage.title;
  });

  // function to filter titles according to input value
  function getWikiPageTitleFilter(inputValue?: string) {
    const lowerCasedInputValue = (inputValue || "").toLowerCase();
    return function titleFilter(wikiPage: string) {
      return (
        !inputValue || wikiPage.toLowerCase().includes(lowerCasedInputValue)
      );
    };
  }

  // main combobox function
  function ComboBox() {
    const [items, setItems] = useState(itemTitles);
    useEffect(() => {
      setItems(itemTitles);
    }, []);

    // downshift hook
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
      reset,
    } = useCombobox({
      onInputValueChange({ inputValue }) {
        const filteredItem = items.filter(getWikiPageTitleFilter(inputValue));
        setItems(filteredItem);
      },
      items,
      itemToString(item) {
        return item ? item : "";
      },
    });

    const itemsMap = items.map((item, index) => (
      <li
        className={cx(
          highlightedIndex === index && "bg-green-300",
          selectedItem === item && "font-bold",
          "flex flex-col px-3 py-2 ",
        )}
        key={`${index}`}
        {...getItemProps({ item, index })}
      >
        <span>{item}</span>
      </li>
    ));

    return (
      <div>
        <div className="flex w-11/12 flex-col gap-1">
          <label className="w-fit" {...getLabelProps()}>
            Search for a command:
          </label>
          <div className="flex rounded-lg border border-green-400  bg-green-300 p-2">
            <input
              autoFocus
              onBlur={() => {
                if (selectedItem === null) {
                  reset();
                }
              }}
              placeholder="Type to search..."
              className="w-full rounded-lg bg-green-400 p-1.5 text-lg focus:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              {...getInputProps()}
            />
            <button
              aria-label="toggle menu"
              className="px-2"
              type="button"
              {...getToggleButtonProps()}
            >
              {isOpen ? <>&#8593;</> : <>&#8595;</>}
            </button>
          </div>
        </div>
        <ul
          className={`absolute mt-1 max-h-80 w-72 overflow-scroll bg-green-400 p-0 ${
            !(isOpen && items.length) && "hidden"
          }`}
          {...getMenuProps()}
        >
          {isOpen && itemsMap}
        </ul>
      </div>
    );
  }
  return <ComboBox />;
}
