import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import VideoPage from "./pages/VideoPage";
import DiaryPage from "./pages/DiaryPage";
import GalleryPage from "./pages/GalleryPage";
import VisitorsPage from "./pages/VisitorsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/visitors" element={<VisitorsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
