
import { ArrowUp, ArrowDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const earningsData = [
  { date: "01 - 08", revenue: 1000, grossProfit: 700, netProfit: 500 },
  { date: "09 - 16", revenue: 2000, grossProfit: 1500, netProfit: 1200 },
  { date: "17 - 24", revenue: 8000, grossProfit: 6000, netProfit: 4500 },
  { date: "25 - 30", revenue: 5000, grossProfit: 4000, netProfit: 3600 },
];

const expensesData = [
  { name: "Payroll", amount: 350, change: 15, changeType: "up" },
  { name: "Subscriptions", amount: 270.99, change: 14.5, changeType: "up" },
  { name: "Advertising", amount: 226.95, change: 8.6, changeType: "down" },
  { name: "Courses", amount: 249, change: 20, changeType: "up" },
  { name: "Other", amount: 416.06, change: 14, changeType: "down" },
];

export default function Reports() {
  return (
    <MainLayout pageTitle="Reports">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-700">Reports</h2>
          <div className="flex space-x-2">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">
                Custom Date
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-300 hover:bg-gray-50">
                Sep
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-300 hover:bg-gray-50">
                Oct
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">
                Nov
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Earnings Card */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Earnings</h3>
            <Button variant="link" className="text-blue-600 flex items-center text-sm">
              View Report <ChevronRight size={14} />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Revenue</p>
              <p className="text-xl font-bold">$12,093.15</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Gross Profit</p>
              <p className="text-xl font-bold">$9,300.71</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Net Profit</p>
              <p className="text-xl font-bold">$6,600.89</p>
            </div>
          </div>

          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={earningsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis 
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="grossProfit" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="netProfit" stroke="#a855f7" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Projects/Sales Card */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Projects / Sales</h3>
            <Button variant="link" className="text-blue-600 flex items-center text-sm">
              View Report <ChevronRight size={14} />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Projects</p>
              <p className="text-xl font-bold">15</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Completed</p>
              <p className="text-xl font-bold">12</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Ongoing</p>
              <p className="text-xl font-bold">3</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#f0f0f0"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray="80, 100"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-sm text-gray-500">Completion Rate</p>
                <p className="text-3xl font-bold">80%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Expenses Card */}
      <Card className="p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Expenses</h3>
          <Button variant="link" className="text-blue-600 flex items-center text-sm">
            View Report <ChevronRight size={14} />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Expenses</p>
            <p className="text-xl font-bold">$1,513</p>
            <div className="flex items-center text-xs text-red-500 mt-1">
              <ArrowUp size={12} className="mr-1" />
              <span>18% in 1 month</span>
            </div>
          </div>

          {expensesData.map((expense, index) => (
            <div key={index}>
              <p className="text-sm text-gray-500 mb-1">{expense.name}</p>
              <p className="text-xl font-bold">${expense.amount}</p>
              <div className={`flex items-center text-xs ${expense.changeType === "up" ? "text-green-500" : "text-red-500"} mt-1`}>
                {expense.changeType === "up" ? <ArrowUp size={12} className="mr-1" /> : <ArrowDown size={12} className="mr-1" />}
                <span>{expense.change}% in 1 month</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </MainLayout>
  );
}

function Button({ variant = "default", className = "", children, ...props }) {
  const getVariantClass = () => {
    switch (variant) {
      case "link":
        return "p-0 underline-offset-4 hover:underline text-primary";
      case "outline":
        return "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
      default:
        return "bg-primary text-primary-foreground hover:bg-primary/90";
    }
  };

  return (
    <button
      className={`inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 ${getVariantClass()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
