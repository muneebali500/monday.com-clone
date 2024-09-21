import {
  RightArrowIcon,
  MagnifyingPlusIcon,
  DottedIcon,
} from "@/app/ui/Icons/Icon";

export default function TaskCell({ tabIndex }) {
  return (
    <li
      tabIndex={tabIndex}
      className="group/parent flex min-w-[25rem] border-r border-b px-2"
    >
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
      <span className="absolute -left-8 top-1/2 -translate-y-1/2 hidden group-hover/parent:inline-block">
        <DottedIcon />
      </span>
    </li>
  );
}
