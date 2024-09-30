"use client";

import React, { useState, useEffect } from "react";
import { typeColData } from "@/app/mock-data/table";

export default function StatusCell({ col, rowIndex, updateRows }) {
  const { id, colName, value } = col;

  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    const matchedOption = typeColData.find((col) => col.value === value);
    if (matchedOption) {
      setSelectedOption(matchedOption);
    } else {
      setSelectedOption({});
    }
  }, [value]);

  return (
    <li
      tabIndex={id}
      className="group/parent relative flex justify-center whitespace-nowrap items-center text-white min-w-36 border-r border-b px-2"
      style={{
        backgroundColor: selectedOption?.bgColor || "#C4C4C4",
      }}
      onClick={() => setOpenModal(!openModal)}
      onBlur={() => setOpenModal(false)}
    >
      <h3 className="p-2">{value}</h3>
      {openModal && (
        <ul className="popup absolute top-full left-1/2 -translate-x-1/2 grid gap-2 p-6 shadow-xl whitespace-nowrap rounded-md bg-white z-50">
          {typeColData.map((type) => (
            <>
              <li
                key={col.id}
                className="h-8 w-36 py-1.5 rounded-sm text-center"
                style={{ backgroundColor: type.bgColor }}
                onClick={() => {
                  updateRows(rowIndex, col, type.value);
                }}
              >
                {type.value}
              </li>
            </>
          ))}
        </ul>
      )}
    </li>
  );
}
