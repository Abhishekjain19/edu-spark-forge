
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Logout from "./pages/auth/Logout";
import StudentDashboard from "./pages/student/StudentDashboard";
import BuyCourses from "./pages/student/BuyCourses";
import EducatorDashboard from "./pages/educator/EducatorDashboard";
import UploadCourse from "./pages/educator/UploadCourse";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>
              <TooltipProvider>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/logout" element={<Logout />} />
                  
                  {/* Student Routes */}
                  <Route path="/student/dashboard" element={
                    <ProtectedRoute requiredRole="student">
                      <StudentDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/student/buy-courses" element={
                    <ProtectedRoute requiredRole="student">
                      <BuyCourses />
                    </ProtectedRoute>
                  } />
                  <Route path="/buy-courses" element={
                    <ProtectedRoute requiredRole="student">
                      <BuyCourses />
                    </ProtectedRoute>
                  } />
                  
                  {/* Educator Routes */}
                  <Route path="/educator/dashboard" element={
                    <ProtectedRoute requiredRole="educator">
                      <EducatorDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/educator/upload-course" element={
                    <ProtectedRoute requiredRole="educator">
                      <UploadCourse />
                    </ProtectedRoute>
                  } />
                  
                  {/* 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
