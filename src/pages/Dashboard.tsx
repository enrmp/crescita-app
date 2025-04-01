
import { ChevronRight, Target } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";
import { PerformanceCard } from "@/components/dashboard/PerformanceCard";
import { ProgressCircle } from "@/components/dashboard/ProgressCircle";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { CalendarWidget } from "@/components/dashboard/CalendarWidget";
import { format } from "date-fns";

export default function Dashboard() {
  const today = new Date();
  
  return (
    <MainLayout pageTitle="Dashboard">
      <div className="space-y-6">
        {/* Welcome section */}
        <div>
          <p className="text-gray-500">{format(today, "EEE, d MMMM")}</p>
          <h1 className="text-3xl font-bold mt-1">Good morning, Josh</h1>
        </div>

        {/* Performance Overview */}
        <div>
          <h2 className="text-lg font-medium text-gray-600 mb-4">Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="flex items-center p-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600">Primary Business Objective:</h3>
                <p className="font-semibold mt-1">To increase monthly recurring revenue</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-300" />
            </Card>
            <Card className="flex items-center p-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600">Leads</h3>
                <p className="font-semibold mt-1">22</p>
              </div>
            </Card>
            <Card className="flex items-center p-4">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600">Calls Booked</h3>
                <p className="font-semibold mt-1">7</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PerformanceCard 
            title="Revenue" 
            value="$9,300" 
            percentage={16}
            targetValue="$1,860 to go this month"
            color="green"
          />
          <PerformanceCard 
            title="Gross Profit" 
            value="$9,300" 
            percentage={16}
            targetValue="$1,860 to go this month"
            color="green"
          />
          <PerformanceCard 
            title="Net Profit" 
            value="$6,600" 
            percentage={16}
            targetValue="$1,320 to go this month"
            color="purple"
          />
          <PerformanceCard 
            title="Sales" 
            value="35" 
            percentage={12}
            targetValue="7 to go this month"
            color="green"
          />
          <PerformanceCard 
            title="Expenses" 
            value="$2,700" 
            percentage={0}
            targetValue="+ $399"
            showArrow={false}
          />
          <div className="md:row-span-2">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">Your Target</span>
            </div>
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-none p-4 h-[calc(100%-2rem)]">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
                    <Target className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold">You're doing great!</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    You've achieved 75% of your monthly target.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProgressCircle value={12000} target={15000} remainingText="$3,000 to go" />
          <RevenueChart />
          <CalendarWidget />
        </div>
      </div>
    </MainLayout>
  );
}
