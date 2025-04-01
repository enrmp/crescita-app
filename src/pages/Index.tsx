
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Welcome to Crescita</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your all-in-one growth platform — track KPIs, manage clients, sync finances, 
          and get paid faster. Built for modern freelancers and founders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/kpi-tracker')}
          >
            Explore Features
          </Button>
        </div>
      </div>
      <div className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Crescita. All rights reserved.
      </div>
    </div>
  );
};

export default Index;
