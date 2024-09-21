"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import favImage from "@/app/public/images/favorites-empty.svg";
import { navItemPopupArr } from "@/app/mock-data/sidebar";

import {
  BugIcon,
  DocumentIcon,
  DottedIcon,
  DownArrowIcon,
  EpicsIcon,
  FilterIcon,
  HappyDayIcon,
  HomeIcon,
  HomeIconSolid,
  MagnifyingGalssIcon,
  PlusIcon,
  RetrospectivesIcon,
  SprintsIcon,
  StarIcon,
  WorkIcon,
} from "@/app/ui/Icons/Icon";
import TooltipIcon from "../Tooltip/TooltipIcon";
import NavPopup from "../Popups/NavPopup";
import Link from "next/link";

export default function NavAside() {
  const myTeamScrollRef = useRef();
  const [isSearchInputHovered, setIsSearchInputHovered] = useState(false);
  const [isMyTeamNav, setIsMyTeamNav] = useState(true);
  const [displayFav, setDisplayFav] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const myTeamScrollContainer = myTeamScrollRef.current;

    myTeamScrollContainer.addEventListener("scroll", (e) => {
      console.log({ myTeamScrollContainer });
      console.log(myTeamScrollContainer.offsetTop);
    });
  });

  return (
    <nav className="h-full relative">
      {/* <div className="container"> */}
      <ul className="h-full flex flex-col">
        <li className="px-3">
          <Link
            href="/home"
            className="flex gap-2 h-8 pl-1.5 pr-2 items-center text-sm rounded-normal mb-1 hover:bg-[#EBEDED]"
          >
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </Link>
        </li>
        <li className="px-3">
          <div className="flex gap-2 h-8 pl-1.5 pr-2 items-center text-sm rounded-normal mb-1 hover:bg-[#EBEDED]">
            <span>
              <WorkIcon />
            </span>
            <span>My Work</span>
          </div>
        </li>
        <li
          className={`px-3 border-y border-[#d0d4e4] relative transition duration-75 ${
            displayFav && "flex-1"
          }`}
          onClick={() => setDisplayFav(!displayFav)}
        >
          <div className="flex gap-2 h-8 pl-1.5 pr-2 items-center text-sm rounded-normal my-1 hover:bg-[#EBEDED] cursor-pointer">
            <span>
              <StarIcon />
            </span>
            <span className="-ml-1.5 flex-1">Favorites</span>

            {displayFav && (
              <span className="rounded-normal p-1 hover:bg-gray-300">
                <DottedIcon className="w-4 h-4" />
              </span>
            )}

            <span
              className={`inline-block ${
                displayFav ? "-rotate-180" : "rotate-0"
              }`}
            >
              <DownArrowIcon />
            </span>
          </div>
          {displayFav && (
            <div className="text-center flex flex-col items-center absolute top-1/2 -translate-y-1/2 px-4">
              <Image src={favImage} width={120} height={100} alt="" />
              <h4 className="font-medium mb-2">You have no favorites yet!</h4>
              <p className="text-sm text-secondary">
                Add boards, docs, or dashboards to your favorites tab for quick
                and easy access.
              </p>
            </div>
          )}
        </li>
        <li className="px-3 flex items-center gap-2">
          <div
            className="flex-1 flex gap-2 h-8 pl-1.5 pr-2 items-center text-sm rounded-normal my-3 font-semibold hover:bg-[#EBEDED] cursor-pointer"
            onClick={() => setDisplayFav(false)}
          >
            <div className="bg-[#595ad4] px-1 rounded-md text-white">
              <div className="relative text-sm">
                M
                <span className="absolute -bottom-1 -right-2">
                  <HomeIconSolid />
                </span>
              </div>
            </div>
            <span className="text-base flex-1">My Team</span>
            <span
              className={`inline-block ${
                displayFav ? "-rotate-180" : "rotate-0"
              }`}
            >
              <DownArrowIcon />
            </span>
          </div>
          {!displayFav && (
            <div
              tabIndex={0}
              className="relative h-8 px-1 py-1 rounded-normal mr-2 flex justify-center items-center cursor-pointer hover:bg-[#EBEDED]"
              onClick={() => setShowPopup(true)}
              onBlur={() => setShowPopup(false)}
            >
              <DottedIcon />

              {showPopup && (
                <ul className="bg-white p-2 text-sm rounded-normal z-40 absolute left-9 top-0 shadow-lg text-nowrap">
                  {navItemPopupArr.map((item) => (
                    <NavPopup key={item.id} {...item} />
                  ))}
                </ul>
              )}
            </div>
          )}
        </li>
        <li className={`px-3 mb-3 ${displayFav ? "hidden" : "block"}`}>
          <div className="flex gap-2 h-8 pr-2 items-center text-sm rounded-normal">
            <div
              className="input-group relative flex-1"
              onMouseEnter={() => setIsSearchInputHovered(true)}
              onMouseLeave={() => setIsSearchInputHovered(false)}
            >
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-12 h-8 rounded-normal bg-transparent border border-[#c3c6d4] w-full text-sm"
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2">
                <MagnifyingGalssIcon className="w-4 h-4" />
              </span>
              {isSearchInputHovered && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2">
                  <FilterIcon />
                </span>
              )}
            </div>
            <span className="border border-[#c3c6d4] h-8 rounded-normal flex justify-center items-center hover:bg-[#EBEDED]">
              <TooltipIcon
                icon={<PlusIcon />}
                tooltipText="Add Item to Workspace"
                className="px-1 py-1 h-full"
              />
            </span>
          </div>
        </li>
        <li
          ref={myTeamScrollRef}
          className={`flex-1 pl-3 pr-1 overflow-y-auto relative ${
            displayFav ? "hidden" : "block"
          }`}
          onClick={(e) => setIsMyTeamNav(!isMyTeamNav)}
          role="button"
        >
          <h2 className="group flex gap-2 h-8 pr-2.5 items-center text-sm rounded-normal cursor-pointer hover:bg-[#EBEDED]">
            <span
              className={`inline-block ${
                isMyTeamNav ? "rotate-0" : "-rotate-90"
              }`}
            >
              <DownArrowIcon />
            </span>
            <span className="flex-1">My Team</span>
            <span className="hidden group-hover:inline-block rounded-normal p-1 hover:bg-gray-300">
              <DottedIcon className="w-4 h-4" />
            </span>
          </h2>
          {isMyTeamNav && (
            <ul className="ml-6">
              <li className="group flex gap-2 h-8 pl-2 pr-2.5 items-center text-sm rounded-normal cursor-pointer hover:bg-[#EBEDED]">
                <span>
                  <HappyDayIcon />
                </span>
                <span className="flex-1">Happy Day</span>
                <span className="hidden group-hover:inline-block rounded-normal p-1 hover:bg-gray-300">
                  <DottedIcon className="w-4 h-4" />
                </span>
              </li>
              <li className="group flex gap-2 h-8 pl-2 pr-2.5 items-center text-sm rounded-normal cursor-pointer hover:bg-[#EBEDED]">
                <span>
                  <SprintsIcon />
                </span>
                <span className="flex-1">Sprints</span>
                <span className="hidden group-hover:inline-block rounded-normal p-1 hover:bg-gray-300">
                  <DottedIcon className="w-4 h-4" />
                </span>
              </li>
              <li className="group flex gap-2 h-8 pl-2 pr-2.5 items-center text-sm rounded-normal cursor-pointer hover:bg-[#EBEDED]">
                <span>
                  <EpicsIcon />
                </span>
                <span className="flex-1">Epics</span>
                <span className="hidden group-hover:inline-block rounded-normal p-1 hover:bg-gray-300">
                  <DottedIcon className="w-4 h-4" />
                </span>
              </li>
              <li className="group flex gap-2 h-8 pl-2 pr-2.5 items-center text-sm rounded-normal cursor-pointer hover:bg-[#EBEDED]">
                <span>
                  <BugIcon />
                </span>
                <span className="flex-1">Bugs Queue</span>
                <span className="hidden group-hover:inline-block rounded-normal p-1 hover:bg-gray-300">
                  <DottedIcon className="w-4 h-4" />
                </span>
              </li>
              <li className="group flex gap-2 h-8 pl-2 pr-2.5 items-center text-sm rounded-normal cursor-pointer hover:bg-[#EBEDED]">
                <span>
                  <RetrospectivesIcon />
                </span>
                <span className="flex-1">Restrospectives</span>
                <span className="hidden group-hover:inline-block rounded-normal p-1 hover:bg-gray-300">
                  <DottedIcon className="w-4 h-4" />
                </span>
              </li>
              <li className="group flex gap-2 h-8 pl-2 pr-2.5 items-center text-sm rounded-normal cursor-pointer hover:bg-[#EBEDED]">
                <span>
                  <DocumentIcon />
                </span>
                <span className="flex-1">Getting Started</span>
                <span className="hidden group-hover:inline-block rounded-normal p-1 hover:bg-gray-300">
                  <DottedIcon className="w-4 h-4" />
                </span>
              </li>
              <li className="h-64"></li>
            </ul>
          )}
        </li>
      </ul>
      {/* </div> */}

      {/* <div className="scroll-top absolute bottom-5 right-5">
        <span className="inline-block p-1.5 bg-white rounded-full shadow-md cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
      </div> */}
    </nav>
  );
}
