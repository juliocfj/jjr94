import React from 'react';
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Cloud, 
  Cog, 
  Shield, 
  BarChart3, 
  Code2, 
  Monitor,
  Server,
  Zap,
  Lock,
  TrendingUp,
  Terminal,
  Activity
} from 'lucide-react';

const skillIcons = {
  "Cloud & Infrastructure": Cloud,
  "Cloud & Infrastruttura": Cloud,
  "Automation & DevOps": Cog,
  "Automação & DevOps": Cog,
  "Automazione & DevOps": Cog,
  "Security": Shield,
  "Segurança": Shield,
  "Sicurezza": Shield,
  "Power Platform & M365": BarChart3,
  "Power Platform & Microsoft 365": BarChart3,
  "Languages & Scripting": Code2,
  "Linguagens & Scripting": Code2,
  "Linguaggi & Scripting": Code2,
  "Monitoring": Monitor,
  "Monitoramento": Monitor,
  "Monitoraggio": Monitor
};

const getSkillIcon = (category) => {
  const IconComponent = skillIcons[category] || Server;
  return IconComponent;
};

const Skills = ({ data }) => {
  return (
    <section className="py-20 bg-slate-50" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            {data.navigation.skills}
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Expertise técnica em plataformas cloud, ferramentas de automação e gerenciamento moderno de infraestrutura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(data.skills).map(([category, skills], index) => {
            const IconComponent = getSkillIcon(category);
            
            return (
              <Card 
                key={category} 
                className="group bg-white border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-y-[-4px] overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 hover:bg-cyan-100 hover:text-cyan-700 transition-colors duration-300 cursor-default text-sm px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;