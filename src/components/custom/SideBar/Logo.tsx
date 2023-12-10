import Image from "next/image";

import { Aladin } from "next/font/google";
import { Label } from "@/components/ui/label";
 
const aladin = Aladin({ subsets: ["latin"], weight: "400" });

function Logo() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center mt-10">
      <Image
        src="/transparent_logo.png"
        width={80}
        height={80}
        alt="Logo"
        className="bg-primary-foreground rounded-full"
      />
      <Label className={`${aladin.className} text-primary-foreground text-2xl`}>
        TOGDHEER <span className="text-secondary-foreground">GYM</span>
      </Label>
    </div>
  );
}

export default Logo;
