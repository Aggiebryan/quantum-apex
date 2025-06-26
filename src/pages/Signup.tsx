
import { useState } from "react";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    lawFirm: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    role: "",
    firmSize: "",
    betaTester: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you as soon as our software is ready for beta testing.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50 bg-[#030c18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/7ba84437-bb36-4aac-ab98-2a302086bf5a.png" alt="Quantum Apex Legal" className="h-8 w-8" />
              <span className="text-2xl font-bold text-white">Quantum Apex Legal Systems</span>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <AlertCircle className="h-16 w-16 text-amber-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Software In Development</h1>
          <p className="text-xl text-slate-300 mb-8">
            Quantum Apex is currently in development. Join our waitlist to be notified when we launch!
          </p>
        </div>

        <Card className="bg-slate-800 border-slate-600">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="lawFirm" className="text-white">Law Firm Name *</Label>
                <Input
                  id="lawFirm"
                  value={formData.lawFirm}
                  onChange={(e) => handleInputChange("lawFirm", e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-white">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="city" className="text-white">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-white">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="zipcode" className="text-white">Zip Code</Label>
                  <Input
                    id="zipcode"
                    value={formData.zipcode}
                    onChange={(e) => handleInputChange("zipcode", e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>

              <div>
                <Label className="text-white mb-3 block">Role *</Label>
                <select
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-md px-3 py-2"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="attorney">Attorney</option>
                  <option value="paralegal">Paralegal</option>
                  <option value="it">IT</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label className="text-white mb-3 block">Firm Size *</Label>
                <select
                  value={formData.firmSize}
                  onChange={(e) => handleInputChange("firmSize", e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-md px-3 py-2"
                  required
                >
                  <option value="">Select firm size</option>
                  <option value="solo">Solo</option>
                  <option value="2-5">2-5 Attorneys</option>
                  <option value="6-10">6-10 Attorneys</option>
                  <option value="10-25">10-25 Attorneys</option>
                  <option value="26+">26+ Attorneys</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="betaTester"
                  checked={formData.betaTester}
                  onCheckedChange={(checked) => handleInputChange("betaTester", checked as boolean)}
                />
                <Label htmlFor="betaTester" className="text-white">
                  I would be interested in being a beta tester when the software is ready
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 text-lg py-3"
              >
                Join Waitlist
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
