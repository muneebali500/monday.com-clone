"use client";

import React, { useState } from "react";

export default function EstimatedCell() {
  const [isItemHovered, setIsItemHovered] = useState(false);
  const [focusState, setFocusState] = useState(false);
  const [estimatedValue, setEstimatedValue] = useState("");

  function handleMouseMove(mouseValue) {
    if (estimatedValue !== "" || focusState) {
      return;
    } else {
      if (mouseValue === "enter") {
        setIsItemHovered(true);
      } else {
        setIsItemHovered(false);
      }
    }
  }

  return (
    <li
      className="group/parent px-1 flex justify-center items-center min-w-36 text-sm border-r border-b"
      onMouseEnter={() => handleMouseMove("enter")}
      onMouseLeave={() => handleMouseMove("leave")}
    >
      <div
        className={`group/sub border rounded w-full relative justify-center items-center ${
          isItemHovered ? "flex" : "hidden"
        }`}
      >
        <input
          type="number"
          className="w-full rounded p-1 focus:outline-none focus:ring-1 text-center text-sm"
          value={estimatedValue}
          onFocus={() => {
            setEstimatedValue(estimatedValue || 0);
            setIsItemHovered(true);
            setFocusState(true);
          }}
          onBlur={() => {
            setFocusState(false);
            if (estimatedValue === "") {
              setIsItemHovered(false);
            }
          }}
          onChange={(e) => setEstimatedValue(e.target.value)}
        />
        {focusState || estimatedValue !== "" ? (
          ""
        ) : (
          <span
            className={`absolute bg-btnHover h-3 w-3 text-white ${
              isItemHovered ? "flex" : "hidden"
            } justify-center items-center rounded-full`}
          >
            +
          </span>
        )}
      </div>
    </li>
  );
}
