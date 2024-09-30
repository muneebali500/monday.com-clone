"use client";

import React, { useState, useRef, useEffect } from "react";

// import { tableColumnsData } from "@/app/mock-data/table";
import TableHead from "./TableHead";
import {
  DownArrowSolidIcon,
  PlusIcon,
  UpArrowSolidIcon,
} from "@/app/ui/Icons/Icon";

export default function TableHeaderRow({
  zIndex,
  borderLeftClr,
  setColumn,
  tableColData,
  setTableColData,
}) {
  // const [tableColData, setTableColData] = useState(tableColumnsData);
  const [addColModal, setAddColModal] = useState(false);
  const popupRef = useRef(null); // Ref for the popup
  const buttonRef = useRef(null); // Ref for the Plus button

  // Function to handle outside click
  useEffect(() => {
    function handleClickOutside(event) {
      // If click happens outside both the modal and the button, close the modal
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setAddColModal(false); // Close the modal when clicking outside
      }
    }

    // Add event listener for mousedown to detect clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef, buttonRef]);

  // add and remove columns
  function handleColumns(col) {
    setColumn(col);
    setTableColData((prev) =>
      prev.map((item) =>
        item.id === col.id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <>
      <ul
        className={`table-head text-sm rounded-tl-md flex h-9 bg-white sticky top-[12.2rem] ${zIndex}`}
      >
        <li className={`bg-white h-full min-w-10 sticky left-0 ${zIndex}`}></li>
        {/* first row first column */}
        <li
          className={`flex rounded-tl-md border border-l-[6px] ${
            borderLeftClr || "border-l-green-800"
          } sticky left-10 min-w-[24rem] bg-white ${zIndex}`}
        >
          <div tabIndex={0} className="p-2 flex justify-center items-center">
            <input type="checkbox" className="w-2 md:w-3.5" />
          </div>

          <div tabIndex={1} className="flex flex-1 border-l">
            <div className="group/head relative p-2 flex-1 flex justify-center items-center">
              <h6>Task</h6>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/head:flex hover:bg-btnHover group/sort">
                <UpArrowSolidIcon className="-mb-2 group-hover/sort:fill-white" />
                <DownArrowSolidIcon className="group-hover/sort:fill-white" />
              </span>
            </div>
          </div>
        </li>

        {/* use table-head to add columns */}
        <li className="flex">
          {tableColData.map(
            (col) =>
              col.checked && (
                <ul
                  className="flex *:border-y *:[&:not(:last-child)]:border-r bg-white"
                  key={col.id}
                >
                  <TableHead {...col} />
                </ul>
              )
          )}
        </li>

        <li className="min-w-20 p-1.5 flex items-center hover:bg-[#f5f6f8] border border-r-0 relative bg-white">
          <span
            ref={buttonRef} // Reference to the Plus button
            className="p-0.5 hover:bg-hoverItem cursor-pointer rounded"
            onClick={() => setAddColModal(!addColModal)} // Toggle modal
          >
            <PlusIcon />
          </span>

          {addColModal && (
            <ul
              ref={popupRef} // Reference to the popup element
              tabIndex={0}
              className="popup absolute -top-32 right-full grid gap-2 p-5 shadow-xl whitespace-nowrap rounded-md bg-white z-20"
            >
              {tableColData.map((col) => (
                <li
                  key={col.id}
                  className="h-8 w-36 py-1.5 flex items-center p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={col.checked}
                    className="mr-2 cursor-pointer"
                    onChange={() => handleColumns(col)}
                  />
                  {col.colName}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
}
