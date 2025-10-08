import React from 'react';
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';

const Hero = ({ data, onContactClick }) => {
  const profileImageUrl = "https://customer-assets.emergentagent.com/job_julio-devops/artifacts/fxr1vguv_Gemini_Generated_Image_bxk34abxk34abxk3.png";

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = data.cv.url;
    link.download = data.cv.filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Content */}
        <div className="space-y-8 animate-fadeInLeft">
          <div className="space-y-4">
            <Badge 
              variant="secondary" 
              className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-3 py-1"
            >
              <MapPin className="w-3 h-3 mr-2" />
              São José dos Campos, SP
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight tracking-tight">
              {data.hero.name}
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-normal text-cyan-400">
                {data.hero.title}
              </h2>
              <p className="text-xl lg:text-2xl text-slate-300 font-light">
                {data.hero.subtitle}
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {data.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={onContactClick}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 group"
            >
              {data.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadCV}
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8 text-slate-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>juliovdks@gmail.com</span>
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <span className="text-sm">Qualquer Fuso Horário Disponível</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fadeInRight">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-1">
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900">
                <img 
                  src={profileImageUrl}
                  alt={data.hero.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;