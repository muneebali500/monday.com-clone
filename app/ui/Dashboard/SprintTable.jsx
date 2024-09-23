"use client";

import React, { useState } from "react";

import { tableColumnsData } from "@/app/mock-data/table";
import TableHead from "./TableHead";
import StatusCell from "./StatusCell";
import PriorityCell from "./PriorityCell";
import TypeCell from "./TypeCell";
import OwnerCell from "./OwnerCell";
import EstimatedCell from "./EstimatedCell";
import {
  DottedIcon,
  MagnifyingPlusIcon,
  RightArrowIcon,
} from "@/app/ui/Icons/Icon";
import EditableElement from "./EditableElement";
import ActualSPCell from "./ActualSPCell";
import TableHeaderRow from "./TableHeaderRow";

export default function SprintTable({ borderLeftClr }) {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([
    "Create new dashboard",
    "Gather assets",
    "Perform optimization",
  ]);
  const [tableColData, setTableColData] = useState(tableColumnsData);

  function handleSubmit(e) {
    e.preventDefault();
    setTasks((prev) => [...prev, taskInput]);
    setTaskInput("");
  }

  return (
    <div className="sprint-table">
      {/* table header row */}

      {borderLeftClr && <TableHeaderRow zIndex="z-20" />}

      {/* use table-body to add rows */}
      {tasks.map((task, index) => (
        <ul
          key={index}
          className="group/row relative text-sm flex h-9 cursor-pointer"
        >
          <li className="bg-white h-full min-w-10 sticky left-0 top-10 z-10 flex justify-center items-center">
            <span className="absolute hidden group-hover/row:inline-block">
              <DottedIcon />
            </span>
          </li>
          {/* left column */}
          <li
            className={`flex border-b border-r ${
              borderLeftClr || "border-l-green-800"
            } border-l-[6px] sticky left-10 bg-white z-10 min-w-[24rem] overflow-hidden`}
          >
            <div
              tabIndex={index}
              className="px-2 flex justify-center items-center"
            >
              <input type="checkbox" className="w-2 md:w-3.5" />
            </div>

            <div tabIndex={index} className="group/parent flex-1 border-l flex">
              <div className="group/head relative flex-1 flex items-center pl-2 h-full">
                <span className="opacity-0 group-hover/head:opacity-100">
                  <RightArrowIcon className="fill-slate-400 w-1.5" />
                </span>
                <div className="flex-1 ml-2 flex items-center border-r h-full w-1 pr-2">
                  <EditableElement textContent={task} />
                </div>
                <span className="px-4">
                  <MagnifyingPlusIcon className="fill-hoverItem" />
                </span>
              </div>
            </div>
          </li>

          {/* right columns */}
          <OwnerCell tabIndex={index} />

          <StatusCell tabIndex={index} />

          <PriorityCell tabIndex={index} />

          <TypeCell tabIndex={index} />

          <EstimatedCell />

          <ActualSPCell />

          <li className="group/parent relative flex justify-center items-center min-w-20 border-r-0 border-b">
            <div className="p-2"></div>
          </li>
        </ul>
      ))}

      {/* table last row to add rows */}
      <ul className="tab-row text-sm h-9 flex hover:bg-hoverItem border-b bg-white">
        <li className="bg-white min-w-10 sticky left-0 top-10 z-20 -mt-1 h-10"></li>
        <li className="flex rounded-bl-md border-l-[6px] hover:border-l-green-800 sticky left-10 z-10 min-w-[24rem]">
          <div className="px-2 flex justify-center items-center">
            <input type="checkbox" className="w-2 md:w-3.5" disabled />
          </div>

          <div className="flex min-w-36 bg-transparent">
            <div className="group border-l pl-1 flex items-center">
              <form className="w-[20rem]" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="+ Add Task"
                  className="w-full outline-none pl-5 py-0.5 group-hover:border rounded-md bg-transparent"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                />
              </form>
            </div>
          </div>
        </li>
      </ul>

      {/* table footer */}
      <ul className="tab-footer flex h-9">
        <li className="bg-white h-full min-w-10 sticky left-0 top-10 z-20"></li>
        <li className="sticky left-10 bg-white z-10 min-w-[24rem]"></li>
        <li className="flex">
          {tableColData.map(
            (col) =>
              col.checked && (
                <div
                  className={`p-1.5 flex justify-center first:rounded-bl-md items-center border-y border-r-0 border-l hover:bg-[#f5f6f8] ${col.colStyle}`}
                  key={col.id}
                ></div>
              )
          )}
        </li>
        <li className="sticky left-10 bg-white z-10 min-w-20 border-l border-y"></li>
      </ul>
    </div>
  );
}
