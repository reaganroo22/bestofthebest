
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import MeetKristen from "./pages/MeetKristen";
import WhyETherapy from "./pages/WhyETherapy";
import Services from "./pages/Services";
import ImportantForms from "./pages/ImportantForms";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/meet-kristen" element={<MainLayout><MeetKristen /></MainLayout>} />
          <Route path="/why-e-therapy" element={<MainLayout><WhyETherapy /></MainLayout>} />
          <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
          <Route path="/important-forms" element={<MainLayout><ImportantForms /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
