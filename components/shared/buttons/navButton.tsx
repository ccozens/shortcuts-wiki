import React from "react";
interface navButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string | React.ReactNode;
  children?: React.ReactNode;
}

const NavButton = ({ className, onClick, text }: navButtonProps) => {



  className =
    "rounded-full border border-green-400 bg-black p-1.5 px-4 text-sm text-green-200 transition-all hover:bg-gradient-to-r from-green-100 to-green-800 hover:text-black";



  return <button className={className} onClick={onClick} 
 >{text}</button>;
};

export default NavButton;
