// src/components/EventCalendar.jsx
"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const EventsCalendar = ({ events, selectedDate, setSelectedDate }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center mb-12">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-indigo-600 text-white hover:bg-indigo-700 transition">
            📅 View on Calendar
          </Button>
        </DialogTrigger>

        <DialogContent className="w-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-2xl flex flex-col items-center justify-center">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-center ">Event Calendar</DialogTitle>
            <DialogDescription className="text-center text-gray-600 dark:text-gray-400">
              Showing events for{" "}
              <span className="font-semibold text-indigo-600">
                {selectedDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </DialogDescription>
          </DialogHeader>
{/* p-4 shadow-sm bg-white dark:bg-gray-800 rounded-2xl */}
          <Card className="">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              className="rounded-md border"
              modifiers={{
                hasEvent: events.map((e) => new Date(e.date)),
              }}
              modifiersClassNames={{
                hasEvent:
                  "relative after:content-[''] after:w-2 after:h-2 after:bg-indigo-500 after:rounded-full after:absolute after:bottom-1/3 after:left-1/2 after:-translate-x-1/2",
              }}
            />
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};
