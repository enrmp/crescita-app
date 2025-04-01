
import { Card, CardContent, CardHeader } from "../ui/card";

interface ProgressCircleProps {
  value: number;
  target: number;
  remainingText: string;
}

export function ProgressCircle({ value, target, remainingText }: ProgressCircleProps) {
  const percentage = Math.min((value / target) * 100, 100);
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  
  // Calculate gradient colors based on percentage
  const startColor = percentage < 30 ? "#8B5CF6" : percentage < 60 ? "#3B82F6" : "#10B981";
  const endColor = percentage < 30 ? "#C084FC" : percentage < 60 ? "#60A5FA" : "#34D399";

  return (
    <Card className="text-center">
      <CardHeader className="pb-2">
        <h3 className="text-sm font-medium text-gray-600">Revenue</h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <div className="relative inline-flex items-center justify-center">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={startColor} />
                  <stop offset="100%" stopColor={endColor} />
                </linearGradient>
              </defs>
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#e6e6e6"
                strokeWidth="16"
              />
              {/* Progress circle */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 100 100)"
              />
              <text
                x="100"
                y="85"
                textAnchor="middle"
                fontSize="38"
                fontWeight="bold"
                fill="#333333"
              >
                ${value.toLocaleString()}
              </text>
              <text
                x="100"
                y="115"
                textAnchor="middle"
                fontSize="16"
                fill="#666666"
              >
                {remainingText}
              </text>
            </svg>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            <span className="font-medium">${value.toLocaleString()}</span> out of ${target.toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
