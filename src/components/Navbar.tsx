import Link from "next/link";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { Icons } from "./Icon";

export const Navbar = () => {
  const menuList = [
    {
      href: "#",
      title: "Home",
      isActive: true,
    },
    {
      href: "#",
      title: "Pricing",
      isActive: false,
    },
    {
      href: "#",
      title: "Features",
      isActive: false,
    },
    {
      href: "#",
      title: "Testimonials",
      isActive: false,
    },
  ];

  return (
    <div className="flex w-full items-center border-b-[1px] border-accent bg-white px-[75px] py-5">
      <Logo />
      <nav className="ml-[50px] flex items-center gap-10">
        {menuList.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={cn("text-[16px]", item.isActive && "font-semibold")}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <nav className="ml-auto flex items-center gap-5">
        <Icons.message />
        <div className="h-[50px] w-[1px] bg-accent" />
        <Link href="#" className="btn btn-secondary">
          Sign Up
        </Link>
        <Link href="#" className="btn btn-primary">
          My Account
        </Link>
      </nav>
    </div>
  );
};
