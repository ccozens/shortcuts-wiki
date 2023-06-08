"use client";

import { useCombobox } from "downshift";
import getWikiPageTitleFilter from "./getWikiPageTitleFilter";
import cx from "classnames";
import { WikiPage as WikiPageType } from "@prismatypes";
import { useState, useEffect } from "react";
import Card from "@/components/home/card";
interface SearchBoxProps {
  className?: string;
  items: WikiPageType[];
}

export default function SearchBox({ items }: SearchBoxProps) {
  const itemTitles = items.map((wikiPage) => {
    return wikiPage.title;
  });
  const allItems = items;

  // main combobox function
  function ComboBox() {
    const [items, setItems] = useState(itemTitles);
    useEffect(() => {
      setItems(itemTitles);
    }, []);
    const [selectedItem, setSelectedItem] = useState<string | null | undefined>(
      null,
    );

    // downshift hook
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
    } = useCombobox({
      onInputValueChange({ inputValue }) {
        const filteredItem = items.filter(getWikiPageTitleFilter(inputValue));
        setItems(filteredItem);
      },
      items,
      itemToString(item) {
        return item ? item : "";
      },
      selectedItem,
      onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
        setSelectedItem(newSelectedItem);
      },
    });

    const itemsMap = items.map((item, index) => (
      <li
        className={cx(
          highlightedIndex === index && "bg-green-300",
          selectedItem === item && "font-bold",
          "flex flex-col px-3 py-2",
        )}
        key={`${index}`}
        {...getItemProps({ item, index })}
      >
        <span>{item}</span>
      </li>
    ));

    const fullSelectedItem = allItems.find(
      (item) => item.title === selectedItem,
    );

    return (
      <div className="mb-6 w-11/12">
        <div className="flex flex-col gap-1 ">
          <label className="w-fit" {...getLabelProps()}>
            Search for a command:
          </label>
          <div className="mx-auto flex w-1/2 rounded-lg border border-green-400  bg-green-300 p-2">
            <input
              // autoFocus
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
          className={`mx-auto my-2 max-h-80 w-1/2 overflow-scroll overflow-x-hidden overflow-y-auto  bg-green-400 p-0 ${
            !(isOpen && items.length) 
            && "hidden"
          }`}
          {...getMenuProps()}
        >
          {isOpen && itemsMap}
        </ul>
        {fullSelectedItem && (
          <div className="mx-auto my-3 w-3/4 rounded-lg">
            <Card
              wikiPage={fullSelectedItem}
            />
          </div>
        )}
      </div>
    );
  }
  return <ComboBox />;
}
