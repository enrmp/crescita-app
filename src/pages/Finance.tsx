
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const paymentsData = [
  { name: 'Successful', value: 8500, color: '#3b82f6' },
  { name: 'In Transit', value: 350, color: '#22d3ee' },
  { name: 'Refunded', value: 250, color: '#a855f7' },
  { name: 'Failed', value: 1150, color: '#ef4444' }
];

const invoicesData = [
  { name: 'Paid', value: 7, color: '#3b82f6' },
  { name: 'Pending', value: 3, color: '#f97316' },
  { name: 'Overdue', value: 2, color: '#ef4444' }
];

const financialData = [
  { date: 'Aug', sales: 9000, profit: 3400 },
  { date: 'Sep', sales: 9500, profit: 3600 },
  { date: 'Oct', sales: 9900, profit: 3900 }
];

const recurringRevenueData = [
  { name: 'June', green: 1500, blue: 3500, total: 5000 },
  { name: 'July', green: 1700, blue: 4000, total: 5700 },
  { name: 'Aug', green: 1600, blue: 4200, total: 5800 },
  { name: 'Sept', green: 1800, blue: 4300, total: 6100 },
  { name: 'Oct', green: 1750, blue: 4500, total: 6250 },
  { name: 'Nov', green: 1500, blue: 4000, total: 5500 },
];

const upcomingExpenses = [
  { name: 'Figma', amount: '$45', date: '14/11/2024' },
  { name: 'Adobe Express', amount: '$399', date: '16/11/2024' },
  { name: 'Xero', amount: '$16', date: '20/11/2024' },
  { name: 'Udemy', amount: '$12.99', date: '21/11/2024' },
];

const expensesBreakdown = [
  { name: 'Payroll', value: 350, color: '#f97316' },
  { name: 'Advertising', value: 226.95, color: '#8b5cf6' },
  { name: 'Subscriptions', value: 270.99, color: '#3b82f6' },
  { name: 'Software', value: 106.89, color: '#10b981' },
  { name: 'Insurance', value: 249, color: '#14b8a6' },
  { name: 'Other', value: 309.17, color: '#f59e0b' }
];

const clientRetentionData = [
  { month: 'Jun', current: 8, lost: 1 },
  { month: 'Jul', current: 10, lost: 1 },
  { month: 'Aug', current: 9, lost: 2 },
  { month: 'Sep', current: 10, lost: 2 },
  { month: 'Oct', current: 11, lost: 1 }
];

export default function Finance() {
  return (
    <MainLayout pageTitle="Finance">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payments Card */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Payments</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-stretch mb-4">
              <div className="w-1/2 pr-3">
                <div className="h-8 flex mb-2">
                  {paymentsData.map((item, index) => (
                    <div 
                      key={index} 
                      className="h-full" 
                      style={{
                        width: `${(item.value / 10250) * 100}%`,
                        backgroundColor: item.color
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  {paymentsData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-gray-600">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium">${item.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Financial Statements */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Financial Statements</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">Sales</span>
                    <span className="text-xs text-green-500 ml-2">+10% in 1 month</span>
                  </div>
                </div>
                <div className="text-xl font-bold mt-1">$9,570.89</div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">Profit</span>
                    <span className="text-xs text-green-500 ml-2">+9% in 1 month</span>
                  </div>
                </div>
                <div className="text-xl font-bold mt-1">$3,934.00</div>
              </div>
            </div>

            <div className="h-44 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={financialData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="sales" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSales)" />
                  <Area type="monotone" dataKey="profit" stroke="#10b981" fillOpacity={1} fill="url(#colorProfit)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Invoices */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Invoices</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="flex">
              <div className="w-1/2">
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie
                      data={invoicesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {invoicesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="text-xl font-bold">
                      12
                    </text>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-1/2 flex flex-col justify-center">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Paid</span>
                    <span className="font-semibold">7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Pending</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Overdue</span>
                    <span className="font-semibold">2</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recurring Revenue */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recurring Revenue</h3>
              <div className="flex text-xs space-x-2">
                <span className="px-2 py-1 bg-gray-100 rounded">Monthly</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Yearly</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Green</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Net</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span>Target</span>
              </div>
            </div>

            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={recurringRevenueData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                  stackOffset="expand"
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis 
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Revenue']}
                  />
                  <Bar dataKey="green" stackId="a" fill="#10b981" />
                  <Bar dataKey="blue" stackId="a" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Expenses */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Upcoming Expenses</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {upcomingExpenses.map((expense, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{expense.name}</div>
                    <div className="text-xs text-gray-500">Monthly</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{expense.amount}</div>
                    <div className="text-xs text-gray-500">{expense.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Expenses Breakdown */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Expenses Breakdown</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="flex">
              <div className="w-1/2">
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie
                      data={expensesBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {expensesBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fill="#333" className="text-xs font-bold">
                      Total
                    </text>
                    <text x="50%" y="50%" dy="15" textAnchor="middle" dominantBaseline="central" fill="#333" className="text-xs font-bold">
                      $1,513
                    </text>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-1/2 ml-4">
                <div className="space-y-3">
                  {expensesBreakdown.map((expense, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: expense.color }}></div>
                        <span className="text-sm">{expense.name}</span>
                      </div>
                      <span className="text-sm font-medium">${expense.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Client Retention */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Client Retention</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-center mb-2 space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-600">Current Clients</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm text-gray-600">Lost Clients</span>
              </div>
            </div>

            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={clientRetentionData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="current" fill="#3b82f6" />
                  <Bar dataKey="lost" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Client Lifetime Value */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Client Lifetime Value</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-center mb-2 space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-600">Current Lifetime Value</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
                <span className="text-sm text-gray-600">Average Lifetime Value</span>
              </div>
            </div>

            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[
                    { name: '3M', clv: 2000, avg: 1500 },
                    { name: '6M', clv: 5000, avg: 3500 },
                    { name: '9M', clv: 8000, avg: 6000 },
                    { name: '12M', clv: 13000, avg: 9000 },
                    { name: '15M', clv: 16000, avg: 12000 },
                    { name: '18M', clv: 14000, avg: 10000 },
                  ]}
                  margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="colorClv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="clv" stroke="#3b82f6" fillOpacity={1} fill="url(#colorClv)" />
                  <Area type="monotone" dataKey="avg" stroke="#14b8a6" fillOpacity={1} fill="url(#colorAvg)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
