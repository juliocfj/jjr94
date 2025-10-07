import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar, ChevronRight } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section className="py-20 bg-slate-50" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            {data.navigation.experience}
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-300 hidden md:block"></div>

          <div className="space-y-12">
            {data.experience.map((job, index) => (
              <div key={job.id} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="md:ml-16">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-y-[-4px] bg-white">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl font-semibold text-slate-900 mb-2">
                            {job.title}
                          </CardTitle>
                          <div className="flex items-center gap-3 text-slate-600">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{job.period}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Badge 
                          variant="secondary"
                          className="bg-cyan-100 text-cyan-700 px-3 py-1 w-fit"
                        >
                          {index === 0 ? (data.ui?.current || "Current") : (data.ui?.previous || "Previous")}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-slate-900 text-sm uppercase tracking-wide">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-600">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-cyan-500 flex-shrink-0" />
                              <span className="leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;