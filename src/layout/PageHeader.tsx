import { Menu, Bell, Upload, User, Search, Mic } from "lucide-react";
import Logo from "../assets/Logo.png";
import Button from "../assets/components/Button";

export default function PageHeader() {
  return (
    <div className="mx-4 mb-6  flex justify-between gap-10 pt-2 lg:gap-20">
      <div className="flex flex-shrink-0 items-center gap-4">
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>

        <a href="/">
          <img src={Logo} className="h-6" alt="" />
        </a>
      </div>

      <form className=" hidden flex-grow justify-center gap-4 md:flex">
        <div className="flex max-w-[600px] flex-grow">
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-l-full border
             border-secondary-border px-4
              py-1 text-lg shadow-inner
               shadow-secondary outline-none focus:border-blue-500"
          />
          <Button className=" flex-shrink-0 rounded-r-full border border-l-0 border-secondary-border px-4 py-2">
            <Search />
          </Button>
        </div>
        <Button type="button" className="flex-shrink-0 " size={"icon"}>
          <Mic />
        </Button>
      </form>
      <div className="flex flex-shrink-0 md:gap-2 ">
        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Search />
        </Button>
        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Mic />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Upload />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Bell />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <User />
        </Button>
      </div>
    </div>
  );
}
