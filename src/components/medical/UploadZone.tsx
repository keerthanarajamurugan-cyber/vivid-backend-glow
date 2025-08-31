import React, { useState, useCallback } from 'react';
import { Upload, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface UploadZoneProps {
  onFileUpload: (files: File[]) => void;
  uploadedFiles: File[];
}

const UploadZone: React.FC<UploadZoneProps> = ({ onFileUpload, uploadedFiles }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(file => 
      file.type === 'application/pdf' || 
      file.type.startsWith('image/') ||
      file.name.endsWith('.docx') ||
      file.name.endsWith('.txt')
    );

    if (validFiles.length > 0) {
      onFileUpload(validFiles);
      toast({
        title: "Files uploaded successfully",
        description: `${validFiles.length} clinical document(s) processed`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF, image, DOCX, or text files",
        variant: "destructive",
      });
    }
  }, [onFileUpload, toast]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      onFileUpload(files);
      toast({
        title: "Files uploaded successfully",
        description: `${files.length} clinical document(s) processed`,
      });
    }
  }, [onFileUpload, toast]);

  return (
    <div className="w-full max-w-4xl mx-auto scale-in">
      <div
        className={`upload-zone rounded-2xl p-12 text-center cursor-pointer relative overflow-hidden ${
          isDragOver ? 'dragover' : ''
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <input
          id="file-input"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.docx,.txt"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <div className="relative z-10">
          <div className="mb-6">
            <Upload className="h-16 w-16 mx-auto text-primary mb-4 pulse-glow" />
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Upload Clinical Documents
            </h3>
            <p className="text-muted-foreground text-lg">
              Drag and drop your medical files here, or click to browse
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Supports PDF, Images, DOCX, and Text files
            </p>
          </div>
          
          <Button variant="default" size="lg" className="px-8">
            Select Files
          </Button>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="mt-6 fade-in-up">
          <h4 className="text-lg font-semibold mb-4 text-primary">Uploaded Files:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="medical-card rounded-lg p-4 flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <span className="flex-1 text-sm font-medium truncate">{file.name}</span>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadZone;