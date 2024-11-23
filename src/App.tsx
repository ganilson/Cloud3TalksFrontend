import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventCalendar } from './components/EventCalendar';
import { WebinarSection } from './components/WebinarSection';
import { DonationSection } from './components/DonationSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <EventCalendar />
              <WebinarSection />
              <DonationSection />
            </>
          } />
          <Route path="/events" element={<EventCalendar />} />
          <Route path="/webinars" element={<WebinarSection />} />
          <Route path="/donate" element={<DonationSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;