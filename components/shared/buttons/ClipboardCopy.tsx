"use client";

import { CopyOutline, CopyFilled } from "@/components/shared/icons";
import { useState } from "react";

function ClipboardCopy({
  text,
}: {
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // copy the text
    navigator.clipboard.writeText(text).then(() => {
      // set the copied state to true
      setCopied(true);
      // revert back to false after 2 seconds
      setTimeout(() => setCopied(false), 1000);
    });
  };

  const icon = copied ? (
    <CopyFilled className="h-6 w-6" />
  ) : (
    <CopyOutline
      className="h-6 w-6 hover:animate-pulse hover:cursor-pointer"
      handleCopyClick={handleCopyClick}
    />
  );

  return <>{icon}</>;
}

export default ClipboardCopy;
