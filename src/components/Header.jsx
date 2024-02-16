import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.svg";
import Button from "./Button";
import { useState } from "react";
import { useSidebar } from "../contexts/SideBarContext";

const Header = () => {
  // to show the searchbar is fullwidth
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  // Allow us to consume the usecontext
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  console.log(isSidebarOpen);
  

  return (
    <div className="flex gap-10 lg:gap-20 justify-between items-center mx-4 pt-2 mb-6">
      {/* First div with menu button + logo youtube. If showfullwidthsearch is true, div has to be hidden */}
      <div
        className={`flex gap-4 shrink-0 items-center ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button onClick={toggleSidebar} variant="ghost" size="icon">
          <Menu />
        </Button>

        <a href={"/"}>
          <img src={logo} alt="Logo youtube" className="h-6" />
        </a>
      </div>

      {/* second div in the middle = searchbar in between, smaller than md screen has to be hidden*/}
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex-grow flex max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="border focus:border-blue-500 outline-none border-secondary-border rounded-l-full text-lg w-full py-1 px-4"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>

        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      {/* Last div on the right when larger than MD screen has 3 icons, when smaller has 5 icons. If search is clicked then the div has to be hidden */}
      <div
        className={`flex shrink-0 md:gap-2 items-center ${
          showFullWidthSearch ? "hidden" : "flex"
        } `}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic className="md:hidden" />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default Header;
