
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

const events = [
  { id: 1, time: "7:00 AM", title: "" },
  { id: 2, time: "8:00 AM", title: "Client Session" },
  { id: 3, time: "9:00 AM", title: "Follow up with clients" },
  { id: 4, time: "10:00 AM", title: "Client Session" },
  { id: 5, time: "11:00 AM", title: "Sales Call" },
  { id: 6, time: "12:00 PM", title: "Sales Masterclass" },
  { id: 7, time: "1:00 PM", title: "" },
  { id: 8, time: "2:00 PM", title: "" },
];

export function CalendarWidget() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-medium">Calendar</h3>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <h4 className="font-medium">November 23, 2024</h4>
        </div>
        <div className="space-y-2">
          {events.map((event) => (
            <div key={event.id} className="flex items-start">
              <div className="text-sm text-gray-500 w-16">{event.time}</div>
              {event.title ? (
                <div className="flex-1 ml-2 p-2 bg-crescita-lightBlue text-blue-800 rounded-md text-sm">
                  {event.title}
                </div>
              ) : (
                <div className="flex-1 ml-2 p-2 border border-dashed border-gray-200 rounded-md h-6"></div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
