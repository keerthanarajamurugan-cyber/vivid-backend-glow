import { Activity, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 medical-gradient">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3 fade-in-up">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div className="text-white">
            <h1 className="text-lg font-semibold">MedAnalytics</h1>
            <p className="text-sm text-white/80">Clinical Document Analysis</p>
          </div>
        </div>

        <nav className="flex items-center gap-4 fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            Diagnosed Patient
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Settings className="h-4 w-4" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;