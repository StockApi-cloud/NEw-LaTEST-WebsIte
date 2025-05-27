// src/App.js
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './Components/Navbar';
import VideoSection from './Components/VideoSection';
import Founder from './Components/Founder';
import OurServices from './Components/OurServices';
import StudentReview from './Components/StudentReview';
import About from './Components/About'; // Import the About component
import ContactUsButton from './Components/ContactUsButton'; // Import the ContactUsButton component
import './App.css';
import FAQ from './Components/FAQ';
import BlogCards from './Components/BlogCards';
import ContactUs from './Components/ContactUs';
import Blog from './Components/blog1';

import Blog3 from './Components/blog3';
import Blog4 from './Components/blog4';
import Blog5 from './Components/blog5';
import Blog6 from './Components/blog6';
import Blog7 from './Components/blog7';
import Blog8 from './Components/blog8';
import Blog9 from './Components/blog9';
function App() {
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar servicesRef={servicesRef} testimonialsRef={testimonialsRef} />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <VideoSection />
              <OurServices/>
              <Founder />
              <StudentReview />
              
            </>
          } />
          <Route path="/about" element={<About/>} /> 
          <Route path="/faq" element={<FAQ/>} /> 
          <Route path="/blog" element={<BlogCards/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/blog1" element={< Blog/>} />
         
          <Route path="/blog3" element={< Blog3/>} />
          <Route path="/blog4" element={< Blog4/>} />
          <Route path="/blog5" element={< Blog5/>} />
          <Route path="/blog6" element={< Blog6/>} />
          <Route path="/blog7" element={< Blog7/>} />
          <Route path="/blog8" element={< Blog8/>} />
          <Route path="/blog9" element={< Blog9/>} />
        </Routes>


        {/* Contact Us button visible on every page */}
        <ContactUsButton />
       
      </div>
    </Router>
  );
}

export default App;
