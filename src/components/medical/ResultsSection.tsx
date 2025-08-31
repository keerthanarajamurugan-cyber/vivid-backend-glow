import React from 'react';
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ResultsSectionProps {
  isAnalyzing: boolean;
  results: any;
  onAnalyze: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ isAnalyzing, results, onAnalyze }) => {
  if (!results && !isAnalyzing) {
    return (
      <div className="w-full max-w-4xl mx-auto text-center fade-in-up">
        <Button 
          onClick={onAnalyze}
          size="lg" 
          className="px-12 py-6 text-lg medical-gradient text-white hover:opacity-90 pulse-glow"
        >
          <Brain className="h-6 w-6 mr-3" />
          Analyze Documents
        </Button>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="w-full max-w-4xl mx-auto text-center fade-in-up">
        <div className="result-card rounded-2xl p-12">
          <div className="animate-spin h-12 w-12 mx-auto mb-6 border-4 border-primary border-t-transparent rounded-full"></div>
          <h3 className="text-xl font-semibold text-primary mb-2">Analyzing Clinical Documents</h3>
          <p className="text-muted-foreground">Processing medical data and generating insights...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto fade-in-up">
      <div className="result-card rounded-2xl p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Analysis Results</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Analysis completed in 2.3 seconds</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="medical-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <h3 className="text-lg font-semibold">Diagnosis Confidence</h3>
            </div>
            <div className="text-3xl font-bold text-primary mb-2">94.7%</div>
            <p className="text-sm text-muted-foreground">High confidence level detected</p>
          </div>

          <div className="medical-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-blue-500" />
              <h3 className="text-lg font-semibold">Risk Assessment</h3>
            </div>
            <Badge variant="secondary" className="text-sm">Moderate Risk</Badge>
            <p className="text-sm text-muted-foreground mt-2">Requires follow-up monitoring</p>
          </div>

          <div className="medical-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-orange-500" />
              <h3 className="text-lg font-semibold">Recommendations</h3>
            </div>
            <div className="text-sm text-muted-foreground">
              3 clinical recommendations identified
            </div>
          </div>
        </div>

        <div className="medical-card rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Clinical Summary</h3>
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Based on the analysis of the uploaded clinical documents, the AI system has identified 
              key patterns consistent with the patient's medical history. The diagnostic indicators 
              suggest a moderate risk profile requiring continued monitoring and potential adjustment 
              of current treatment protocols.
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
              <p className="text-sm font-medium text-primary">Key Findings:</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Biomarker levels within expected ranges</li>
                <li>• Treatment response showing positive trajectory</li>
                <li>• Recommend follow-up in 2-3 weeks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <Button variant="default" className="px-6">
            Download Report
          </Button>
          <Button variant="outline" className="px-6">
            Share Results
          </Button>
          <Button variant="ghost" onClick={onAnalyze} className="px-6">
            Analyze New Documents
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;