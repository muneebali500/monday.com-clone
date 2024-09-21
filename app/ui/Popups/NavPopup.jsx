export default function NavPopup({ icon, name }) {
  return (
    <li className="group flex gap-2 h-8 pl-2 pr-2.5 items-center text-sm rounded-normal cursor-pointer hover:bg-[#EBEDED]">
      <span>{icon}</span>
      <span>{name}</span>
    </li>
  );
}
