import { Menu } from "lucide-react";
import Logo from "../assets/Logo.png";
import Button from "../assets/components/Button";
export default function PageHeader() {
  return (
    <div className="flex justify-between gap-10 lg:gap-20">
      <div className="flex flex-shrink-0 items-center gap-4">
        <Button>
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
