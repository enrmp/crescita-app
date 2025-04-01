
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

// Sample calendar events
const calendarEvents = [
  { id: 1, day: 2, title: "Follow-up with Johan", time: "9:00AM", type: "meeting" },
  { id: 2, day: 4, title: "CRM Status Meet", time: "10:00AM", type: "meeting" },
  { id: 3, day: 4, title: "Sales Meeting", time: "4:00PM", type: "meeting" },
  { id: 4, day: 5, title: "Discovery Call", time: "12:00PM", type: "call" },
  { id: 5, day: 8, title: "Follow up with client", time: "12:00PM", type: "follow-up" },
  { id: 6, day: 12, title: "Discovery Call", time: "12:00PM", type: "call" },
  { id: 7, day: 17, title: "Marketing Comm", time: "9:00AM", type: "meeting" },
  { id: 8, day: 21, title: "Weekly Brief", time: "2:00PM", type: "meeting" },
  { id: 9, day: 23, title: "New Team Meet", time: "12:00PM", type: "meeting" },
  { id: 10, day: 26, title: "Sales Meeting", time: "4:00PM", type: "meeting" },
];

export default function Calendar() {
  const [viewMode, setViewMode] = useState("daily");
  
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  // Generate days for the month
  const generateCalendarDays = () => {
    const days = [];
    const totalDays = 31; // October 2024 has 31 days
    
    for (let i = 1; i <= totalDays; i++) {
      const dayOfWeek = (i + 1) % 7; // October 1, 2024 is a Tuesday (1)
      days.push({
        day: i,
        dayOfWeek: daysOfWeek[dayOfWeek],
        events: calendarEvents.filter(event => event.day === i)
      });
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  const renderEventContent = (event) => {
    let borderColor = "border-blue-400";
    
    if (event.type === "call") {
      borderColor = "border-purple-400";
    } else if (event.type === "follow-up") {
      borderColor = "border-yellow-400";
    }
    
    return (
      <div
        key={event.id}
        className={`border-l-4 ${borderColor} bg-white p-2 mb-1 rounded shadow-sm`}
      >
        <div className="text-sm font-medium">{event.title}</div>
        <div className="text-xs text-gray-500">{event.time}</div>
      </div>
    );
  };
  
  // Group days into weeks
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }
  
  return (
    <MainLayout pageTitle="Calendar">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Button variant="outline" size="icon" className="mr-2">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-xl font-semibold">October 2024</h2>
            <Button variant="outline" size="icon" className="ml-2">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-md">
            <button
              className={`px-4 py-1 text-sm rounded ${viewMode === "daily" ? "bg-white shadow" : ""}`}
              onClick={() => setViewMode("daily")}
            >
              Daily
            </button>
            <button
              className={`px-4 py-1 text-sm rounded ${viewMode === "weekly" ? "bg-white shadow" : ""}`}
              onClick={() => setViewMode("weekly")}
            >
              Weekly
            </button>
            <button
              className={`px-4 py-1 text-sm rounded ${viewMode === "monthly" ? "bg-white shadow" : ""}`}
              onClick={() => setViewMode("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border shadow-sm overflow-auto">
          <div className="grid grid-cols-7 border-b">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="py-2 text-center font-medium text-sm border-r last:border-r-0">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 grid-flow-row auto-rows-fr">
            {weeks.map((week, weekIndex) => (
              // Each week
              week.map((day, dayIndex) => (
                // Each day in the week
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`border-r border-b min-h-[150px] ${
                    dayIndex === 6 ? "border-r-0" : ""
                  } ${
                    weekIndex === 4 && dayIndex > 3 ? "bg-gray-50" : ""
                  }`}
                >
                  <div className="p-1">
                    <div className="text-sm text-gray-500 mb-1 pl-1">{day.day < 10 ? `0${day.day}` : day.day}</div>
                    {day.events.map(event => renderEventContent(event))}
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
