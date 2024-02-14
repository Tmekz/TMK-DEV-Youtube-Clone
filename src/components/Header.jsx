import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex  justify-between items-center mx-4 pt-2 mb-6">
      {/* First div with menu button + logo youtube */}
      <div className="flex gap-4 shrink-0">
        <Menu className="" />
        <a href={"/"}>
          <img src={logo} alt="Logo youtube" className="h-6" />
        </a>
      </div>

      {/* Last divicons */}
      <div className="flex shrink-0 md:gap-2 items-center  ">
        <Button size="icon" variant="ghost" className="md:hidden">
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
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
