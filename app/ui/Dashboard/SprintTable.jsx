"use client";

import React, { useState, useEffect } from "react";

import {
  singleTableRow,
  tableColumnsData,
  tableRowsData,
} from "@/app/mock-data/table";

import StatusCell from "./StatusCell";
import PriorityCell from "./PriorityCell";
import TypeCell from "./TypeCell";
import OwnerCell from "./OwnerCell";
import EstimatedCell from "./EstimatedCell";
import ActualSPCell from "./ActualSPCell";
import TableHeaderRow from "./TableHeaderRow";
import TaskCell from "./TaskCell";

export default function SprintTable({
  borderLeftClr,
  column,
  setColumn,
  tableColData,
  setTableColData,
}) {
  const [taskInput, setTaskInput] = useState("");
  const [rowsData, setRowsData] = useState(tableRowsData);
  const [newRowData, setNewRowData] = useState(singleTableRow);

  // adds new row
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: 0,
      colName: "Task",
      value: taskInput,
      checked: true,
    };
    setRowsData((prev) => [...prev, [newTask, ...newRowData]]);
    setTaskInput("");
  }

  // updates table rows data newRowPlaceholder data when column or column.checked changes
  useEffect(() => {
    const updatedRows = rowsData.map((row) => {
      return updateRow(row);
    });

    setRowsData(updatedRows);
    setNewRowData(updateRow(newRowData));
  }, [column?.checked, column]);

  // to update row with new data
  function updateRow(row) {
    const updatedRow = row.map((col) =>
      col.id === column?.id ? { ...col, checked: !col.checked } : col
    );

    return updatedRow;
  }

  // function to update rows whenever any cell value changes
  function updateRows(rowIndex, column, selectedValue) {
    const updatedRows = rowsData.map((row, index) => {
      // find updated row by index
      if (rowIndex === index) {
        const updatedRow = row.map((col) => {
          // find updated column
          if (col.colName === column.colName) {
            return {
              ...col,
              value: selectedValue,
            };
          } else {
            return col;
          }
        });

        return updatedRow;
      } else {
        return row;
      }
    });

    setRowsData(updatedRows);
  }

  return (
    <div className="sprint-table">
      {/* use table-body to add rows */}
      {rowsData.map((row, rowIndex) => (
        <ul
          key={rowIndex}
          className="group/row relative text-sm flex h-9 cursor-pointer"
        >
          {row.map(
            (col) =>
              col.checked && (
                <>
                  {col.colName === "Task" && (
                    <TaskCell
                      col={col}
                      rowIndex={rowIndex}
                      updateRows={updateRows}
                      borderLeftClr={borderLeftClr}
                    />
                  )}

                  {col.colName === "Owner" && (
                    <OwnerCell
                      col={col}
                      rowIndex={rowIndex}
                      updateRows={updateRows}
                    />
                  )}

                  {col.colName === "Status" && (
                    <StatusCell
                      col={col}
                      rowIndex={rowIndex}
                      updateRows={updateRows}
                    />
                  )}

                  {col.colName === "Priority" && (
                    <PriorityCell
                      col={col}
                      rowIndex={rowIndex}
                      updateRows={updateRows}
                    />
                  )}

                  {col.colName === "Type" && (
                    <TypeCell
                      col={col}
                      rowIndex={rowIndex}
                      updateRows={updateRows}
                    />
                  )}

                  {col.colName === "Estimated SP" && (
                    <EstimatedCell
                      col={col}
                      rowIndex={rowIndex}
                      updateRows={updateRows}
                    />
                  )}

                  {col.colName === "Actual SP" && (
                    <ActualSPCell
                      col={col}
                      rowIndex={rowIndex}
                      updateRows={updateRows}
                    />
                  )}

                  {col.colName === "Task Due Date" && (
                    <li className="group/parent relative flex justify-center items-center min-w-36 border-r border-b">
                      <div className="p-2">{col.value}</div>
                    </li>
                  )}

                  {col.colName === "Role" && (
                    <li className="group/parent relative flex justify-center items-center min-w-36 border-r border-b">
                      <div className="p-2">{col.value}</div>
                    </li>
                  )}

                  {col.colName === "Item ID" && (
                    <li className="group/parent relative flex justify-center items-center min-w-36 border-r border-b">
                      <div className="p-2">{col.value}</div>
                    </li>
                  )}
                </>
              )
          )}

          <li className="group/parent relative flex justify-center items-center min-w-20 border-r-0 border-b">
            <div className="p-2"></div>
          </li>
        </ul>
      ))}

      {/* table last row to add rows */}
      <ul className="tab-row text-sm h-9 flex hover:bg-hoverItem bg-white">
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
        <li className="sticky left-10 bg-white z-10 min-w-[24rem] border-t rounded-tl-md"></li>
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
