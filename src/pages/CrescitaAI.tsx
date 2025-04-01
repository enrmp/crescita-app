
import { Send } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

export default function CrescitaAI() {
  return (
    <MainLayout pageTitle="Crescita AI">
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-md bg-black/90 rounded-xl shadow-xl p-6 text-white">
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-crescita-accent p-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
            </div>
            <h2 className="text-xl font-semibold">Crescita AI</h2>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-xl mb-6">What can I help you with?</h3>
            
            <div className="space-y-3">
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 transition-colors p-3 rounded-lg text-left text-sm">
                "Analyze this month's revenue performance" <ChevronRight />
              </button>
              
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 transition-colors p-3 rounded-lg text-left text-sm">
                "Set KPIs for next quarter based on projections" <ChevronRight />
              </button>
              
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 transition-colors p-3 rounded-lg text-left text-sm">
                "Give me sales projections for the next year" <ChevronRight />
              </button>
            </div>
          </div>
          
          <div className="relative mt-auto">
            <input
              type="text"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-4 pr-10 text-white placeholder-zinc-500 focus:outline-none focus:border-crescita-accent"
              placeholder="Ask Crescita AI..."
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-crescita-accent hover:text-white">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-2">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );
}
