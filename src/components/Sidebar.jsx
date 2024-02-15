import { Folder, Home, MonitorPlay, Text } from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button, { buttonStyles } from "./Button";

const Sidebar = () => {
  const [isSmallOpen, setIsSmallOpen] = useState(true);
  return (
    <>
      {/* First small sidebar on small screens */}
      <aside className="sticky top-0 overflow-y-auto pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarIcon Icon={Home} url={"/"} title="Home" />
        <SmallSidebarIcon Icon={MonitorPlay} url={"/"} title="Shorts" />
        <SmallSidebarIcon Icon={Text} url={"/"} title="Subscriptions" />
        <SmallSidebarIcon Icon={Folder} url={"/"} title="Library" />
      </aside>

      {/* {isSmallOpen && (
        <div
          onClick={() => setIsSmallOpen(false)}
          className=" fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        />
      )} */}

      {/* second sidebar on large screen */}
      <aside className="w-52 lg:sticky absolute top-0 overflow-y-auto pb-4 flex-col gap-2 px-2 lg:flex hidden ">
        <SmallSidebarIcon Icon={Home} url={"/"} title="Home" />
        <SmallSidebarIcon Icon={MonitorPlay} url={"/"} title="Shorts" />
        <SmallSidebarIcon Icon={Text} url={"/"} title="Subscriptions" />
        <SmallSidebarIcon Icon={Folder} url={"/"} title="Library" />
      </aside>
    </>
  );
};

export default Sidebar;

// Icons HOME SHORTS SURSCRIPTIONS LIBRARY
const SmallSidebarIcon = ({ Icon, url, title }) => {
  return (
    // TwMerge allow us to add the prestyles buttonclass + some other style that we need
    <a
      href={url}
      className={twMerge(
        buttonStyles({
          variant: "ghost",
        }),
        "py-4 px-2 flex flex-col items-center rounded-lg gap-1 lg:flex-row lg:"
      )}
    >
      <Icon className="w-6 h-6 lg:ml-4" />
      <span className="text-sm lg:ml-6 lg:text-base">{title}</span>
    </a>
  );
};
