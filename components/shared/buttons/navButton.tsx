import React from "react";
import Link from "next/link";

interface navButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // link?: typeof Link;
  text: string | React.ReactNode;
  children?: React.ReactNode;
}

const NavButton = ({ className, onClick, text }: navButtonProps) => {
  className =
    "rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black";

  return <button className={className} onClick={onClick}>{text}</button>;
};

export default NavButton;
