"use client";
import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import format from "date-fns/format";
import { cn } from "@/lib/utils";

function DatePicker() {
  const [date, setDate] = React.useState<Date>();
  return (
    <Popover >
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "w-[240px] justify-start text-left font-normal border border-[#0F75B1] hover:bg-transparent h-10 rounded-sm",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
        className="bg-[#0F75B1] text-white font-sans"
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default DatePicker;
