"use client";

import React from "react";

import Image from "next/image";
import {
  BotIcon,
  DottedIcon,
  DownArrowIcon,
  EyeIcon,
  FilterIcon,
  GroupIcon,
  HexagonalIcon,
  HomeIcon,
  MagnifyingGalssIcon,
  PersonLightIcon,
  PlugIcon,
  SortIcon,
  StartIcon,
} from "@/app/public/icons/icon";
import slackIcon from "@/app/public/images/slack-icon.png";
import jiraIcon from "@/app/public/images/jira-icon.png";
import TooltipIcon from "@/app/ui/Tooltip/TooltipIcon";

import { poppins } from "@/app/public/fonts/fonts";
import SprintTable from "../ui/Dashboard/SprintTable";
import Tooltip from "../ui/Tooltip/Tooltip";

export default function Dashboard() {
  return (
    <main className="content w-[calc(100vw-256px)]  bg-white h-full rounded-tl-lg overflow-auto">
      <div className="fixed-vertical sticky top-0 left-0 z-20 bg-white pt-4">
        <div className="flex justify-between items-center mb-2 px-10">
          <h2
            className={`text-2xl font-light flex gap-1.5 items-center ${poppins.className}`}
          >
            Happy Day
            <span>
              <DownArrowIcon style={{ width: "24px", height: "24px" }} />
            </span>
          </h2>

          <ul className="flex items-center gap-3 *:cursor-pointer *:h-8">
            <li className="flex gap-1.5 items-center text-sm hover:bg-hoverItem rounded px-1">
              <PlugIcon />
              <span>Integrate</span>
              <div className="flex">
                <figure className="relative flex justify-center items-center opacity-35 -mr-2">
                  <HexagonalIcon />
                  <Image
                    src={slackIcon}
                    alt="Slack Icon"
                    className="absolute"
                    width={12}
                    height="auto"
                  />
                </figure>
                <figure className="relative flex justify-center items-center opacity-35">
                  <HexagonalIcon />
                  <Image
                    src={jiraIcon}
                    alt="jira Icon"
                    className="absolute"
                    width={12}
                    height="auto"
                  />
                </figure>
              </div>
            </li>
            <li className="flex gap-1.5 items-center text-sm hover:bg-hoverItem rounded px-1">
              <span>
                <BotIcon />
              </span>
              <span>Automate / 1</span>
            </li>
            <li className="flex items-center text-sm border px-2 rounded-normal hover:bg-hoverItem">
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
              <li
                key={index}
                className="group relative flex gap-1 transition justify-center items-center text-sm py-1.5 cursor-pointer  rounded-normal px-6 hover:bg-hoverItem"
              >
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
          <li className="group relative cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal hover:bg-hoverItem">
            <span>
              <PersonLightIcon />
            </span>
            <span>Person</span>
            <Tooltip
              tooltipText="Filter board by person"
              tooltipPosition="top"
            />
          </li>
          <li className="group relative">
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
            <Tooltip
              tooltipText="Filter board by anything"
              tooltipPosition="top"
            />
          </li>
          <li className="group relative cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal hover:bg-hoverItem">
            <span>
              <SortIcon />
            </span>
            <span>Sort</span>
            <Tooltip
              tooltipText="Sort board by any column"
              tooltipPosition="top"
            />
          </li>
          <li className="group relative cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal bg-background">
            <span>
              <EyeIcon />
            </span>
            <span>Hide / 2</span>
            <Tooltip tooltipText="Hidden column" tooltipPosition="top" />
          </li>
          <li className="group relative cursor-pointer flex gap-1 items-center text-sm px-3 py-1.5 rounded-normal bg-background">
            <span>
              <GroupIcon />
            </span>
            <span>Group by / 2</span>
            <Tooltip
              tooltipText="Group item by columns"
              tooltipPosition="top"
            />
          </li>
          <li className="cursor-pointer flex gap-1 items-center text-sm p-1.5 rounded-normal hover:bg-hoverItem">
            <span>
              <DottedIcon />
            </span>
          </li>
        </ul>

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
      </div>

      <SprintTable />
    </main>
  );
}
