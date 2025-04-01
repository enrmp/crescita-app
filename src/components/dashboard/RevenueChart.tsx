
import { Card, CardContent, CardHeader } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "June", Gross: 15000, Net: 8000, Target: 20000 },
  { name: "July", Gross: 22000, Net: 12000, Target: 22000 },
  { name: "Aug", Gross: 19000, Net: 10000, Target: 23000 },
  { name: "Sept", Gross: 23000, Net: 13000, Target: 25000 },
  { name: "Oct", Gross: 22000, Net: 10500, Target: 27000 },
  { name: "Nov", Gross: 18000, Net: 9000, Target: 29000 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Monthly recurring revenue</h3>
          <div className="text-sm text-gray-500">
            Oct, 2024
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Gross</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                <span>Net</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span>Target</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={30}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tickFormatter={(value) => {
                  if (value === 0) return '0';
                  if (value >= 1000) return `$${value / 1000}k`;
                  return `$${value}`;
                }}
              />
              <Tooltip
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              />
              <Bar dataKey="Gross" fill="#0B84FF" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Net" fill="#00E5B7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
