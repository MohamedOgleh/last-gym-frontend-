'use client'
import { SideBarItems as item } from "@/models/MenuItems";
 
import Logo from "./Logo";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function SideBar() {
  const [openTab,setOpenTab]=useState<number>(0)

  return (
    <>
      <Logo />
      <div className="flex flex-col gap-1 w-[90%]">
        <Label className="text-slate-300 mb-3">Customer care</Label>

        {item.customerCare.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className=" h-[45px] w-full flex justify-start gap-2 text-primary-foreground
            hover:bg-[#1189D0] hover:text-primary-foreground focus:bg-[#0E92E0] focus:text-primary-foreground"
          onClick={()=>setOpenTab(index)}>
            {item.leftIcon}
            {item.title}
            {item.rightIcon}
          </Button>
        ))}
      </div>

      {/* <Separator className="bg-gray-400" /> */}
      <div className="flex flex-col gap-1 w-[90%]">
        <Label className="text-slate-300 mb-3">Management</Label>
        {item.magangement.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`${
              index == 2 ? "mt-[calc(100%-10rem)]" : ""
            } h-[45px] w-full flex justify-start gap-2 text-primary-foreground
            hover:bg-[#1189D0] hover:text-primary-foreground`}
          >
            {item.leftIcon}
            {item.title}
            {item.rightIcon}
          </Button>
        ))}
      </div>
    </>
  );
}

export default SideBar;
