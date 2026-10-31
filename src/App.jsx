import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Writing from "./pages/Writing";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Layout({ children }) {
  const selfStacked = ["/", "/about", "/projects", "/services"].includes(useLocation().pathname);
  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900">
      <div className="aurora" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <div className="scroll-progress" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 sm:flex-row sm:items-start sm:gap-6 sm:px-6 sm:py-12">
        <Sidebar />
        <main
          className={
            selfStacked
              ? "min-w-0 flex-1"
              : "glass min-w-0 flex-1 rounded-3xl p-5 sm:p-10"
          }
        >
          {children}
        </main>
      </div>

      <footer className="relative">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Frankline Macharia</span>
          <span>Nakuru, Kenya</span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}