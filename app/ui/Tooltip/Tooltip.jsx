export default function Tooltip({ tooltipText, tooltipPosition }) {
  const bottomTipPosition =
    "-top-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#333333]";
  const topTipPosition =
    "-bottom-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#333333]";

  return (
    <div
      className={`absolute ${
        tooltipPosition === "bottom" ? "-bottom-12" : "-top-12"
      } right-1/2 translate-x-1/2 rounded-normal text-sm bg-[#333333] text-white py-2 px-3 transition scale-0 group-hover:scale-100 whitespace-nowrap`}
    >
      {tooltipText}
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 ${
          tooltipPosition === "bottom" ? bottomTipPosition : topTipPosition
        }`}
      ></span>
    </div>
  );
}
