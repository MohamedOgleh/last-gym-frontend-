import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Bell, ChevronDown } from "lucide-react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

function TopBar() {
  return (
    <>
      <Label className="text-2xl">Registrations</Label>
      <div className="flex justify-center items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="
            hover:bg-[#1189D0] hover:text-primary-foreground focus:bg-[#0E92E0] focus:text-primary-foreground"
        >
          <Bell className="h-5 w-5 text-primary" />
        </Button>

        <div className={`${poppins.className} flex w-44 items-center justify-between gap-1 rounded-3xl px-2 py-0
        border border-primary`}>
          <Avatar className="mr-2 w-8 h-8">
            <AvatarImage src="/female2.jpg" />
            <AvatarFallback>Mo</AvatarFallback>
          </Avatar>
          <Label className="overflow-hidden text-ellipsis  hover:border-b-1">
            Mohamedss
          </Label>
          <ChevronDown />
        </div>
      </div>
    </>
  );
}

export default TopBar;
