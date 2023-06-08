"use client";

import { Delete } from "@/components/shared/icons";
import { WikiPageTypeWithKey } from "@/lib/types";

interface DeleteItemProps {
  wikiPage: WikiPageTypeWithKey;
}

function DeleteItem({ wikiPage }: DeleteItemProps) {
  // onClick handler function for the Delete button
  const handleDeleteClick = () => {
    // todo
    console.log('delete ', wikiPage.title);
  };

  return (
    <Delete
      className="h-6 w-6 hover:cursor-pointer"
      handleDeleteClick={handleDeleteClick}
    />
  );
}

export default DeleteItem;
