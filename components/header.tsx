"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Header = () => {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        path: "/contact",
        label: "문의하기",
        isActive: pathname === "/contact",
      },
      {
        path: "/portfolio",
        label: "포트폴리오",
        isActive: pathname === "/portfolio",
      },
      {
        path: "/aboutus",
        label: "회사소개",
        isActive: pathname === "/aboutus",
      },
    ];
  }, [pathname]);
  return (
    <header className="h-[80px] w-screen bg-black/20 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10 flex items-center px-12">
      <nav className="w-full">
        <ul className="flex justify-between items-center w-full">
          <li className="text-4xl">
            <Link href={"/"}>H3</Link>
          </li>
          <li className="flex gap-5">
            {routes.map((page) => (
              <div className="hover:text-primary/90 transition-colors ease-in-out">
                <Link href={page.path} key={page.label}>
                  <span className={cn(page.isActive && "text-primary")}>
                    {page.label}
                  </span>
                </Link>
              </div>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
