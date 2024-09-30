"use client";

import React, { useState } from "react";

export default function ActualCell() {
  const [isItemHovered, setIsItemHovered] = useState(false);
  const [focusState, setFocusState] = useState(false);
  const [actualSPValue, setActualSPValue] = useState("");

  function handleMouseMove(mouseValue) {
    if (actualSPValue !== "" || focusState) {
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
          value={actualSPValue}
          onFocus={() => {
            setActualSPValue(actualSPValue || 0);
            setIsItemHovered(true);
            setFocusState(true);
          }}
          onBlur={() => {
            setFocusState(false);
            if (actualSPValue === "") {
              setIsItemHovered(false);
            }
          }}
          onChange={(e) => setActualSPValue(e.target.value)}
        />
        {focusState || actualSPValue !== "" ? (
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
