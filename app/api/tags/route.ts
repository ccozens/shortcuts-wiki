import prisma from "@prismaclient";

export async function getTags() {
  const res = await prisma.tag.findMany();
  return res;
}
