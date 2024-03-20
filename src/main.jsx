import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Upload.jsx";
import "./index.css";
import { Stepper } from "./Stepper.jsx";
import Navbar from "./components/Navbar.jsx";
import HorizontalLinearStepper from "./components/Stepper.jsx";
import { FeaturedImageGallery } from "./pages/ExtractedImages.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExtractedText } from "./pages/ExtractedText.jsx";
// make route for extracted images and extraced text
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <React.StrictMode>
            <Navbar />
            <HorizontalLinearStepper />
            
          </React.StrictMode>
        }
      />
      <Route
        path="/extracted-images"
        element={
          <React.StrictMode>
            <Navbar />
            <Stepper stepContext={2} />
            <FeaturedImageGallery />
          </React.StrictMode>
        }
      />
      <Route
        path="/extracted-text"
        element={
          <React.StrictMode>
            <Navbar />
            <Stepper stepContext={3} />
            <ExtractedText />
          </React.StrictMode>
        }
      />
    </Routes>
  </BrowserRouter>
);
