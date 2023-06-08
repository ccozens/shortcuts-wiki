"use client";

import Link from "next/link";
import menuTabStyle from "./menuTabStyle";
import { useHotkeys } from "react-hotkeys-hook";

interface MenuTabsProps {
  menuTabStyle: () => string;
  tags: {
    id: number;
    name: string;
  }[];
}

const MenuTabs = ({ menuTabStyle, tags }: MenuTabsProps) => {
  const tagsAndAll = [{ id: 0, name: "All" }, ...tags];

  // useHotkeys("ctrl+k", () => console.log("success"));

  const tagList = tagsAndAll.map((tag) => (
    <Link
      key={tag.id}
      href={tag.name === "All" ? "/" : `tips/${tag.name}`}
      // menuTabStyle.tsx to add active:inactive logic
      className={menuTabStyle()}
    >
      {tag.name}
    </Link>
  ));

  return (
    <>
      <nav className="mb-2 w-11/12">
        <div className="">
          <div className="grid grid-flow-col place-items-center bg-green-50 bg-opacity-10">
            {tagList}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuTabs;
