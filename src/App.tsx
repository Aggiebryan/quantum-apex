
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseManagement from "./pages/CaseManagement";
import ClientPortal from "./pages/ClientPortal";
import BillingInvoicing from "./pages/BillingInvoicing";
import CalendarScheduling from "./pages/CalendarScheduling";
import SecurityCompliance from "./pages/SecurityCompliance";
import Automation from "./pages/Automation";
import Signup from "./pages/Signup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-management" element={<CaseManagement />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="/billing-invoicing" element={<BillingInvoicing />} />
          <Route path="/calendar-scheduling" element={<CalendarScheduling />} />
          <Route path="/security-compliance" element={<SecurityCompliance />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/signup" element={<Signup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
