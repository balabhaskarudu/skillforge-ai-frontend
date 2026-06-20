import { Routes, Route } from "react-router-dom";
import UploadResume from "@/pages/UploadResume";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import AnalysisPage from "@/pages/analysis";
import RoadmapPage from "@/pages/Roadmap";
import InterviewQuestions from "@/pages/InterviewQuestions";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/roadmaps" element={<RoadmapPage />} />
        <Route path="/interviews" element={<InterviewQuestions />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
