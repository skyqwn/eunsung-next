"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScroll, setIsScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (scroll) => {
    if (scroll === 0) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  });

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const routes = useMemo(() => {
    return [
      {
        path: "/",
        label: "홈",
        isActive: pathname === "/",
      },
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
    <header
      className={cn(
        "h-[80px] w-screen bg-black/40 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10 flex items-center px-12 lg:px-32",
        isScroll ? "bg-black/50 " : null
      )}
    >
      <nav className="w-full">
        <ul className="flex justify-between items-center w-full">
          <li className=" text-[100px] lg:text-4xl ">
            <Link href={"/"}>
              <Image
                src={"/whitelogo.png"}
                alt=""
                width={100}
                height={100}
                className="text-4xl text-yellow-500 pt-4"
              />
            </Link>
          </li>
          <li className="flex gap-5">
            {routes.map((page) => (
              <div
                key={page.label}
                className="hover:text-primary/90 transition-colors ease-in-out"
              >
                <Link href={page.path}>
                  <span
                    className={cn(
                      page.isActive && "text-primary",
                      "hidden lg:block"
                    )}
                  >
                    {page.label}
                  </span>
                </Link>
              </div>
            ))}
          </li>
          <li className="lg:hidden cursor-pointer">
            <button
              className="w-50 h-8 flex flex-col justify-between z-50 relative text-white"
              onClick={() => setOpen((prev) => !prev)}
            >
              <motion.div
                variants={topVariants}
                animate={open ? "opened" : "closed"}
                className="w-10 h-1 bg-white rounded origin-left"
              />
              <motion.div
                variants={centerVariants}
                animate={open ? "opened" : "closed"}
                className="w-10 h-1 bg-white rounded"
              />
              <motion.div
                variants={bottomVariants}
                animate={open ? "opened" : "closed"}
                className="w-10 h-1 bg-white rounded origin-left"
              />
            </button>
            {open && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="opened"
                className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
              >
                {routes.map((link) => (
                  <motion.div
                    variants={listItemVariants}
                    className=""
                    key={link.label}
                    onClick={() => {
                      router.push(link.path);
                      setOpen(false);
                    }}
                  >
                    <div>{link.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
