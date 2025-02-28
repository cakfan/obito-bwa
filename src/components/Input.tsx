import { cn } from "@/lib/utils";

interface InputProps {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type: "text" | "email" | "password";
}

export const Input = ({ label, placeholder, icon, type }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[16px]">{label}</label>
      <div className="flex w-full items-center gap-2 rounded-full border border-accent px-5 py-4 focus-within:border-brand">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            "h-6 w-full text-[16px] font-semibold text-foreground placeholder:font-normal placeholder:text-placeholder focus:outline-none",
            type === "password" && "password-input",
          )}
        />
      </div>
    </div>
  );
};
