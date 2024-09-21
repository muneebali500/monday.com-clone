"use client";

import React, { useState, useRef, useEffect } from "react";

export default function EditableElement({ textContent, headingStyle, id }) {
  const elementRef = useRef();
  const [isEditing, setIsEditing] = useState(false); // Track editing mode
  const [text, setText] = useState(textContent); // Initial text for h5

  //   useEffect(() => {
  //     console.log(elementRef.current);
  //     console.log(elementRef.current.clientWidth);
  //   }, [text]);

  // Handle input change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Handle blur (when input loses focus)
  const handleBlur = () => {
    setIsEditing(false); // Exit editing mode on blur
  };

  // Handle keypress (Enter key to save changes)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          autoFocus
          className="w-full px-1 peer"
        />
      ) : (
        <h6
          ref={elementRef}
          onClick={() => setIsEditing(true)}
          className={`peer transition ${
            id === 1 ? "group-hover/item:-translate-x-2" : ""
          } whitespace-nowrap overflow-hidden px-1 py-0.5 hover:border rounded-md focus:w-full focus:border outline-none focus:group-hover/item:translate-x-0 ${headingStyle}`}
        >
          {text}
        </h6>
      )}
    </>
  );
}
