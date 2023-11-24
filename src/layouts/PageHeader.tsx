import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png";
import Button from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

const PageHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          showSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon" className="">
          <Menu />
        </Button>
        <a href="/">
          <img className="h-6" src={logo} alt="logo" />
        </a>
      </div>
      <form
        className={` gap-4 flex-grow justify-center ${
          showSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showSearch && (
          <Button
            onClick={() => setShowSearch(false)}
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-2-[500px] ">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full bg-secondary border-secondary border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button
          className="flex-shrink-0 bg-secondary "
          type="button"
          size="icon"
        >
          <Mic />
        </Button>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showSearch ? "hidden " : "flex"
        }`}
      >
        <Button
          onClick={() => setShowSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
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

export default PageHeader;

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} className="h-6" />
      </a>
    </div>
  );
}
