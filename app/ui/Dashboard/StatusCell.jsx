"use client";

import React, { useState } from "react";
import { statusColData } from "@/app/mock-data/table";

export default function StatusCell({ tabIndex }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  return (
    <li
      tabIndex={tabIndex}
      className="group/parent relative flex justify-center whitespace-nowrap items-center bg-blue-800 text-white min-w-36 border-r border-b px-2"
      style={{
        backgroundColor: selectedOption.bgColor || "#C4C4C4",
      }}
      onClick={() => setOpenModal(!openModal)}
      onBlur={() => setOpenModal(false)}
    >
      <h3 className="p-2">{selectedOption.name}</h3>
      {openModal && (
        <ul className="popup absolute top-full left-1/2 -translate-x-1/2 grid gap-2 p-6 shadow-xl whitespace-nowrap rounded-md bg-white z-50">
          {statusColData.map((col) => (
            <>
              <li
                key={col.id}
                className="h-8 w-36 py-1.5 rounded-sm text-center"
                style={{ backgroundColor: col.bgColor }}
                onClick={() => setSelectedOption(col)}
              >
                {col.name}
              </li>
            </>
          ))}
        </ul>
      )}
    </li>
  );
}
