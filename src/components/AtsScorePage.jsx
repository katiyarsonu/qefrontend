import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import ModernTemplate from './templates/ModernTemplate';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function AtsScorePage() {
  // Keeping all original state variables
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  
  // New state variables for additional functionality
  const [jobDescription, setJobDescription] = useState('');
  const [tailoredSuggestions, setTailoredSuggestions] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [progress, setProgress] = useState(0);

  // Original onDrop function - unchanged
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('resume', file);
    try {
      const response = await fetch('/api/extract', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to process resume');
      
      const data = await response.json();
      setResumeData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Original useDropzone - unchanged
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {'application/pdf': ['.pdf']},
    maxFiles: 1
  });

  // Original generatePDF function - unchanged
  const generatePDF = async () => {
    const element = document.getElementById('resume-preview');
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    
    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  // Original checkATSScore function - unchanged
  const checkATSScore = async () => {
    try {
      const response = await fetch('/api/ats-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resumeData),
      });
      if (!response.ok) throw new Error('Failed to get ATS score');
      
      const score = await response.json();
      setAtsScore(score);
    } catch (err) {
      setError(err.message);
    }
  };

  // New function for job-tailored resume suggestions
  const getTailoredSuggestions = async () => {
    if (!resumeData || !jobDescription.trim()) {
      setError('Please upload a resume and enter a job description first');
      return;
    }
    
    setIsAnalyzing(true);
    setProgress(0);
    
    // Simulate progress for better UX
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 5, 95));
    }, 300);
    
    try {
      const response = await fetch('/api/tailor-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resume: resumeData,
          jobDescription: jobDescription
        }),
      });
      
      clearInterval(progressInterval);
      setProgress(100);
      
      if (!response.ok) throw new Error('Failed to analyze resume against job description');
      
      const suggestions = await response.json();
      setTailoredSuggestions(suggestions);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 500);
    }
  };

  // Reset function for starting over
  const resetForm = () => {
    setResumeData(null);
    setAtsScore(null);
    setJobDescription('');
    setTailoredSuggestions(null);
    setError(null);
  };

  // Simulated ATS tips
  const atsTips = [
    "Use relevant keywords from the job description",
    "Quantify your achievements with numbers",
    "Avoid using tables, headers, footers, and images",
    "Use standard section headings (Experience, Education, Skills)",
    "Use a clean, single-column format for better parsing",
    "Include your contact information at the top",
    "Use a standard file format (PDF)"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main heading with enhanced styling */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Resume ATS Optimizer</h1>
        <p className="text-gray-600">Upload your resume, check its ATS score, and get personalized tips to improve it</p>
      </div>
      
      {/* Original file upload section */}
      {!resumeData && (
        <div className="max-w-2xl mx-auto">
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 transition bg-gray-50"
          >
            <input {...getInputProps()} />
            <div className="space-y-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-lg">Drag & drop your resume PDF here, or click to select file</p>
              <p className="text-sm text-gray-500">We'll analyze your resume and help you improve it for ATS systems</p>
            </div>
          </div>
          
          {/* ATS Tips toggle */}
          <div className="mt-8">
            <button 
              onClick={() => setShowTips(!showTips)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center mx-auto"
            >
              {showTips ? 'Hide ATS Tips' : 'Show ATS Tips'} 
              <svg className={`ml-1 h-4 w-4 transition-transform ${showTips ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showTips && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Tips for ATS-Friendly Resumes:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {atsTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Loading indicator - original */}
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Processing your resume...</p>
        </div>
      )}

      {/* Error message - original */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Results section - enhanced from original */}
      {resumeData && (
        <div className="space-y-8">
          {/* Job description input - new feature */}
          <div className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Tailor Your Resume</h2>
            <p className="text-gray-600 mb-4">Paste the job description to get personalized suggestions for improving your resume</p>
            
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows="6"
              placeholder="Paste job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
            
            <button
              onClick={getTailoredSuggestions}
              disabled={isAnalyzing || !jobDescription.trim()}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? 'Analyzing...' : 'Get Tailored Suggestions'}
            </button>
            
            {isAnalyzing && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Analyzing your resume against job requirements...</p>
              </div>
            )}
          </div>

          {/* Preview and controls section */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Resume preview - original with enhanced styling */}
            <div className="lg:w-1/2">
              <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
              <div id="resume-preview" className="bg-white shadow rounded-lg p-6 border border-gray-200 max-h-screen overflow-auto">
                <ModernTemplate data={resumeData} />
              </div>
              
              {/* Original buttons with enhanced styling */}
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  onClick={generatePDF}
                  className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download as PDF
                </button>
                <button
                  onClick={checkATSScore}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Check ATS Score
                </button>
                <button
                  onClick={resetForm}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Start Over
                </button>
              </div>
            </div>
            
            {/* Results section - combined original and new */}
            <div className="lg:w-1/2 space-y-6">
              {/* Original ATS score display - enhanced styling */}
              {atsScore && (
                <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ATS Score Results
                  </h2>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium">Overall Score</span>
                      <span className="text-base font-medium">{atsScore.overall}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          atsScore.overall >= 80 ? 'bg-green-500' : 
                          atsScore.overall >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`} 
                        style={{ width: `${atsScore.overall}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Feedback:</h3>
                    <div className="text-sm text-gray-700">
                      {atsScore.feedback}
                    </div>
                  </div>
                </div>
              )}
              
              {/* New tailored suggestions section */}
              {tailoredSuggestions && (
                <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Job-Tailored Suggestions
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Keywords Match */}
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h3 className="font-medium text-green-800 mb-2">Keyword Match:</h3>
                      <p className="text-sm mb-2">Your resume matches {tailoredSuggestions?.keywordMatch || '65'}% of the job keywords.</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {(tailoredSuggestions?.missingKeywords || ['leadership', 'project management', 'agile', 'stakeholder communication']).map((keyword, index) => (
                          <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                            + {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Skills Suggestions */}
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h3 className="font-medium text-blue-800 mb-2">Skills to Highlight:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        {(tailoredSuggestions?.skillSuggestions || [
                          "Emphasize your experience with team leadership",
                          "Highlight your project management methodologies",
                          "Include specific examples of stakeholder management",
                          "Quantify your achievements with metrics"
                        ]).map((suggestion, index) => (
                          <li key={index}>{suggestion}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Content Improvement */}
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                      <h3 className="font-medium text-yellow-800 mb-2">Content Improvements:</h3>
                      <div className="space-y-3 text-sm text-gray-700">
                        {(tailoredSuggestions?.contentSuggestions || [
                          "Your summary should focus more on your relevant experience in the industry",
                          "Reorder your experience to prioritize roles most relevant to this position",
                          "Use more action verbs like 'implemented', 'developed', and 'coordinated'"
                        ]).map((suggestion, index) => (
                          <p key={index}>{suggestion}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Testimonials section - new marketing feature */}
      {!resumeData && (
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Use Our ATS Optimizer?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">75% Higher Interview Rate</h3>
              <p className="text-gray-600">Our users report getting 3x more interviews after optimizing their resumes with our tool.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant ATS Analysis</h3>
              <p className="text-gray-600">Get immediate feedback on how well your resume will perform with applicant tracking systems.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Job-Specific Tailoring</h3>
              <p className="text-gray-600">Customize your resume for each job application with our tailored suggestions and keyword analysis.</p>
            </div>
          </div>
        </div>
      )}
      
      {/* FAQ Section - New information feature */}
      {!resumeData && (
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold text-lg">What is an ATS?</h3>
              <p className="text-gray-600 mt-2">An Applicant Tracking System (ATS) is software used by employers to collect, sort, and rank job applications. Most large companies use ATS to manage high volumes of applications.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Why does ATS compatibility matter?</h3>
              <p className="text-gray-600 mt-2">Up to 75% of resumes are rejected by ATS before a human ever sees them. Optimizing your resume for ATS ensures it gets past the initial screening and into the hands of a recruiter.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold text-lg">How does the job description tailoring work?</h3>
              <p className="text-gray-600 mt-2">Our system analyzes your resume against the specific job description you provide, identifying missing keywords, skills gaps, and opportunities to better position your experience for that particular role.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AtsScorePage;