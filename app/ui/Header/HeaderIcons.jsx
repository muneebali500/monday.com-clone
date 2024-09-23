import { clsx } from "clsx";

export default function TooltipIcon({
  icon,
  tooltipText,
  tooltipPosition,
  iconTop,
  className,
}) {
  return (
    <div
      className={clsx(
        "group hover:bg-[#D6E3DB] cursor-pointer p-2 rounded-normal text-nowrap z-40",
        className
      )}
    >
      <div className="relative">
        {iconTop === 1 && (
          <span className="absolute -top-2.5 -right-2.5 bg-white rounded-full px-1.5 text-xs flex justify-center items-center">
            1
          </span>
        )}

        {iconTop === "active" && (
          <span className="absolute -top-2.5 -right-2.5 bg-white rounded-full h-2.5 w-2.5 flex justify-center items-center">
            <span className="inline-block h-2 w-2 bg-[#d83a52] rounded-full"></span>
          </span>
        )}

        <figure>{icon}</figure>
        <div className="absolute -bottom-14 right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100">
          {tooltipText}
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8  border-b-[#333333]"></span>
        </div>
      </div>
    </div>
  );
}
