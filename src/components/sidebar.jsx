"use client";
import { useState } from "react";
import Icon from "./icon";
import Link from "next/link";

export default function Sidebar() {
  const [isExpended, setIsExpended] = useState(true);

  return (
    <aside
      className={`bg-slate-200 h-screen sticky top-0 ${
        isExpended ? "w-[250px]" : "w-16"
      }`}
    >
      <div className="flex flex-col gap-4 text-slate-500">
        <Link
          href="/dashboard/front-desk"
          className="flex items-center gap-4 px-4 py-2 hover:bg-white transition-colors duration-300"
        >
          <Icon icon="chart" size={28} />
          {isExpended && <span className="capitalize">front desk</span>}
        </Link>
        <Link
          href="/dashboard/reservation"
          className="flex items-center gap-4 px-4 py-2 hover:bg-white transition-colors duration-300"
        >
          <Icon icon="user" size={28} />
          {isExpended && <span className="capitalize">reservation</span>}
        </Link>
        <Link
          href="/dashboard/overview"
          className="flex items-center gap-4 px-4 py-2 hover:bg-white transition-colors duration-300"
        >
          <Icon icon="security" size={28} />
          {isExpended && <span className="capitalize">overview</span>}
        </Link>
        <Link
          href=""
          className="flex items-center gap-4 px-4 py-2 hover:bg-white transition-colors duration-300"
        >
          {/* <div className="text-blue-400 border border-slate-400 bg-white p-2 rounded-full"> */}
          <Icon icon="settings" size={28} />
          {isExpended && <span className="capitalize">check-in</span>}
        </Link>
        <Link
          href=""
          className="flex items-center gap-4 px-4 py-2 hover:bg-white transition-colors duration-300"
        >
          <Icon icon="group" size={28} />
          {isExpended && <span className="capitalize">check-out</span>}
        </Link>
      </div>
    </aside>
  );
}
