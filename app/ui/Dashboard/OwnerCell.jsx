import React from "react";

import Image from "next/image";
import userPlacehodlerImage from "@/app/public/images/dapulse-person-column.svg";

export default function OwnerCell({ tabIndex }) {
  return (
    <li
      tabIndex={tabIndex}
      className="group relative flex justify-center items-center min-w-24 px-2 border-r border-b"
    >
      <span className="absolute left-2.5 bg-btnHover h-3 w-3 rounded-full items-center justify-center text-md text-white hidden group-hover:flex cursor-pointer">
        +
      </span>
      <figure className="">
        <Image
          src={userPlacehodlerImage}
          width={24}
          height={24}
          alt="User Placeholder Image"
        />
      </figure>
    </li>
  );
}
