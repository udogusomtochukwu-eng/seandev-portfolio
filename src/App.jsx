import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Toolkit from "./components/Toolkit.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
