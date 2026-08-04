import React, { useEffect, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/Navbar/Navbar';
import { Loader } from './components/Loader/Loader';

// Lazy load heavy sections to boost initial load performance score to 95%+
const Hero = lazy(() => import('./components/Hero/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('./components/About/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/Skills/Skills').then(m => ({ default: m.Skills })));
const Services = lazy(() => import('./components/Services/Services').then(m => ({ default: m.Services })));
const Projects = lazy(() => import('./components/Projects/Projects').then(m => ({ default: m.Projects })));
const Contact = lazy(() => import('./components/Contact/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}