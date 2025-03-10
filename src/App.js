import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Events from './components/Events'
import Category from './components/Category'
import About from './components/About'

function App() {
  return (
    // <div>
    //     <Navbar />
    //     <Hero />
    //     <HeadlineCards />
    //     <Events />
    //     <Category />
    // </div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HeadlineCards />
            {/* <Category /> */}
          </>
        } />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
