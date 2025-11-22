import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Brands from './components/Brands'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-black">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-blue-100">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold text-xl tracking-tight">Funnel Agency</div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#case-studies" className="hover:text-blue-700">Case studies</a>
            <a href="#work-with-us" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Work with us</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Brands />
        <div id="case-studies">
          <CaseStudies />
        </div>
        <Services />
        <CTA />
      </main>

      <footer className="border-t border-blue-100">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-black/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Funnel Agency</p>
          <a href="#work-with-us" className="text-blue-700 hover:underline">Start a project</a>
        </div>
      </footer>
    </div>
  )
}

export default App
