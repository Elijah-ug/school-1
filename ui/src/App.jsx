// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import { Navbar } from "./components/NavBar";
import About from "./pages/About";
import { Admissions } from "./pages/Addmissions";
import { Academics } from "./pages/Academics";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    // <ThemeProvider>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col scroll-smooth bg-gray-100 dark:bg-gray-700">
        <Navbar />
        <main className="flex-1 pt-13">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="academics" element={<Academics />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="/gallery" element={<MediaGallery />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/policies" element={<Policies />} /> */}
          </Routes>
        </main>
        <Footer />
        {/* <Toaster /> */}
      </div>
    </BrowserRouter>
    // </ThemeProvider>
  );
}
