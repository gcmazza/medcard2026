import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Product from './components/Product';
import HowItWorks from './components/HowItWorks';
import Market from './components/Market';
import BusinessModel from './components/BusinessModel';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Product />
        <HowItWorks />
        <Market />
        <BusinessModel />
        <Roadmap />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
