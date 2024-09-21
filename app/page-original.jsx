"use client";

import React, { useState } from "react";
import userPlacehodlerImage from "@/app/public/images/dapulse-person-column.svg";

import Image from "next/image";
import Header from "./components/header/page";
import NavAside from "./components/sidebar/page";
import {
  BotIcon,
  DottedIcon,
  DownArrowIcon,
  DownArrowSolidIcon,
  EyeIcon,
  FilterIcon,
  GroupIcon,
  HexagonalIcon,
  HomeIcon,
  MagnifyingGalssIcon,
  MagnifyingPlusIcon,
  PersonLightIcon,
  PlugIcon,
  RightArrowIcon,
  SortIcon,
  StartIcon,
  UpArrowSolidIcon,
} from "./public/icons/icon";
import slackIcon from "@/app/public/images/slack-icon.png";
import jiraIcon from "@/app/public/images/jira-icon.png";
import TooltipIcon from "./components/icons/tooltip-icon";

import { poppins } from "@/app/public/fonts/fonts";
import { tableColumnsData } from "./data/table";
import TableHead from "./(pages)/dashboard/components/table-head";

export default function Dashboard() {
  const [headInput, setHeadInput] = useState("Owner");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex justify-between gap-3 h-[calc(100vh-48px)]">
        <aside className="sidebar bg-[#F7FBF8] w-64 rounded-tr-lg pt-1 pb-2 h-full text-primary">
          <NavAside />
        </aside>

        <section className="right-side content w-[calc(100vw-256px)] py-4 bg-white h-full rounded-tl-lg">
          <div className="flex justify-between items-center mb-2 px-10">
            <h2
              className={`text-2xl font-light flex gap-1.5 items-center ${poppins.className}`}
            >
              Happy Day
              <span>
                <DownArrowIcon style={{ width: "24px", height: "24px" }} />
              </span>
            </h2>

            <ul className="flex items-center gap-3">
              <li className="flex gap-1.5 items-center text-sm">
                <PlugIcon />
                <span>Integrate</span>
                <div className="flex">
                  <figure className="relative flex justify-center items-center">
                    <HexagonalIcon />
                    <Image
                      src={slackIcon}
                      alt=""
                      className="absolute"
                      width={14}
                      height="auto"
                    />
                  </figure>
                  <figure className="relative flex justify-center items-center">
                    <HexagonalIcon />
                    <Image
                      src={jiraIcon}
                      alt=""
                      className="absolute"
                      width={14}
                      height="auto"
                    />
                  </figure>
                </div>
              </li>
              <li className="flex gap-1.5 items-center text-sm">
                <span>
                  <BotIcon />
                </span>
                <span>Automate / 1</span>
              </li>
              <li className="flex items-center text-sm border py-1.5 px-2 rounded-normal">
                <button>
                  <span>Invite / 1</span>
                </button>
              </li>
              <li className="flex items-center">
                <TooltipIcon icon={<DottedIcon />} tooltipText="Options" />
              </li>
            </ul>
          </div>

          <ul className="flex border-b mb-4 mx-10">
            {["All Sprints", "Main Table", "Kanban", "Active Sprint"].map(
              (item, index) => (
                <li className="group relative flex gap-1 transition justify-center items-center text-sm py-1.5 cursor-pointer  rounded-normal px-6 hover:bg-hoverItem">
                  <div className="flex gap-1 transition delay-100 group-hover:-translate-x-3.5">
                    {index === 0 && (
                      <span>
                        <HomeIcon className="w-4 h-4" />
                      </span>
                    )}

                    <span>{item}</span>
                  </div>
                  <span className="absolute right-2 opacity-0 transition rounded-normal p-0.5 hover:bg-gray-300 group-hover:opacity-100">
                    <DottedIcon className="w-4 h-4" />
                  </span>
                </li>
              )
            )}
          </ul>

          <ul className="flex gap-2 items-center mb-4 px-10">
            <li className="mr-3">
              <button className="bg-[#00854D] flex items-center text-white rounded-normal text-sm overflow-hidden">
                <span className="py-1.5 px-2 border-r border-r-slate-700 hover:bg-btnHover">
                  New Task
                </span>
                <span className="py-1.5 px-1 hover:bg-btnHover">
                  <DownArrowIcon />
                </span>
              </button>
            </li>
            <li className="cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal hover:bg-hoverItem">
              <span>
                <MagnifyingGalssIcon />
              </span>
              <span>Search</span>
            </li>
            <li className="cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal hover:bg-hoverItem">
              <span>
                <PersonLightIcon />
              </span>
              <span>Person</span>
            </li>
            <li>
              <button className="flex items-center rounded-normal text-sm overflow-hidden hover:bg-hoverItem">
                <span className="mr-1 pl-3">
                  <FilterIcon />
                </span>
                <span className="py-1.5 pr-2 hover:border-r hoverborder-r-white">
                  Filter
                </span>
                <span className="py-1.5 px-1">
                  <DownArrowIcon />
                </span>
              </button>
            </li>
            <li className="cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal hover:bg-hoverItem">
              <span>
                <SortIcon />
              </span>
              <span>Sort</span>
            </li>
            <li className="cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal bg-background">
              <span>
                <EyeIcon />
              </span>
              <span>Hide / 2</span>
            </li>
            <li className="cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal bg-background">
              <span>
                <GroupIcon />
              </span>
              <span>Group by / 2</span>
            </li>
            <li className="cursor-pointer flex gap-1 items-center text-sm p-1.5 rounded-normal hover:bg-hoverItem">
              <span>
                <DottedIcon />
              </span>
            </li>
          </ul>

          <div className="table-container">
            <div className="group/parent px-10 heading-row relative flex justify-between items-center">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 hidden group-hover/parent:inline-block">
                <DottedIcon />
              </span>

              <div className="group/sub flex-1 flex gap-2 items-center px-3">
                <span>
                  <DownArrowIcon />
                </span>
                <h3 className={`text-[#00854D] text-lg ${poppins.className}`}>
                  Sprint 1
                </h3>
                <span className="text-sm hidden group-hover/sub:inline-block">
                  4 Tasks
                </span>
              </div>

              <div className="btn-group flex gap-2 text-sm justify-between items-center mb-1 *:p-2 *:rounded-normal">
                <button className="flex gap-1 hover:bg-hoverItem">
                  Jan 2,'23 - Jan 15,'23
                </button>
                <button className="flex gap-1 border opacity-50" disabled>
                  Burndown
                </button>
                <button className="flex gap-2 border hover:bg-hoverItem">
                  <span>
                    <StartIcon />
                  </span>
                  <span>Start</span>
                </button>
                <button className="inline-block hover:bg-hoverItem">
                  <DottedIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="main-table pl-10 h-[calc(100vh-16rem)] overflow-x-auto overflow-y-auto">
              <div className="main-table h-32">
                <div className="table-head relative text-sm rounded-tl-md border border-r-0 border-l-[6px] border-l-green-800 flex">
                  <div className="flex min-w-[25rem] bg-white z-10">
                    <div className="p-2 flex justify-center items-center">
                      <input type="checkbox" />
                    </div>
                    <div className="group/head relative border-l p-2 flex-1 flex justify-center items-center">
                      <h6>Task</h6>
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md flex-col gap-0 cursor-pointer hidden group-hover/head:flex hover:bg-btnHover group/sort">
                        <UpArrowSolidIcon className="-mb-2 group-hover/sort:fill-white" />
                        <DownArrowSolidIcon className="group-hover/sort:fill-white" />
                      </span>
                    </div>
                  </div>

                  {/* use table-head to add columns */}
                  <div className="flex">
                    {tableColumnsData.map((col) => (
                      <TableHead {...col} />
                    ))}
                  </div>
                </div>

                {/* use table-body to add rows */}
                {[1, 2, 3].map((num) => (
                  <ul className="table-body relative text-sm border border-r-0 flex border-l-[6px] border-l-green-800">
                    {/* left column */}
                    <li className="group/parent flex min-w-[25rem] h-9 bg-white z-10">
                      <div className="px-2 flex justify-center items-center">
                        <input type="checkbox" />
                      </div>
                      <div className="group/head relative border-l pl-3 flex-1 flex justify-between items-center">
                        <span className="opacity-0 group-hover/head:opacity-100">
                          <RightArrowIcon />
                        </span>
                        <h6 className="ml-3 flex-1 border-r h-full flex items-center">
                          Create Dashboard UI
                        </h6>
                        <span className="px-4">
                          <MagnifyingPlusIcon />
                        </span>
                      </div>
                      <span className="absolute -left-8 top-1/2 -translate-y-1  /2 hidden group-hover/parent:inline-block">
                        <DottedIcon />
                      </span>
                    </li>

                    {/* right columns */}
                    <li className="group relative flex justify-center items-center min-w-24 border-l px-2">
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

                    <li className="group/parent relative flex min-w-36 border-l">
                      <div className="px-2 flex justify-center items-center"></div>
                    </li>

                    <li className="group/parent relative flex min-w-36 border-l">
                      <div className="px-2 flex justify-center items-center"></div>
                    </li>

                    <li className="group/parent relative flex min-w-36 border-l">
                      <div className="px-2 flex justify-center items-center"></div>
                    </li>

                    <li className="group/parent relative flex min-w-36 border-l">
                      <div className="px-2 flex justify-center items-center"></div>
                    </li>

                    <li className="group/parent relative flex min-w-36 border-l">
                      <div className="px-2 flex justify-center items-center"></div>
                    </li>

                    <li className="group/parent relative flex min-w-36 border-l">
                      <div className="px-2 flex justify-center items-center"></div>
                    </li>
                  </ul>
                ))}

                <div className="table-footer relative text-sm border border-r-0 border-l-[6px] hover:border-l-green-800 flex hover:bg-hoverItem">
                  <div className="relative flex min-w-36 h-9 border-l">
                    <div className="px-2 flex justify-center items-center">
                      <input type="checkbox" disabled />
                    </div>
                    <div className="group border-l pl-3 flex items-center">
                      <form className="w-[22rem]">
                        <input
                          type="text"
                          placeholder="+ Add Task"
                          className="w-full outline-none pl-5 py-0.5 group-hover:border rounded-md bg-transparent"
                        />
                      </form>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
