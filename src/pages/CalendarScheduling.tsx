
import { ArrowLeft, Calendar, Clock, Users, Bell, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CalendarScheduling = () => {
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
          <Calendar className="h-20 w-20 text-amber-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">Calendar & Scheduling</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Never miss a court date or client meeting with our integrated calendar system and automated deadline tracking.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <CalendarDays className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Court Date Tracking</h3>
                <p className="text-slate-300">Automatically track court dates and deadlines with integration to court systems and legal calendars.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Appointment Scheduling</h3>
                <p className="text-slate-300">Allow clients to book appointments online with automated confirmation and reminder emails.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <Bell className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Deadline Reminders</h3>
                <p className="text-slate-300">Automated deadline calculations and reminders ensure you never miss critical case milestones.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Time Blocking</h3>
                <p className="text-slate-300">Optimize your schedule with intelligent time blocking and availability management features.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-400 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Master Your Schedule</h2>
          <p className="text-xl text-slate-800 mb-8">Stay organized and never miss an important date again.</p>
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

export default CalendarScheduling;
