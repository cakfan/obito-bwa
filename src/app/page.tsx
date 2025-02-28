import { SignUpForm } from "@/components/SignUpForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <SignUpForm />
      <Image src="/banner.png" alt="Banner" width={645} height={874} />
    </div>
  );
}
