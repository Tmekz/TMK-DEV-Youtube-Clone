import { Menu } from "lucide-react";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between m-4">
        {/* First div with menu button + logo youtube */}
      <div className="flex gap-4 shrink-0">
        <Menu className="" />
        <a href={"/"}>
          <img src={logo} alt="Logo youtube" className="h-6" />
        </a>
      </div>
    </div>
  );
};

export default Header;
