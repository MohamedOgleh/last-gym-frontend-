// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface inputProps {
  label: string;
  info?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorMessage?: ReactNode;
}
type inputData = inputProps & ComponentProps<"input">;

function InputFeilds({
  label,
  leftIcon,
  rightIcon,
  info,
  errorMessage,
  className,
  ...props
}: inputData) {
  return (
    <div>
      <Label className="font-sans">
        {label}
        <span className="ml-1 text-muted-foreground">{info}</span>
      </Label>
      <div
        className={cn(
          `flex justify-center items-center gap-2 w-60 border border-[#0F75B1] px-2 
      rounded-sm `,
          className
        )}
      >
        {leftIcon}
        <input
          {...props}
          className="rounded-sm py-2    bg-transparent outline-none font-sans 
          text-gray-500 focus:text-gray-900 w-full"
        />
        {rightIcon}
      </div>
      <Label className="font-sans text-muted-foreground">{errorMessage}</Label>
    </div>
  );
}

export default InputFeilds;
