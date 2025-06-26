
import { ArrowLeft, Shield, Lock, FileCheck, Eye, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SecurityCompliance = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50 bg-[#030c18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/7ba84437-bb36-4aac-ab98-2a302086bf5a.png" alt="Quantum Apex Legal" className="h-8 w-8" />
              <span className="text-2xl font-bold text-white">Quantum Apex Legal</span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-20 w-20 text-amber-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Security & Compliance</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Protect your clients' sensitive information with enterprise-grade security and comprehensive compliance features designed for legal professionals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <Lock className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">End-to-End Encryption</h3>
                <p className="text-slate-300">Bank-level AES-256 encryption protects all data in transit and at rest, ensuring maximum security.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <FileCheck className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">SOC 2 Compliance</h3>
                <p className="text-slate-300">Certified SOC 2 Type II compliance ensures your data handling meets the highest industry standards.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Access Controls</h3>
                <p className="text-slate-300">Granular permission controls and role-based access ensure only authorized personnel can view sensitive data.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <Database className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data Backup</h3>
                <p className="text-slate-300">Automated daily backups with 99.9% uptime guarantee and disaster recovery protocols.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Trust & Security First</h2>
          <p className="text-xl text-slate-800 mb-8">Protect your practice and your clients with industry-leading security.</p>
          <Link to="/signup">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-3">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SecurityCompliance;
