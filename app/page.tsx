import Card from "@/components/home/card";
import MenuTabs from "@/components/home/menuTabs/menuTabs";
import menuTabStyle from "@/components/home/menuTabs/menuTabStyle";
import SearchBox from "@/components/home/search/SearchBox";
import WebVitals from "@/components/home/web-vitals";
import { Metadata } from "next";
import { getTags } from "@/api/tags/route";
import { getWikiData } from "@/api/wikiData/route";

export const metadata = {
  title: "shortcuts-wiki",
  description: "Personal wiki, based on Precedent.dev",
};


export default async function Page() {
  
  // const wikiData = await getWikiData();
  // const tags = await getTags();
  const wikiData = [
    {
      id: 1,
      title: "open",
      content: null,
      shortcut: "cmd space",
      tagId: 1,
      tag: { id: 1, name: "raycast" },
    },
    {
      id: 2,
      title: "command search",
      content: null,
      shortcut: "#",
      tagId: 2,
      tag: { id: 2, name: "warp" },
    },
    {
      id: 3,
      title: "select all instances of word",
      content: null,
      shortcut: "cmd shift l",
      tagId: 3,
      tag: { id: 3, name: "VScode" },
    },
  ];

  const tags = [
    { id: 1, name: "raycast" },
    { id: 2, name: "warp" },
    { id: 3, name: "VScode" },
  ];


      
  return (
    <>
      <MenuTabs menuTabStyle={menuTabStyle} tags={tags} />
      <SearchBox items={wikiData} />
      <div className="w-11/12">
        <div className="mx-auto grid w-3/4 grid-cols-1 gap-y-2 ">
          {wikiData.map((wikiPage) => (
            <Card
              key={wikiPage.id}
              title={wikiPage.title}
              content={wikiPage.content}
              shortcut={wikiPage.shortcut}
            />
          ))}
        </div>
      </div>
    </>
  );
}
