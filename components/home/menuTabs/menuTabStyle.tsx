"use client";

import Pathname from "@/lib/hooks/activePathname";

const menuTabStyle = () => {
  const inactive = "text-green-400 opaci w-full hover:bg-white text-center py-2 hover:bg-gradient-to-r from-green-300 to-green-700 hover:text-black";

  const active = "text-green-400 w-full bg-white text-center py-2 bg-gradient-to-r from-green-300 to-green-700 text-black";

  // const styleToUse = Pathname() === '/' ? active : inactive;

  return inactive
};

export default menuTabStyle;
