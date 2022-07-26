import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Portfolio from './components/protfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';
import './app.scss';
import { useState } from "react";
import Menu from './components/menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
