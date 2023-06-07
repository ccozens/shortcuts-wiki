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
  ];

  console.log(wikiData);
  return (
    <div className="w-11/12">
      <h1 className="text-gray-800">Hello, Next.js!</h1>

      
      <div className="flex">
        {wikiData.map((wikiPage) => (
          <Card
            key={wikiPage.id}
            app={wikiPage.tag.name}
            title={wikiPage.title}
            content={wikiPage.content}
            shortcut={wikiPage.shortcut}
          />
        ))}
      </div>
    </div>
  );
}
