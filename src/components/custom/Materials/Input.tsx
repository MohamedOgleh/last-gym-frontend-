import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VariantProps, cva } from "class-variance-authority";
import { User, Eye } from "lucide-react";
import React, { ComponentProps, ReactNode } from "react";
interface inputProps {
  label: string;
  info?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorMessage?: ReactNode;
}

const input = cva(
  [
    "font-sans",
    "border border-[#0F75B1]",
    "rounded-sm",
    "py-2 px-3 outline-none",
    "focus:border-[#0E92E0]",
  ],
  {
    variants: {
      variant: {
        default: ["bg-transparent"],
      },
      size: {
        default: ["w-72"],
        icon: ["w-60 border-none focus:border-none"],
      },
    },
  }
);

type inputType = VariantProps<typeof input> & ComponentProps<"input">;

function customInput(
  { variant, size, ...props }: inputType,
  { label, leftIcon, rightIcon, errorMessage, info }: inputProps
) {
  return (
    <div>
      <Label className="font-sans">
        {label}
        <span className="ml-1 text-muted-foreground">{info}</span>
      </Label>
      <div className="flex justify-center items-center gap-2 w-72 border border-[#0F75B1] px-2 rounded-sm">
        <User />
        <Input
          placeholder="enter something"
          className=" rounded-sm py-4 focus:border-[#0E92E0] w-full"
        />
        <Eye />
      </div>
      <Label className="font-sans text-muted-foreground">{errorMessage}</Label>
    </div>
  );
}

export default Input;
