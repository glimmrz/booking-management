import Image from "next/image";
import logo from "@/assets/ad.png";
import Icon from "./icon";
import Button from "./button";

export default function Navbar() {
  return (
    <nav className="bg-slate-200 h-14 flex items-center">
      <figure className="relative h-14 w-16">
        <Image src={logo} alt="" fill className="object-cover" />
      </figure>
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-between w-[98%]">
          <div className="flex items-center gap-2 capitalize">
            <span>
              <span className="text-slate-600">anvil dynamics</span> / account
            </span>
            <Icon icon="chevronDown" />
          </div>

          {/* Links & Tools */}
          <div className="flex gap-4 text-slate-500">
            <Button />
            <Icon size={28} icon="search" />
            <Icon size={28} icon="chat" />
            <Icon size={28} icon="message" />
            <Icon size={28} icon="dashboard" />
          </div>
        </div>
      </div>
    </nav>
  );
}
