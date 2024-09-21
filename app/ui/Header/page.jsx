import Image from "next/image";
import { LogoIcon, DiamondIcon } from "@/app/public/icons/icon";
import { headerIcons } from "@/app/mock-data/icons";
import mondayLogo from "@/app/public/images/monday-logo.png";
import userPlaceholderPhoto from "@/app/public/images/user-placeholder-photo.png";

// import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { poppins } from "@/app/public/fonts/fonts";
import HeaderIcons from "./HeaderIcons";

export default function Header() {
  return (
    <header className="container h-12 flex justify-between items-center">
      <div className="lefts-side flex items-center">
        <LogoIcon />
        <h1 className="site-title mr-3 ml-2 font-light">
          <strong className={`${poppins.className} font-bold mr-1 text-md`}>
            monday
          </strong>
          <span className="text-lg">dev</span>
        </h1>
        <button className="border border-main text-sm font-medium text-main px-2 py-1 rounded-[4px] flex gap-2 hover:bg-btnHover hover:text-white hover:border-white">
          <span>
            <DiamondIcon />
          </span>
          <span>See plans</span>
        </button>
      </div>
      <div className="right-side flex items-center gap-2">
        {headerIcons.map((item, index) => (
          <>
            <HeaderIcons
              key={item.id}
              icon={item.icon}
              tooltipText={item.tooltipText}
              tooltipPosition={index === 5 ? "right" : "bottom"}
              iconTop={index === 1 ? 1 : index === 5 ? "active" : ""}
            />
            {index === 5 && (
              <div className="divider h-5 w-[1px] bg-[#d0d4e4]"></div>
            )}
          </>
        ))}
        <figure className="flex items-center gap-2 bg-[#ffffff90] pl-1.5 rounded-l-normal">
          <Image src={mondayLogo} height={14} width={24} alt="Logo" />
          <Image
            src={userPlaceholderPhoto}
            height={16}
            width={32}
            alt="User Placeholder Photo"
          />
        </figure>
      </div>
    </header>
  );
}
