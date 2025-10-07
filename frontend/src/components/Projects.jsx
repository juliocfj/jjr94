import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ExternalLink, Code2, Target, CheckCircle2, Building2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Card className="group bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:translate-y-[-8px] overflow-hidden">
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-cyan-300 text-sm font-medium">{project.subtitle}</p>
          </div>
          <Code2 className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
        </div>
        
        <div className="flex items-center gap-2 text-slate-300 text-sm">
          <Building2 className="w-3 h-3" />
          <span>{project.company}</span>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="space-y-4">
          <div>
            <h5 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
              Tecnologias Utilizadas
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary"
                  className="bg-slate-100 text-slate-700 text-xs px-2 py-1"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group border-cyan-200 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300"
              >
                Ver Detalhes
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
                  {project.title}
                </DialogTitle>
                <p className="text-cyan-600 font-medium">{project.subtitle} • {project.company}</p>
              </DialogHeader>
              
              <div className="space-y-8 pt-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Project Overview</h4>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyan-600" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Results & Impact</h4>
                  <ul className="space-y-3">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = ({ data }) => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            {data.navigation.projects}
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Projetos reais demonstrando expertise técnica, resultados mensuráveis e soluções inovadoras em infraestrutura cloud, automação e domínios de segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;