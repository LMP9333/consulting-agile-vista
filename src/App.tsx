import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          {/* Map primary route and link fallback paths */}
          <Route path="/" element={<Index />} />
          <Route path="/approach" element={<Index />} />
          <Route path="/services" element={<Index />} />
          <Route path="/industries" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          
          {/* Catch-all remains at the bottom */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// This explicit line must be included to resolve your build crash:
export default App;


// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { HashRouter, Route, Routes } from "react-router-dom";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import Index from "./pages/Index.tsx";
// import NotFound from "./pages/NotFound.tsx";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </HashRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
