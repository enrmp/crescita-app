
import { Bell, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopBarProps {
  pageTitle: string;
  userName?: string;
}

export function TopBar({ pageTitle, userName = "Josh" }: TopBarProps) {
  return (
    <div className="flex justify-between items-center py-4 px-6 border-b">
      <h1 className="text-2xl font-semibold">{pageTitle}</h1>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Plus size={18} />
          <span>Add New</span>
        </Button>
        <Button className="bg-crescita-purple flex items-center gap-2 rounded-full">
          <span>AI</span>
        </Button>
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-500 cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
            JD
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
