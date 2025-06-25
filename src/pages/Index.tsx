import { ArrowRight, Users, FileText, Calendar, DollarSign, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Index = () => {
  return <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/7ba84437-bb36-4aac-ab98-2a302086bf5a.png" alt="Quantum Apex Legal" className="h-8 w-8" />
              <span className="text-2xl font-bold text-white">Quantum Apex Legal</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#solutions" className="text-slate-300 hover:text-white transition-colors">Solutions</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
              <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                Sign In
              </Button>
              <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Complete
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Legal Practice
            </span>
            Management Solution
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Streamline your law firm with our all-in-one platform. Case management, client communication, 
            billing, and automation tools designed specifically for legal professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 text-lg px-8 py-3">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 text-lg px-8 py-3">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 text-slate-400">
            <p>Trusted by 50,000+ legal professionals worldwide</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything Your Firm Needs</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive tools to manage every aspect of your legal practice from one integrated platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600 hover:border-amber-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Case Management</h3>
                <p className="text-slate-300">
                  Organize cases, documents, and deadlines with our intuitive case management system.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-amber-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Client Portal</h3>
                <p className="text-slate-300">
                  Secure client communication and document sharing with branded client portals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-amber-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Billing & Invoicing</h3>
                <p className="text-slate-300">
                  Automated time tracking, billing, and payment processing with trust accounting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-amber-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Calendar & Scheduling</h3>
                <p className="text-slate-300">
                  Integrated calendar with court date tracking and automated deadline calculations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-amber-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
                <p className="text-slate-300">
                  Bank-level security with SOC 2 compliance and attorney-client privilege protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-amber-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Automation</h3>
                <p className="text-slate-300">
                  Workflow automation for routine tasks, document generation, and client intake.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Built for Every Practice Area</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized solutions tailored to your specific legal practice needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-amber-400 pl-6">
                <h3 className="text-2xl font-semibold text-white mb-3">Personal Injury</h3>
                <p className="text-slate-300 mb-4">
                  Comprehensive case tracking, medical record management, and settlement calculations.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Medical record organization</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Settlement tracking</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Referral management</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-400 pl-6">
                <h3 className="text-2xl font-semibold text-white mb-3">Family Law</h3>
                <p className="text-slate-300 mb-4">
                  Sensitive case handling with secure communication and financial tracking.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Child support calculations</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Asset division tracking</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Court calendar integration</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-amber-400 pl-6">
                <h3 className="text-2xl font-semibold text-white mb-3">Corporate Law</h3>
                <p className="text-slate-300 mb-4">
                  Contract management, compliance tracking, and corporate document automation.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Contract lifecycle management</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Compliance monitoring</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Matter budgeting</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-400 pl-6">
                <h3 className="text-2xl font-semibold text-white mb-3">Criminal Defense</h3>
                <p className="text-slate-300 mb-4">
                  Case preparation tools with evidence management and court scheduling.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Evidence chain management</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Discovery organization</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Client communication logs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Legal Professionals</h2>
            <p className="text-xl text-slate-300">See what our clients say about transforming their practice</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Sarah Johnson</h4>
                    <p className="text-slate-400">Partner, Johnson & Associates</p>
                  </div>
                </div>
                <p className="text-slate-300">
                  "Quantum Apex Legal has revolutionized our practice management. We've increased efficiency by 40% and our clients love the portal."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Michael Chen</h4>
                    <p className="text-slate-400">Solo Practitioner</p>
                  </div>
                </div>
                <p className="text-slate-300">
                  "As a solo attorney, this platform gives me the tools of a large firm. The automation features save me hours every week."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    R
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Robert Martinez</h4>
                    <p className="text-slate-400">Managing Partner, Martinez Law Group</p>
                  </div>
                </div>
                <p className="text-slate-300">
                  "The reporting and analytics have given us unprecedented insight into our firm's performance. ROI was immediate."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#030c18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your firm's needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-600">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Solo</h3>
                  <div className="text-4xl font-bold text-amber-400 mb-4">$49<span className="text-lg text-slate-400">/month</span></div>
                  <p className="text-slate-300 mb-6">Perfect for solo practitioners</p>
                  <ul className="space-y-3 text-left text-slate-300 mb-8">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Up to 100 cases</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Client portal</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Time tracking & billing</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Document management</li>
                  </ul>
                  <Button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900">
                    Start Free Trial
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-amber-400 border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-amber-400 mb-4">$99<span className="text-lg text-slate-400">/month</span></div>
                  <p className="text-slate-300 mb-6">For small to medium firms</p>
                  <ul className="space-y-3 text-left text-slate-300 mb-8">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Unlimited cases</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Advanced automation</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Custom reporting</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> API integrations</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Priority support</li>
                  </ul>
                  <Button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900">
                    Start Free Trial
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-amber-400 mb-4">Custom</div>
                  <p className="text-slate-300 mb-6">For large firms and organizations</p>
                  <ul className="space-y-3 text-left text-slate-300 mb-8">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Everything in Professional</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Custom integrations</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Advanced security</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Dedicated support</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-amber-400 mr-2" /> Custom training</li>
                  </ul>
                  <Button variant="outline" className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                    Contact Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Join thousands of legal professionals who have streamlined their practice with Quantum Apex Legal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-3">
              Start Your 30-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-lg px-8 py-3">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-4 text-slate-700">No credit card required • Full access • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/lovable-uploads/7ba84437-bb36-4aac-ab98-2a302086bf5a.png" alt="Quantum Apex Legal" className="h-6 w-6" />
                <span className="text-xl font-bold text-white">Quantum Apex Legal</span>
              </div>
              <p className="text-slate-400">
                Empowering legal professionals with cutting-edge practice management technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Quantum Apex Legal Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;