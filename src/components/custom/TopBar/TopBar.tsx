import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Bell, ChevronDown } from "lucide-react";
function TopBar() {
  return (
    <>
      <Label className="text-2xl text-muted-foreground font-sans">
        Registrations
      </Label>
      <div className="flex justify-center items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="
            hover:bg-[#1189D0] hover:text-primary-foreground focus:bg-[#0E92E0] focus:text-primary-foreground
            p-2 relative"
        >
          <Bell className="h-5 w-5" />
          <div className="flex text-sm justify-center items-center bg-red-500 rounded-full p-2 h-[20px] w-[20px]
           text-white absolute bottom-4 left-4 
          ">
            7
          </div>
        </Button>

        <div
          className={`flex w-44 items-center justify-between gap-1 rounded-3xl px-2 py-0
        border border-gray-400`}
        >
          <Avatar className="mr-2 w-8 h-8">
            <AvatarImage src="/female2.jpg" />
            <AvatarFallback>Mo</AvatarFallback>
          </Avatar>
          <Label className="overflow-hidden text-ellipsis text-muted-foreground  hover:border-b-1 font-sans">
            Mohamedss
          </Label>
          <ChevronDown />
        </div>
      </div>
    </>
  );
}

export default TopBar;
