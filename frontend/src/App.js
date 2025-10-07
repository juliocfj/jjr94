import React, { useState, useRef } from "react";
import "./App.css";
import { Toaster } from "./components/ui/toaster";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

// Import data
import { portfolioData, languages } from "./data/mockData";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const contactRef = useRef(null);

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentData = portfolioData[currentLanguage];
  
  // Debug: check if data is loading correctly
  if (!currentData) {
    return <div>Loading portfolio data...</div>;
  }

  return (
    <div className="App">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        languages={languages}
        data={currentData}
      />
      
      <main>
        <Hero 
          data={currentData}
          onContactClick={handleContactClick}
        />
        
        <div id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8">
              {currentData.about.title}
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              {currentData.about.description}
            </p>
          </div>
        </div>
        
        <Experience data={currentData} />
        <Projects data={currentData} />
        <Skills data={currentData} />
        <Education data={currentData} />
        <Contact data={currentData} />
      </main>
      
      <Toaster />
    </div>
  );
}

export default App;