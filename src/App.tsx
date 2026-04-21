import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangProvider } from "./lib/lang";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#0f172a] text-slate-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>
          <Footer />
        </div>
      </LangProvider>
    </BrowserRouter>
  );
}

export default App;
