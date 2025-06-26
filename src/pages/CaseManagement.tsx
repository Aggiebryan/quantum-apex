
import { ArrowLeft, FileText, Folder, Calendar, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CaseManagement = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-20 w-20 text-amber-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Case Management</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Organize, track, and manage all your cases with our comprehensive case management system. 
            From intake to resolution, keep everything organized and accessible.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <Folder className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Case Organization</h3>
                <p className="text-slate-300">Organize cases by practice area, status, priority, and custom tags for easy retrieval and management.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Deadline Tracking</h3>
                <p className="text-slate-300">Never miss important deadlines with automated reminders and calendar integration for all case milestones.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-slate-300">Collaborate seamlessly with your team through shared case notes, task assignments, and progress tracking.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-white mb-2">Create Case</h3>
                <p className="text-slate-300">Input case details, client information, and relevant documents to create a comprehensive case file.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-white mb-2">Track Progress</h3>
                <p className="text-slate-300">Monitor case status, deadlines, and milestones with our intuitive dashboard and timeline view.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-white mb-2">Manage Documents</h3>
                <p className="text-slate-300">Store, organize, and share case documents securely with version control and access permissions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Streamline Your Case Management?</h2>
          <p className="text-xl text-slate-800 mb-8">Join thousands of legal professionals who trust our platform.</p>
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

export default CaseManagement;
