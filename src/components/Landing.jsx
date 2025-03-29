
// // import { Link } from 'react-router-dom'

// // function Landing() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
// //       <div className="text-center text-white p-8">
// //         <h1 className="text-5xl font-bold mb-6">Resume Builder Pro</h1>
// //         <p className="text-xl mb-8">Create professional resumes in minutes</p>
// //         <div className="space-x-4">
// //           <Link 
// //             to="/login" 
// //             className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
// //           >
// //             Login
// //           </Link>
// //           <Link 
// //             to="/signup" 
// //             className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
// //           >
// //             Sign Up
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Landing


// //new code 

// // import { Link } from "react-router-dom"

// // export default function Landing() {
// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-4xl mx-auto text-center">
// //         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Build Your Professional Resume</h1>
// //         <p className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto">
// //           Create standout resumes in minutes that help you land your dream job
// //         </p>

// //         <div className="space-x-4">
// //           <Link
// //             to="/login"
// //             className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
// //           >
// //             Login
// //           </Link>
// //           <Link
// //             to="/signup"
// //             className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
// //           >
// //             Sign Up
// //           </Link>
// //         </div>

// //         <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
// //             <div className="flex flex-col items-center md:items-start">
// //               <div className="bg-blue-500 p-3 rounded-full mb-4">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
// //                 </svg>
// //               </div>
// //               <h3 className="text-lg font-semibold mb-2">Easy to Create</h3>
// //               <p className="text-sm text-blue-100">
// //                 Simple step-by-step process to build professional resumes in minutes
// //               </p>
// //             </div>
// //             <div className="flex flex-col items-center md:items-start">
// //               <div className="bg-blue-500 p-3 rounded-full mb-4">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
// //                   />
// //                 </svg>
// //               </div>
// //               <h3 className="text-lg font-semibold mb-2">Professional Templates</h3>
// //               <p className="text-sm text-blue-100">Choose from dozens of ATS-friendly templates designed by experts</p>
// //             </div>
// //             <div className="flex flex-col items-center md:items-start">
// //               <div className="bg-blue-500 p-3 rounded-full mb-4">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
// //                   />
// //                 </svg>
// //               </div>
// //               <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
// //               <p className="text-sm text-blue-100">
// //                 Our users report 2x more interview callbacks with our resume formats
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mt-16 text-center">
// //         <p className="text-sm opacity-75">Trusted by over 100,000 job seekers worldwide</p>
// //         <div className="flex flex-wrap justify-center gap-8 mt-4">
// //           <div className="h-8 opacity-70">Company Logo 1</div>
// //           <div className="h-8 opacity-70">Company Logo 2</div>
// //           <div className="h-8 opacity-70">Company Logo 3</div>
// //           <div className="h-8 opacity-70">Company Logo 4</div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }



// import { Link } from "react-router-dom"
// import { FileTextIcon as DocumentText, CheckCircle, BarChartIcon as ChartBar } from "lucide-react"

// export default function Landing() {
//   return (
//     <div className="min-h-screen flex flex-col bg-white text-gray-800">
//       {/* Header/Navigation */}
//       <header className="border-b border-gray-100 py-4 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center">
//             <span className="text-2xl font-bold flex items-center">
//               Quick
//               <span className="text-[#00A699]">Employe</span>
//               <span className="text-[#00A699] ml-1">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="4" y="4" width="16" height="16" rx="2" fill="#00A699" />
//                   <path
//                     d="M9 12L11 14L15 10"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </span>
//             </span>
//           </div>

//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#features" className="text-gray-600 hover:text-[#00A699] transition-colors">
//               Features
//             </a>
//             <a href="#templates" className="text-gray-600 hover:text-[#00A699] transition-colors">
//               Templates
//             </a>
//             <a href="#pricing" className="text-gray-600 hover:text-[#00A699] transition-colors">
//               Pricing
//             </a>
//           </nav>

//           <div className="space-x-4">
//             <Link
//               to="/login"
//               className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-[#00A699] to-[#008C80] py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="max-w-3xl mx-auto text-center text-white">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//               Better Resume.
//               <br />
//               Faster Search. More Offers.
//             </h1>
//             <p className="text-xl md:text-2xl mb-10 opacity-90">
//               Simplify your job search and land your next position sooner with our all-in-one suite of tools.
//             </p>

//             <div className="space-x-4">
//               <Link
//                 to="/login"
//                 className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-6 md:px-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">The most effective strategy for your job search</h2>
//             <p className="text-xl text-gray-600">Loved by over 1.5 million members</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
//               <div className="w-12 h-12 bg-[#00A699]/10 rounded-lg flex items-center justify-center mb-6">
//                 <DocumentText className="w-6 h-6 text-[#00A699]" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">AI Resume Builder</h3>
//               <p className="text-gray-600">
//                 Create standout resumes that help you land interviews with our AI-powered tools.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
//               <div className="w-12 h-12 bg-[#00A699]/10 rounded-lg flex items-center justify-center mb-6">
//                 <CheckCircle className="w-6 h-6 text-[#00A699]" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">ATS Score Checker</h3>
//               <p className="text-gray-600">
//                 Stay organized with our application tracking system. Never miss a follow-up again.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
//               <div className="w-12 h-12 bg-[#00A699]/10 rounded-lg flex items-center justify-center mb-6">
//                 <ChartBar className="w-6 h-6 text-[#00A699]" />
//               </div>
//               <h3 className="text-xl font-bold mb-3">Keyword Optimization</h3>
//               <p className="text-gray-600">
//                 Use the right keywords from job descriptions to highlight your qualifications.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className="py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-[#00A699] text-white p-8 md:p-12 rounded-lg">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-3/4 mb-8 md:mb-0 md:pr-8">
//                 <p className="text-xl md:text-2xl mb-6">
//                   "This has been really helpful, in application and my mental peace...mainly with the tedium of
//                   submitting and following up job applications. Think of this as a contact manager, CRM, resume-building
//                   tool, and cover letter generator all in one place."
//                 </p>
//                 <div>
//                   <p className="font-bold">Gretchen Burgholzer</p>
//                   <p className="text-white/80">Customer Success Manager</p>
//                 </div>
//               </div>
//               <div className="md:w-1/4 flex justify-center">
//                 <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
//                   <span className="text-3xl">⭐⭐⭐⭐⭐</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 md:px-12 bg-yellow-400">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//           <div className="md:w-1/2 mb-10 md:mb-0">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Create a free Account & Set Up Goals</h2>
//             <p className="text-xl">
//               Use the right keywords from job descriptions to highlight your qualifications on your resume.
//             </p>
//           </div>
//           <div className="md:w-1/2 flex justify-center md:justify-end">
//             <div className="space-x-4">
//               <Link
//                 to="/login"
//                 className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Steps Section */}
//       <section className="py-20 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-wrap justify-between">
//             <div className="w-full md:w-1/4 mb-10 md:mb-0 flex flex-col items-center text-center">
//               <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 text-xl font-bold">
//                 1
//               </div>
//               <h3 className="text-xl font-bold">Sign Up!</h3>
//             </div>
//             <div className="w-full md:w-1/4 mb-10 md:mb-0 flex flex-col items-center text-center">
//               <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 text-xl font-bold">
//                 2
//               </div>
//               <h3 className="text-xl font-bold">Create</h3>
//             </div>
//             <div className="w-full md:w-1/4 mb-10 md:mb-0 flex flex-col items-center text-center">
//               <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 text-xl font-bold">
//                 3
//               </div>
//               <h3 className="text-xl font-bold">Apply</h3>
//             </div>
//             <div className="w-full md:w-1/4 flex flex-col items-center text-center">
//               <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 text-xl font-bold">
//                 4
//               </div>
//               <h3 className="text-xl font-bold">Grow</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-50 py-12 px-6 md:px-12 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <span className="text-xl font-bold flex items-center">
//                 resume
//                 <span className="text-[#00A699]">builder</span>
//                 <span className="text-[#00A699] ml-1">
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="4" y="4" width="16" height="16" rx="2" fill="#00A699" />
//                     <path
//                       d="M9 12L11 14L15 10"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </span>
//             </div>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-600 hover:text-[#00A699]">
//                 Terms
//               </a>
//               <a href="#" className="text-gray-600 hover:text-[#00A699]">
//                 Privacy
//               </a>
//               <a href="#" className="text-gray-600 hover:text-[#00A699]">
//                 Contact
//               </a>
//             </div>
//           </div>
//           <div className="mt-8 text-center text-gray-500 text-sm">
//             © {new Date().getFullYear()} Resume Builder. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }



// new 


import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { 
  FileTextIcon as DocumentText, 
  CheckCircle, 
  BarChartIcon as ChartBar, 
  Menu, 
  X, 
  ArrowRight, 
  Download, 
  Clock, 
  Star, 
  User,
  FileText,
  Briefcase,
  Award,
  Mail,
  Phone,
  Globe,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react"

export default function Landing() {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State for featured templates
  const [featuredTemplates, setFeaturedTemplates] = useState([
    { id: 1, name: "Professional", color: "#00A699", downloads: "12.5k" },
    { id: 2, name: "Modern", color: "#2563EB", downloads: "9.8k" },
    { id: 3, name: "Creative", color: "#8B5CF6", downloads: "7.2k" },
  ]);
  
  // State for resume statistics (demonstration purpose)
  const [stats, setStats] = useState({
    resumes: 0,
    interviews: 0,
    offers: 0
  });

  // State for FAQ expansion
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // NEW: State for dynamic header background on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Animation for statistics
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => {
        return {
          resumes: prevStats.resumes < 1500000 ? prevStats.resumes + 5000 : 1500000,
          interviews: prevStats.interviews < 350000 ? prevStats.interviews + 1000 : 350000,
          offers: prevStats.offers < 220000 ? prevStats.offers + 500 : 220000
        };
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // NEW: Effect for header scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  // FAQ data
  const faqItems = [
    {
      question: "How do I create my first resume?",
      answer: "Sign up for a free account, select a template that matches your style, and follow our guided process to fill in your details. Our AI will help you write compelling descriptions of your experience and skills."
    },
    {
      question: "What makes a resume ATS-friendly?",
      answer: "ATS-friendly resumes use standard section headings, include relevant keywords from the job description, avoid complex formatting and tables, and use common fonts. All our templates are designed to pass through Applicant Tracking Systems successfully."
    },
    {
      question: "Can I create multiple versions of my resume?",
      answer: "Yes! With our Professional plan, you can create unlimited resumes tailored to different job positions. Even with our free Basic plan, you can create one resume and make edits to customize it for different applications."
    },
    {
      question: "How do I know if my resume is optimized for a specific job?",
      answer: "Our ATS Score Checker analyzes your resume against the job description and provides a compatibility score along with suggestions for improvement. This helps you tailor your resume to increase your chances of getting past automated screening systems."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription anytime from your account settings. You'll continue to have access to all features until the end of your billing period."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header/Navigation */}
      <header className={`border-b border-gray-100 py-4 px-6 md:px-12 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold flex items-center">
              Quick
              <span className="text-[#00A699]">Employe</span>
              <span className="text-[#00A699] ml-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#00A699" />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#00A699] transition-colors">
              Features
            </a>
            <a href="#templates" className="text-gray-600 hover:text-[#00A699] transition-colors">
              Templates
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-[#00A699] transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#00A699] transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-[#00A699] transition-colors">
              FAQ
            </a>
            {/* NEW: Added dynamic Work History link */}
            <Link to="/work-history" className="text-gray-600 hover:text-[#00A699] transition-colors">
              Work History
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors border border-blue-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#00A699] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#008C80] transition-colors"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu (slides down when open) */}
      <div className={`md:hidden bg-white px-6 py-4 ${mobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 border-b border-gray-100`}>
        <nav className="flex flex-col space-y-4">
          <a href="#features" className="text-gray-600 hover:text-[#00A699] py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Features
          </a>
          <a href="#templates" className="text-gray-600 hover:text-[#00A699] py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Templates
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-[#00A699] py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-[#00A699] py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Testimonials
          </a>
          <a href="#faq" className="text-gray-600 hover:text-[#00A699] py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          {/* NEW: Added Work History link for mobile */}
          <Link to="/work-history" className="text-gray-600 hover:text-[#00A699] py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Work History
          </Link>
          <div className="flex flex-col space-y-3 pt-4">
            <Link
              to="/login"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors border border-blue-600 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#00A699] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#008C80] transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up Free
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00A699] to-[#008C80] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Better Resume.
                <br />
                Faster Search. 
                <br className="hidden md:block" />
                More Offers.
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Simplify your job search and land your next position sooner with our all-in-one suite of tools.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/signup"
                  className="bg-white text-[#00A699] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center flex items-center justify-center"
                >
                  <span>Create Your Resume</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/templates"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00A699] transition-colors text-center"
                >
                  View Templates
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-10 flex items-center">
                <div className="bg-white/20 rounded-lg py-2 px-4 inline-flex items-center">
                  <Star className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="text-white">Trusted by {(stats.resumes).toLocaleString()}+ job seekers</span>
                </div>
              </div>
            </div>
            
            {/* Hero image - Resume preview */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white rounded-lg shadow-2xl p-6 transform rotate-2">
                  <div className="mb-4 border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-bold text-gray-800">John Anderson</h2>
                    <p className="text-[#00A699]">Senior Product Designer</p>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="mt-3 h-4 bg-gray-200 rounded w-full"></div>
                    <div className="mt-3 h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="absolute top-4 -left-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg transform -rotate-12 shadow-lg">
                  ATS Optimized!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gray-50 py-8 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#00A699]">{stats.resumes.toLocaleString()}+</div>
              <div className="text-gray-600">Resumes Created</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#00A699]">{stats.interviews.toLocaleString()}+</div>
              <div className="text-gray-600">Interviews Secured</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-[#00A699]">{stats.offers.toLocaleString()}+</div>
              <div className="text-gray-600">Job Offers Received</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The most effective strategy for your job search</h2>
            <p className="text-xl text-gray-600">Loved by over 1.5 million members</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-[#00A699]/10 rounded-lg flex items-center justify-center mb-6">
                <DocumentText className="w-6 h-6 text-[#00A699]" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Resume Builder</h3>
              <p className="text-gray-600 mb-4">
                Create standout resumes that help you land interviews with our AI-powered tools.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Professional templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>AI content suggestions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>One-click formatting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-[#00A699]/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-[#00A699]" />
              </div>
              <h3 className="text-xl font-bold mb-3">ATS Score Checker</h3>
              <p className="text-gray-600 mb-4">
                Stay organized with our application tracking system. Never miss a follow-up again.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>ATS compatibility check</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Resume score analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Improvement suggestions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-[#00A699]/10 rounded-lg flex items-center justify-center mb-6">
                <ChartBar className="w-6 h-6 text-[#00A699]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Keyword Optimization</h3>
              <p className="text-gray-600 mb-4">
                Use the right keywords from job descriptions to highlight your qualifications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Job description analyzer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Industry-specific keywords</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Skill gap identification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose from our professional templates</h2>
            <p className="text-xl text-gray-600">ATS-friendly templates designed for job success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTemplates.map(template => (
              <div key={template.id} className="bg-white overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl group">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/40 z-10"></div>
                  <div className="p-6 h-full" style={{ backgroundColor: template.color + '15' }}>
                    {/* Template preview */}
                    <div className="bg-white h-full w-full rounded shadow-sm p-4 transform group-hover:scale-105 transition-transform duration-300">
                      <div className="h-4 w-20 mb-4 rounded" style={{ backgroundColor: template.color }}></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      </div>
                      <div className="mt-4 pt-2 border-t border-gray-100">
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 z-20 bg-white/90 rounded-full px-3 py-1 text-sm font-medium flex items-center">
                    <Download className="w-4 h-4 mr-1" /> {template.downloads}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{template.name}</h3>
                  <p className="text-gray-600 mb-4">Perfect for {template.name.toLowerCase()} roles</p>
                  <Link
                    to={`/templates/${template.id}`}
                    className="block w-full text-center py-3 rounded-lg border border-[#00A699] text-[#00A699] font-medium hover:bg-[#00A699] hover:text-white transition-colors"
                  >
                    Use This Template
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/templates"
              className="inline-flex items-center text-[#00A699] font-semibold hover:text-[#008C80] transition-colors"
            >
              View all 50+ templates <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How QuickEmploye Works</h2>
            <p className="text-xl text-gray-600">Four simple steps to your dream job</p>
          </div>

          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-10 md:mb-0 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#00A699] text-white flex items-center justify-center mb-6 text-xl font-bold transform transition-transform group-hover:scale-110">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Sign Up Free</h3>
              <p className="text-gray-600 px-4">Create your account in less than 60 seconds</p>
              <div className="mt-4">
                <User className="w-10 h-10 text-gray-400" />
              </div>
            </div>
            
            <div className="w-full md:w-1/4 mb-10 md:mb-0 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#00A699] text-white flex items-center justify-center mb-6 text-xl font-bold transform transition-transform group-hover:scale-110">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Create Resume</h3>
              <p className="text-gray-600 px-4">Choose a template and customize with AI assistance</p>
              <div className="mt-4">
                <FileText className="w-10 h-10 text-gray-400" />
              </div>
            </div>
            
            <div className="w-full md:w-1/4 mb-10 md:mb-0 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#00A699] text-white flex items-center justify-center mb-6 text-xl font-bold transform transition-transform group-hover:scale-110">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Apply to Jobs</h3>
              <p className="text-gray-600 px-4">Send your optimized resume to potential employers</p>
              <div className="mt-4">
                <Briefcase className="w-10 h-10 text-gray-400" />
              </div>
            </div>
            
            <div className="w-full md:w-1/4 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#00A699] text-white flex items-center justify-center mb-6 text-xl font-bold transform transition-transform group-hover:scale-110">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Get Hired</h3>
              <p className="text-gray-600 px-4">Land more interviews and receive better job offers</p>
              <div className="mt-4">
                <Award className="w-10 h-10 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how others have transformed their job search</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#00A699] text-white p-8 md:p-10 rounded-lg">
              <div className="flex flex-col">
                <div className="mb-6">
                  <p className="text-xl mb-6">
                    "This has been really helpful, in application and my mental peace...mainly with the tedium of
                    submitting and following up job applications. Think of this as a contact manager, CRM, resume-building
                    tool, and cover letter generator all in one place."
                  </p>
                  <div>
                    <p className="font-bold">Gretchen Burgholzer</p>
                    <p className="text-white/80">Customer Success Manager</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white p-8 md:p-10 rounded-lg">
              <div className="flex flex-col">
                <div className="mb-6">
                  <p className="text-xl mb-6">
                    "After struggling for months with my job search, I tried QuickEmploye. Within two weeks, I had three interviews lined up and landed my dream job. The ATS optimization made all the difference."
                  </p>
                  <div>
                    <p className="font-bold">Marcus Johnson</p>
                    <p className="text-white/80">Software Engineer</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for your job search</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>1 resume</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Basic templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>ATS checker</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="block w-full text-center py-3 rounded-lg bg-[#00A699] text-white font-semibold hover:bg-[#008C80] transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#00A699] flex flex-col relative">
              <span className="absolute top-0 right-0 bg-[#00A699] text-white text-sm px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Most Popular
              </span>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-gray-600">Ideal for serious job seekers</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$15</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Unlimited resumes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Premium templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Advanced ATS optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Keyword analysis</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="block w-full text-center py-3 rounded-lg bg-[#00A699] text-white font-semibold hover:bg-[#008C80] transition-colors"
              >
                Try Professional
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600">For teams and organizations</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Team accounts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A699] mr-2 flex-shrink-0 mt-0.5" />
                  <span>API access</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center py-3 rounded-lg border border-[#00A699] text-[#00A699] font-semibold hover:bg-[#00A699] hover:text-white transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#00A699]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#00A699]" />
                  )}
                </button>
                {expandedFaq === index && (
                  <p className="mt-4 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Footer Section */}
      <footer className="bg-[#00A699] text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">QuickEmploye</h3>
            <p className="text-white/80">Your all-in-one job search solution.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/templates" className="text-white/80 hover:text-white transition-colors">Templates</Link></li>
              <li><Link to="/ats-score" className="text-white/80 hover:text-white transition-colors">ATS Checker</Link></li>
              <li><Link to="/work-history" className="text-white/80 hover:text-white transition-colors">Work History</Link></li>
              <li><Link to="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>support@quickemploye.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>www.quickemploye.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} QuickEmploye. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}