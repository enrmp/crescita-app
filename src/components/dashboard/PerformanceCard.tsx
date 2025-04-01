
import { ChevronRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface PerformanceCardProps {
  title: string;
  value: string | number;
  percentage?: number;
  period?: string;
  targetValue?: string;
  icon?: React.ReactNode;
  color?: string;
  showArrow?: boolean;
}

export function PerformanceCard({
  title,
  value,
  percentage,
  period = "1 month",
  targetValue,
  icon,
  color = "green",
  showArrow = true,
}: PerformanceCardProps) {
  const getColorClass = () => {
    switch (color) {
      case "green":
        return "text-green-500";
      case "purple":
        return "text-purple-500";
      default:
        return "text-green-500";
    }
  };

  const getProgressColor = () => {
    switch (color) {
      case "green":
        return "bg-green-500";
      case "purple":
        return "bg-purple-500";
      default:
        return "bg-green-500";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {showArrow && <ChevronRight className="h-4 w-4 text-gray-400" />}
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">{value}</h2>
            {percentage && (
              <div className="flex items-center space-x-1">
                <TrendingUp className={`h-3 w-3 ${getColorClass()}`} />
                <span className={`text-xs font-medium ${getColorClass()}`}>
                  {percentage}% in {period}
                </span>
              </div>
            )}
          </div>
          {targetValue && (
            <div className="space-y-1">
              <div className="text-xs text-gray-500">{targetValue}</div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getProgressColor()}`}
                  style={{ width: `${Math.min(percentage || 0, 100)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
