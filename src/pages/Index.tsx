import React, { useState } from 'react';
import Header from '@/components/medical/Header';
import UploadZone from '@/components/medical/UploadZone';
import ResultsSection from '@/components/medical/ResultsSection';

const Index = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileUpload = (files: File[]) => {
    setUploadedFiles(prev => [...prev, ...files]);
    setResults(null); // Reset results when new files are uploaded
  };

  const handleAnalyze = () => {
    if (uploadedFiles.length === 0) return;
    
    setIsAnalyzing(true);
    setResults(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults({
        confidence: 94.7,
        riskLevel: 'moderate',
        recommendations: 3,
        summary: 'Analysis complete'
      });
    }, 3000);
  };

  const handleNewAnalysis = () => {
    setUploadedFiles([]);
    setResults(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center fade-in-up">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Advanced Clinical Document Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leverage AI-powered insights to analyze medical documents, extract key information, 
              and generate comprehensive clinical summaries with high accuracy and reliability.
            </p>
          </div>

          {/* Upload Zone */}
          <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <UploadZone 
              onFileUpload={handleFileUpload}
              uploadedFiles={uploadedFiles}
            />
          </div>

          {/* Results or Analysis Button */}
          <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
            <ResultsSection
              isAnalyzing={isAnalyzing}
              results={results}
              onAnalyze={uploadedFiles.length > 0 ? handleAnalyze : handleNewAnalysis}
            />
          </div>

          {/* Features Grid */}
          {!results && !isAnalyzing && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up" style={{ animationDelay: "0.9s" }}>
              <div className="medical-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 medical-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced machine learning algorithms for accurate medical document interpretation
                </p>
              </div>
              
              <div className="medical-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 medical-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Fast document processing with instant results and comprehensive insights
                </p>
              </div>
              
              <div className="medical-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 medical-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🔒</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure & Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  HIPAA-compliant processing with enterprise-grade security standards
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
