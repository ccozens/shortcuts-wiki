"use client";

import { Edit } from "@/components/shared/icons";
import { WikiPageTypeWithKey } from "@/lib/types";

interface EditItemProps {
  wikiPage: WikiPageTypeWithKey;
}

function EditItem({ wikiPage }: EditItemProps) {
  // onClick handler function for the edit button
  const handleEditClick = () => {
    // todo
    console.log(wikiPage);
  };

  return (
    <Edit
      className="h-6 w-6 hover:cursor-pointer"
      handleEditClick={handleEditClick}
    />
  );
}

export default EditItem;
