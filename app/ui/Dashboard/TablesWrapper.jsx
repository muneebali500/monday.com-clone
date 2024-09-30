"use client";

import React, { useState } from "react";

import { tableColumnsData } from "@/app/mock-data/table";
import TableHeaderRow from "./TableHeaderRow";
import SprintTable from "./SprintTable";

export default function TablesWrapper() {
  const [column, setColumn] = useState(null);
  const [tableColData, setTableColData] = useState(tableColumnsData);
  // const [backlogtableColData, setbacklogTableColData] =
  //   useState(tableColumnsData);

  return (
    <div className="tables-data-container">
      <div className="main-table pb-8">
        <TableHeaderRow
          zIndex="z-30"
          setColumn={setColumn}
          tableColData={tableColData}
          setTableColData={setTableColData}
        />

        <SprintTable column={column} tableColData={tableColData} />

        {/* Backlog Table */}
        {/* <div className="group/parent px-10 heading-row flex justify-between items-center mt-10 mb-1.5">
          <div className="sticky left-10 top-0">
            <span className="absolute -left-7 top-1/2 -translate-y-1/2 hidden group-hover/parent:inline-block">
              <DottedIcon />
            </span>

            <div className="group/sub flex-1 flex gap-2 items-center px-3">
              <span>
                <DownArrowIcon />
              </span>
              <h3
                className={`text-lg opacity-30 font-semibold sticky left-10 ${poppins.className}`}
              >
                Backlog
              </h3>
              <span className="text-sm hidden group-hover/sub:inline-block">
                3 Tasks
              </span>
            </div>
          </div>
        </div> */}

        {/* <TableHeaderRow
          zIndex="z-20"
          setColumn={setColumn}
          tableColData={backlogtableColData}
          setTableColData={setbacklogTableColData}
          borderLeftClr="#C4C4C4"
        />

        <SprintTable
          column={column}
          setColumn={setColumn}
          tableColData={backlogtableColData}
        /> */}
      </div>
    </div>
  );
}
