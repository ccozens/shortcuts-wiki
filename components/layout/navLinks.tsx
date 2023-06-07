"use client";

import Pathname from "@/lib/hooks/activePathname";
import Link from "next/link";
import { Github } from "@/components/shared/icons";

const navLinks = () => {
    
    
    const homeLink = <Link href="/">Home</Link>;
    const aboutLink = <Link href="/about">About</Link>;
    const githubLink = (
        <Link
        href="https://github.com/ccozens/shortcuts-wiki"
        target="_blank"
        rel="noopener noreferrer"
        >
      <span className="flex gap-2">
        <Github />
        Code
      </span>
    </Link>
  );

  const homeOrAbout = Pathname() === '/' ? aboutLink : homeLink;
  return {githubLink, homeOrAbout}
};

export default navLinks;
