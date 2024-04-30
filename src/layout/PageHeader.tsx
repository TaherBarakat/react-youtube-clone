import { Menu } from "lucide-react";
import Logo from "../assets/Logo.png";
import Button from "../assets/components/Button";
export default function PageHeader() {
  return (
    <div className="mx-4 mb-6 flex justify-between gap-10 pt-2 lg:gap-20">
      <div className="flex flex-shrink-0 items-center gap-4">
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>

        <a href="/">
          <img src={Logo} className="h-6" alt="" />
        </a>
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
