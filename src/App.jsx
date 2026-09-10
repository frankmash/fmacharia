import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-50 text-neutral-900">
      {/* soft ink-like accent glow — kept subtle so it never fights the text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-emerald-400/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-emerald-300/15 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-200/10 blur-[90px]"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 py-8 sm:flex-row sm:gap-16 sm:py-24">
        <Sidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>

      <footer className="relative border-t border-neutral-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-xs text-neutral-500">
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
          <Route path="/writing" element={<Writing />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}