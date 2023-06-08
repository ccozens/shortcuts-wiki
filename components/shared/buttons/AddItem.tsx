"use client";

import { Plus } from "@/components/shared/icons";

function AddItem() {
  // onClick handler function for the Plus button
  const handleAddClick = () => {
    // todo
    console.log("add item");
  };

  return (
    <button
      className="h-12 w-12 flex rounded-lg bg-green-300"
      onClick={handleAddClick}
    >
      <Plus className="m-auto h-8 w-8 bg-green-400"/>
    </button>
  );
}

export default AddItem;
