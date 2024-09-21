import {
  NotificationIcon,
  FeedIcon,
  MemeberIcon,
  MarketplaceIcon,
  MagnifyingGalssIcon,
  HelpIcon,
  ProductsSwitcherIcon,
} from "@/app/public/icons/icon";

export const headerIcons = [
  {
    id: 1,
    icon: <NotificationIcon />,
    tooltipText: "Notification",
    position: "bottom",
    iconTop: "",
  },
  {
    id: 2,
    icon: <FeedIcon />,
    tooltipText: "Update feed",
    position: "bottom",
    iconTop: "1",
  },
  {
    id: 3,
    icon: <MemeberIcon />,
    tooltipText: "Invite Members",
    position: "bottom",
    iconTop: "",
  },
  {
    id: 4,
    icon: <MarketplaceIcon />,
    tooltipText: "monday marketplace",
    position: "bottom",
    iconTop: "",
  },
  {
    id: 5,
    icon: <MagnifyingGalssIcon />,
    tooltipText: "Search everything",
    position: "bottom",
    iconTop: "",
  },
  {
    id: 6,
    icon: <HelpIcon />,
    tooltipText: "Help",
    position: "right",
    iconTop: "active",
  },
  {
    id: 7,
    icon: <ProductsSwitcherIcon />,
    tooltipText: "Products switcher",
    position: "bottom",
    iconTop: "",
  },
];
