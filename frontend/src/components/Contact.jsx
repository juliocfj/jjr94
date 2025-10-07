import React from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Award, 
  Globe, 
  Clock,
  ExternalLink,
  Phone,
  MessageCircle
} from 'lucide-react';

const Contact = ({ data }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${data.contact.email}`;
  };

  const handleLinkedInClick = () => {
    window.open(`https://${data.contact.linkedin}`, '_blank', 'noopener noreferrer');
  };

  const handleCredlyClick = () => {
    window.open(`https://${data.contact.credly}`, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4">
            {data.navigation.contact}
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate? Let's discuss how my technical expertise can help drive your organization's IT initiatives forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-slate-300 text-sm">Email</p>
                      <p className="text-white font-medium">{data.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-slate-300 text-sm">Location</p>
                      <p className="text-white font-medium">{data.contact.location}</p>
                      <p className="text-slate-400 text-sm mt-1">{data.contact.availability}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-slate-300 text-sm">Availability</p>
                      <p className="text-white font-medium">Remote & International Ready</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                          Available Now
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          US Hours OK
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Links */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  Professional Profiles
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start bg-slate-700/30 border-slate-600 text-white hover:bg-slate-600/50 hover:border-slate-500"
                    onClick={handleLinkedInClick}
                  >
                    <Linkedin className="w-5 h-5 mr-3 text-blue-400" />
                    <div className="text-left flex-1">
                      <p className="font-medium">LinkedIn Profile</p>
                      <p className="text-sm text-slate-400">{data.contact.linkedin}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </Button>

                  <Button 
                    variant="outline"
                    className="w-full justify-start bg-slate-700/30 border-slate-600 text-white hover:bg-slate-600/50 hover:border-slate-500"
                    onClick={handleCredlyClick}
                  >
                    <Award className="w-5 h-5 mr-3 text-orange-400" />
                    <div className="text-left flex-1">
                      <p className="font-medium">Credly Certifications</p>
                      <p className="text-sm text-slate-400">{data.contact.credly}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats & CTA */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Quick Overview
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">7+</div>
                    <div className="text-slate-300 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
                    <div className="text-slate-300 text-sm">Users Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                    <div className="text-slate-300 text-sm">Uptime Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                    <div className="text-slate-300 text-sm">Process Improvement</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Let's Work Together
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Whether you need infrastructure automation, cloud migration, security implementation, or technical leadership, I'm here to help transform your IT operations.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition-all duration-300"
                    onClick={handleEmailClick}
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Send Email
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300"
                    onClick={handleLinkedInClick}
                  >
                    <Linkedin className="mr-2 w-5 h-5" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-slate-700 pt-12">
          <p className="text-slate-400 mb-4">
            © 2025 Julio Cesar de Faria Junior. Built with modern web technologies.
          </p>
          <p className="text-slate-500 text-sm">
            Available for remote collaboration • International projects welcome
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;