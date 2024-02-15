import { Home, MonitorPlay, Text } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button, { buttonStyles } from "./Button";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 overflow-y-auto pb-4 flex flex-col ml-1 ">
      <SidebarIcon Icon={Home} url={"/"} title="Home" />
      <SidebarIcon Icon={MonitorPlay} url={"/"} title="Shorts" />
      <SidebarIcon Icon={Text} url={"/"} title="Subscriptions" />
    </aside>
  );
};

export default Sidebar;

// Icons HOME SHORTS SURSCRIPTIONS LIBRARY
const SidebarIcon = ({ Icon, url, title }) => {
  return (
    // TwMerge allow us to add the prestyles buttonclass + some other style that we need
    <a
      href={url}
      className={twMerge(
        buttonStyles({
          variant: "ghost",
        }),
        "py-4 px-2 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <span className="text-sm">{title}</span>
    </a>
  );
};
