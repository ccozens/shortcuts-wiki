import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import WebVitals from "@/components/home/web-vitals";
import { Metadata } from "next";
import prisma from "@prismaclient";

export const metadata = {
  title: "shortcuts-wiki",
  description: "Personal wiki, based on Precedent.js",
};

export const revalidate = 3600;

async function getWikiData() {
  const wikiData = await prisma.wikiPage.findMany({
    include: {
      tag: true,
    },
  });
  return wikiData;
}

export default async function Page() {
  // const wikiData = await getWikiData();
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

  console.log(wikiData);
  return (
    <div className="w-11/12">
      
      <div className="grid grid-cols-1 gap-y-2 w-3/4 mx-auto ">
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
  );
}
