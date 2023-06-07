import prisma from "@prismaclient";

export async function getWikiData() {
  const wikiData = await prisma.wikiPage.findMany({
    include: {
      tag: true,
    },
  });
  return wikiData;
}