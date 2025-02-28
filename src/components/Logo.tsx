import Link from "next/link";
import { Icons } from "./Icon";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1.5">
      <Icons.logo />
      <span className="text-2xl font-extrabold">Obito</span>
    </Link>
  );
};
