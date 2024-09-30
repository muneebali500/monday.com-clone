import {
  RightArrowIcon,
  MagnifyingPlusIcon,
  DottedIcon,
} from "@/app/ui/Icons/Icon";
import EditableElement from "./EditableElement";

export default function TaskCell({ col, rowIndex, updateRows, borderLeftClr }) {
  const { id, colName, value } = col;

  return (
    <>
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
        <div tabIndex={id} className="px-2 flex justify-center items-center">
          <input type="checkbox" className="w-2 md:w-3.5" />
        </div>

        <div tabIndex={id} className="group/parent flex-1 border-l flex">
          <div className="group/head relative flex-1 flex items-center pl-2 h-full">
            <span className="opacity-0 group-hover/head:opacity-100">
              <RightArrowIcon className="fill-slate-400 w-1.5" />
            </span>
            <div className="flex-1 ml-2 flex items-center border-r h-full w-1 pr-2">
              <EditableElement textContent={value} />
            </div>
            <span className="px-4">
              <MagnifyingPlusIcon className="fill-hoverItem" />
            </span>
          </div>
        </div>
      </li>
    </>
  );
}
