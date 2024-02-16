import {
  Clock,
  Film,
  Flame,
  Folder,
  Gamepad2,
  History,
  Home,
  Lightbulb,
  ListVideo,
  MonitorPlay,
  PlaySquare,
  Podcast,
  Shirt,
  ShoppingBag,
  Text,
  Trophy,
} from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button, { buttonStyles } from "./Button";
import { useSidebarContext } from "../contexts/SideBarContext";

const Sidebar = () => {
  // Allow us to consume the usecontext
  const { toggleSidebar, isSidebarOpen } = useSidebarContext();

  return (
    <>
      {/* First small sidebar on small screens */}
      <aside className="sticky top-0 overflow-y-auto pb-4 flex flex-col text-center ml-1 lg:hidden">
        <SmallSidebarIcon Icon={Home} url={"/"} title="Home" />
        <SmallSidebarIcon Icon={MonitorPlay} url={"/"} title="Shorts" />
        <SmallSidebarIcon Icon={Text} url={"/"} title="Subscriptions" />
        <SmallSidebarIcon Icon={Folder} url={"/"} title="Library" />
        <hr />
        <SmallSidebarIcon Icon={History} url={"/"} title="History" />
        <SmallSidebarIcon Icon={PlaySquare} url={"/"} title="PlaySquare" />
        <SmallSidebarIcon Icon={Clock} url={"/"} title="Clock" />
        <SmallSidebarIcon Icon={ListVideo} url={"/"} title="ListVideo" />
        <hr />
        <SmallSidebarIcon Icon={Flame} url={"/"} title="Trending" />
        <SmallSidebarIcon Icon={ShoppingBag} url={"/"} title="Shopping" />
        <SmallSidebarIcon Icon={Film} url={"/"} title="Movies & TV" />
        <SmallSidebarIcon Icon={Gamepad2} url={"/"} title="Gaming" />
        <SmallSidebarIcon Icon={Trophy} url={"/"} title="Sport" />
        <SmallSidebarIcon Icon={Lightbulb} url={"/"} title="Learning" />
        <SmallSidebarIcon Icon={Shirt} url={"/"} title="Fasion & Beauty" />
        <SmallSidebarIcon Icon={Podcast} url={"/"} title="Podcasts" />
        <hr />
      </aside>

      {/* second sidebar on large screen */}
      {isSidebarOpen && (
        <aside className="w-52 lg:sticky absolute top-0 overflow-y-auto pb-4 flex-col gap-2 px-2 lg:flex hidden ">
          <SmallSidebarIcon Icon={Home} url={"/"} title="Home" />
          <SmallSidebarIcon Icon={MonitorPlay} url={"/"} title="Shorts" />
          <SmallSidebarIcon Icon={Text} url={"/"} title="Subscriptions" />
          <SmallSidebarIcon Icon={Folder} url={"/"} title="Library" />
          <hr />
          <SmallSidebarIcon Icon={History} url={"/"} title="History" />
          <SmallSidebarIcon Icon={PlaySquare} url={"/"} title="PlaySquare" />
          <SmallSidebarIcon Icon={Clock} url={"/"} title="Clock" />
          <SmallSidebarIcon Icon={ListVideo} url={"/"} title="ListVideo" />
          <hr />
          <SmallSidebarIcon Icon={Flame} url={"/"} title="Trending" />
          <SmallSidebarIcon Icon={ShoppingBag} url={"/"} title="Shopping" />
          <SmallSidebarIcon Icon={Film} url={"/"} title="Movies & TV" />
          <SmallSidebarIcon Icon={Gamepad2} url={"/"} title="Gaming" />
          <SmallSidebarIcon Icon={Trophy} url={"/"} title="Sport" />
          <SmallSidebarIcon Icon={Lightbulb} url={"/"} title="Learning" />
          <SmallSidebarIcon Icon={Shirt} url={"/"} title="Fasion & Beauty" />
          <SmallSidebarIcon Icon={Podcast} url={"/"} title="Podcasts" />
          <hr />
        </aside>
      )}
    </>
  );
};

export default Sidebar;

// Icons component reusable
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
