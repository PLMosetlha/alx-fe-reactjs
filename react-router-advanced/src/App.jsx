import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Login from "./Login";
import BlogPost from "./components/BlogPost"; // Import BlogPost component
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/blog/:id" element={<BlogPost />} />{" "}
        {/* Dynamic routing for blog post */}
        <Route path="/" element={<Home />} />
        {/* Use ProtectedRoute for the Profile page */}
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
