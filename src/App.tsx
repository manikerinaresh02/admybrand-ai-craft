/**
 * App Component - Root Application Container
 * 
 * This component serves as the main application wrapper, providing:
 * - Global state management with React Query
 * - Routing with React Router
 * - UI component providers (Tooltip, Toaster)
 * - Toast notifications for user feedback
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Initialize React Query client for server state management
const queryClient = new QueryClient();

const App = () => (
  // React Query Provider - Enables data fetching and caching
  <QueryClientProvider client={queryClient}>
    {/* Tooltip Provider - Enables tooltip functionality across the app */}
    <TooltipProvider>
      {/* Toast Notifications - Multiple toast systems for different use cases */}
      <Toaster />
      <Sonner />
      
      {/* Browser Router - Handles client-side routing */}
      <BrowserRouter>
        <Routes>
          {/* Main landing page route */}
          <Route path="/" element={<Index />} />
          
          {/* Catch-all route for 404 pages */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
