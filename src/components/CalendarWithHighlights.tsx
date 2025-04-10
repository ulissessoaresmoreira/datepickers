"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type CalendarWithHighlightsProps = {
  initialDate?: Date;
  highlightedDates: Date[];
};

function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export default function CalendarWithHighlights({
  initialDate = new Date(),
  highlightedDates,
}: CalendarWithHighlightsProps) {
  const [value, setValue] = useState<Date | null>(initialDate);

  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded-xl shadow-md">
      <Calendar
      
        onChange={(val) => setValue(val as Date)}
        value={value}
        tileClassName={({ date, view }) =>
          view === "month" &&
          highlightedDates.some((d) => isSameDay(d, date))
            ? "bg-green-500 text-white rounded-full"
            : "bg-gray-200 rounded-full"
        }
      />
    </div>
  );
}
