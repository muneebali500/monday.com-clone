import React from "react";
import {
  DottedIcon,
  DownArrowSolidIcon,
  UpArrowSolidIcon,
} from "@/app/public/icons/icon";

export default function TableHead({
  colName,
  infoIcon,
  colStyle,
  headingStyle,
  dottedIcon,
  id,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const currentValue = e.target.innerText;
      console.log("Submitted value:", currentValue);
    }
  };

  return (
    <li
      className={`tab-cell group/item relative p-1.5 flex justify-center items-center hover:bg-[#f5f6f8] ${colStyle}`}
    >
      <h6
        className={`peer transition ${
          id === 1 ? "group-hover/item:-translate-x-2" : ""
        } whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 ${headingStyle}`}
        contentEditable
        onKeyDown={handleKeyDown}
      >
        {colName}
      </h6>
      <span className="absolute right-2 opacity-0 transition rounded-normal p-0.5 cursor-pointer hover:bg-gray-300 group-hover/item:opacity-100 peer-focus:hidden">
        <DottedIcon className="w-4 h-4" />
      </span>
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/item:flex hover:bg-btnHover group/sort peer-focus:hidden">
        <UpArrowSolidIcon className="-mb-2 group-hover/sort:fill-white" />
        <DownArrowSolidIcon className="group-hover/sort:fill-white" />
      </span>
    </li>
  );
}
