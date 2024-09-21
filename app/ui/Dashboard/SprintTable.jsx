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
  DownArrowSolidIcon,
  MagnifyingPlusIcon,
  PlusIcon,
  RightArrowIcon,
  UpArrowSolidIcon,
} from "@/app/ui/Icons/Icon";
import EditableElement from "./EditableElement";
import ActualSPCell from "./ActualSPCell";

export default function SprintTable({ borderLeftClr }) {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([
    "Create new dashboard",
    "Gather assets",
    "Perform optimization",
  ]);
  const [tableColData, setTableColData] = useState(tableColumnsData);
  const [addColModal, setAddColModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setTasks((prev) => [...prev, taskInput]);
    setTaskInput("");
  }

  function handleColumns(id) {
    setTableColData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, checked: item.checked ? false : true }
          : item
      )
    );
  }

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();

  //     const currentValue = e.target.innerText;
  //   }
  // };

  return (
    <div className="sprint-table">
      {/* table header row */}
      <ul
        className={`table-head text-sm rounded-tl-md flex h-9 bg-white sticky top-[12.2rem] z-30`}
      >
        <li className="bg-white h-full min-w-10 sticky left-0 top-10 z-20"></li>
        {/* first row first column */}
        <li
          className={`flex rounded-tl-md border border-l-[6px] ${
            borderLeftClr || "border-l-green-800"
          }  sticky left-10 top-10 min-w-[24rem] bg-white z-20`}
        >
          <div tabIndex={0} className="p-2 flex justify-center items-center">
            <input type="checkbox" />
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

        <li
          tabIndex={0}
          className="min-w-20 p-1.5 flex items-center hover:bg-[#f5f6f8] cursor-pointer border border-r-0 relative bg-white"
          onClick={(e) => {
            e.stopPropagation();
            setAddColModal(!addColModal);
          }}
          onBlur={(e) => {
            e.stopPropagation();
            setAddColModal(false);
          }}
        >
          <span className="">
            <PlusIcon />
          </span>

          {addColModal && (
            <ul className="popup absolute top-full right-5 grid gap-2 p-5 shadow-xl whitespace-nowrap rounded-md bg-white z-20">
              {tableColData.map((col) => (
                <>
                  <li
                    key={col.id}
                    className="h-8 w-36 py-1.5 flex items-center hover:bg-hoverItem p-2 rounded"
                    onClick={() => handleColumns(col.id)}
                  >
                    <input
                      type="checkbox"
                      checked={col.checked}
                      className="mr-2"
                    />
                    {col.colName}
                  </li>
                </>
              ))}
            </ul>
          )}
        </li>
      </ul>

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
              <input type="checkbox" />
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
            <input type="checkbox" disabled />
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
