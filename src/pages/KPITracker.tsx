
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const clientsData = [
  { name: "May", value: 10 },
  { name: "June", value: 5 },
  { name: "July", value: 8 },
  { name: "Aug", value: 10 },
  { name: "Sep", value: 5 },
  { name: "Oct", value: 12 },
];

const clvData = [
  { name: '3M', value: 5000, avg: 3000 },
  { name: '6M', value: 8000, avg: 5000 },
  { name: '9M', value: 12000, avg: 8000 },
  { name: '12M', value: 15000, avg: 10000 },
  { name: '15M', value: 18000, avg: 12000 },
  { name: '18M', value: 15000, avg: 10000 },
];

export default function KPITracker() {
  return (
    <MainLayout pageTitle="KPI Tracker">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sales Tracker */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Sales</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">35 Sales</h2>
                <span className="text-green-500 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L12 12.586V7z" clipRule="evenodd" />
                  </svg>
                  16% in 1 month
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">7 more to go</p>
            </div>
            
            <div className="h-6 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-orange-400 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-6">
              <span>0</span>
              <span>42</span>
            </div>
            
            <p className="text-gray-700">
              You've closed <span className="font-bold">35 Sales</span> this month. That's <span className="font-semibold text-blue-600">16% higher</span> than your average sales every month. Keep going!
            </p>
          </Card>
          
          {/* Revenue Tracker */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Revenue</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-2xl font-bold mb-1">$12,000</div>
                <p className="text-gray-500 text-sm">$3000 to go</p>
              </div>
              
              <div className="w-32 h-32 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#eee" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#0080ff"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="50.24"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700">
              You made <span className="font-bold">$12,000</span> this month. That's <span className="font-semibold text-blue-600">16% higher</span> than your average revenue every month. Great job!
            </p>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Clients Tracker */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Clients: Avg vs. This Month</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">+4 Clients</h2>
                <span className="text-green-500 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L12 12.586V7z" clipRule="evenodd" />
                  </svg>
                  8% in 1 month
                </span>
              </div>
              <p className="text-gray-700 mt-2">Well done! You've won <strong>4 more clients</strong> than the average this month</p>
            </div>
            
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={clientsData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#81e6d9" radius={[4, 4, 0, 0]} />
                  <line x1="0" y1="6" x2="100%" y2="6" stroke="#FF9F29" strokeWidth={2} strokeDasharray="5 5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          {/* Conversion Rate */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Conversion Rate</h3>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">10%</h2>
                <span className="text-green-500 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L12 12.586V7z" clipRule="evenodd" />
                  </svg>
                  2.7% in 1 month
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-gray-500 text-sm mb-1">Leads</div>
                <div className="font-bold text-lg">22</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-gray-500 text-sm mb-1">Calls Booked</div>
                <div className="font-bold text-lg">7</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-gray-500 text-sm mb-1">Sale Won</div>
                <div className="font-bold text-lg">2</div>
              </div>
            </div>
            
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[
                    { name: 'Leads', value: 22 },
                    { name: 'Calls', value: 7 },
                    { name: 'Won', value: 2 },
                  ]}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        
        {/* Client Lifetime Value */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Client Lifetime Value</h3>
          <div className="flex items-center gap-8 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">Current Lifetime Value</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-500"></div>
              <span className="text-sm text-gray-600">Average Lifetime Value</span>
            </div>
          </div>
          
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={clvData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0080ff" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0080ff" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d9bf" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#00d9bf" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis dataKey="name" />
                <YAxis
                  tickFormatter={(value) => 
                    value === 0 ? '0' : 
                    value < 1000 ? `$${value}` : 
                    `$${Math.floor(value / 1000)}k`
                  }
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stackId="1"
                  stroke="#0080ff"
                  fill="url(#colorValue1)"
                />
                <Area
                  type="monotone"
                  dataKey="avg"
                  stackId="2"
                  stroke="#00d9bf"
                  fill="url(#colorValue2)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
