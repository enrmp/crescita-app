
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import KPITracker from "./pages/KPITracker";
import Finance from "./pages/Finance";
import CRM from "./pages/CRM";
import ClientManagement from "./pages/ClientManagement";
import Invoice from "./pages/Invoice";
import Reports from "./pages/Reports";
import Opportunity from "./pages/Opportunity";
import Calendar from "./pages/Calendar";
import CrescitaAI from "./pages/CrescitaAI";
import CrescitaClub from "./pages/CrescitaClub";
import Contacts from "./pages/Contacts";
import CommunityUpdates from "./pages/CommunityUpdates";
import HelpAndSupport from "./pages/HelpAndSupport";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kpi-tracker" element={<KPITracker />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/clients" element={<ClientManagement />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/ai" element={<CrescitaAI />} />
          <Route path="/club" element={<CrescitaClub />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/updates" element={<CommunityUpdates />} />
          <Route path="/help" element={<HelpAndSupport />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
