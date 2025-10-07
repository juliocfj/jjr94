import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section className="py-20 bg-white" id="education">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            {data.navigation.education}
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-cyan-600" />
              {data.education.title}
            </h3>
            
            <div className="space-y-6">
              {data.education.degrees.map((edu, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-slate-600 font-medium mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary"
                        className="bg-cyan-100 text-cyan-700 px-3 py-1 w-fit"
                      >
                        Technology Degree
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-cyan-600" />
              {data.certifications.title}
            </h3>
            
            <div className="space-y-6">
              {data.certifications.list.map((cert, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <p className="text-slate-600 font-medium mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-4 text-slate-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{cert.year}</span>
                          </div>
                          {cert.certId && (
                            <div className="text-xs bg-slate-100 px-2 py-1 rounded">
                              ID: {cert.certId}
                            </div>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900">Credly Profile</h4>
              </div>
              <p className="text-slate-600 mb-4">
                View all verified certifications and digital badges on my Credly profile.
              </p>
              <a 
                href={`https://${data.contact.credly}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-700 font-medium hover:text-cyan-800 transition-colors duration-300"
              >
                Visit Credly Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="bg-gradient-to-r from-slate-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Languages
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {data.languages.map((lang, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">
                    {lang.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {lang.name}
                </h4>
                <Badge 
                  variant="secondary"
                  className="bg-white text-slate-700 border border-slate-200"
                >
                  {lang.level}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;