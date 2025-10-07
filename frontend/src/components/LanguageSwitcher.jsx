import React from 'react';
import { Button } from "./ui/button";

const LanguageSwitcher = ({ currentLanguage, onLanguageChange, languages }) => {
  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={currentLanguage === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => onLanguageChange(lang.code)}
          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
            currentLanguage === lang.code 
              ? "bg-cyan-600 text-white border-cyan-600 shadow-lg" 
              : "border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500"
          }`}
        >
          <img 
            src={lang.flag} 
            alt={`${lang.name} flag`}
            className="w-5 h-4 object-cover rounded-sm shadow-sm"
          />
          <span className="hidden sm:inline">{lang.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;