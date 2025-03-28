
// import { Link } from 'react-router-dom'

// function Landing() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
//       <div className="text-center text-white p-8">
//         <h1 className="text-5xl font-bold mb-6">Resume Builder Pro</h1>
//         <p className="text-xl mb-8">Create professional resumes in minutes</p>
//         <div className="space-x-4">
//           <Link 
//             to="/login" 
//             className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
//           >
//             Login
//           </Link>
//           <Link 
//             to="/signup" 
//             className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Landing


//new code 

// import { Link } from "react-router-dom"

// export default function Landing() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Build Your Professional Resume</h1>
//         <p className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto">
//           Create standout resumes in minutes that help you land your dream job
//         </p>

//         <div className="space-x-4">
//           <Link
//             to="/login"
//             className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
//           >
//             Sign Up
//           </Link>
//         </div>

//         <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
//             <div className="flex flex-col items-center md:items-start">
//               <div className="bg-blue-500 p-3 rounded-full mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Easy to Create</h3>
//               <p className="text-sm text-blue-100">
//                 Simple step-by-step process to build professional resumes in minutes
//               </p>
//             </div>
//             <div className="flex flex-col items-center md:items-start">
//               <div className="bg-blue-500 p-3 rounded-full mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Professional Templates</h3>
//               <p className="text-sm text-blue-100">Choose from dozens of ATS-friendly templates designed by experts</p>
//             </div>
//             <div className="flex flex-col items-center md:items-start">
//               <div className="bg-blue-500 p-3 rounded-full mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
//               <p className="text-sm text-blue-100">
//                 Our users report 2x more interview callbacks with our resume formats
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-16 text-center">
//         <p className="text-sm opacity-75">Trusted by over 100,000 job seekers worldwide</p>
//         <div className="flex flex-wrap justify-center gap-8 mt-4">
//           <div className="h-8 opacity-70">Company Logo 1</div>
//           <div className="h-8 opacity-70">Company Logo 2</div>
//           <div className="h-8 opacity-70">Company Logo 3</div>
//           <div className="h-8 opacity-70">Company Logo 4</div>
//         </div>
//       </div>
//     </div>
//   )
// }



import { Link } from "react-router-dom"
import { FileTextIcon as DocumentText, CheckCircle, BarChartIcon as ChartBar } from "lucide-react"

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header/Navigation */}
      <header className="border-b border-gray-100 py-4 px-6 md:px-12">
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
          </nav>

          <div className="space-x-4">
            <Link
              to="/login"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00A699] to-[#008C80] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Better Resume.
              <br />
              Faster Search. More Offers.
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Simplify your job search and land your next position sooner with our all-in-one suite of tools.
            </p>

            <div className="space-x-4">
              <Link
                to="/login"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The most effective strategy for your job search</h2>
            <p className="text-xl text-gray-600">Loved by over 1.5 million members</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#00A699]/10 rounded-lg flex items-center justify-center mb-6">
                <DocumentText className="w-6 h-6 text-[#00A699]" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Resume Builder</h3>
              <p className="text-gray-600">
                Create standout resumes that help you land interviews with our AI-powered tools.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#00A699]/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-[#00A699]" />
              </div>
              <h3 className="text-xl font-bold mb-3">ATS Score Checker</h3>
              <p className="text-gray-600">
                Stay organized with our application tracking system. Never miss a follow-up again.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#00A699]/10 rounded-lg flex items-center justify-center mb-6">
                <ChartBar className="w-6 h-6 text-[#00A699]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Keyword Optimization</h3>
              <p className="text-gray-600">
                Use the right keywords from job descriptions to highlight your qualifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#00A699] text-white p-8 md:p-12 rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/4 mb-8 md:mb-0 md:pr-8">
                <p className="text-xl md:text-2xl mb-6">
                  "This has been really helpful, in application and my mental peace...mainly with the tedium of
                  submitting and following up job applications. Think of this as a contact manager, CRM, resume-building
                  tool, and cover letter generator all in one place."
                </p>
                <div>
                  <p className="font-bold">Gretchen Burgholzer</p>
                  <p className="text-white/80">Customer Success Manager</p>
                </div>
              </div>
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-3xl">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-yellow-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Create a free Account & Set Up Goals</h2>
            <p className="text-xl">
              Use the right keywords from job descriptions to highlight your qualifications on your resume.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="space-x-4">
              <Link
                to="/login"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-10 md:mb-0 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Sign Up!</h3>
            </div>
            <div className="w-full md:w-1/4 mb-10 md:mb-0 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Create</h3>
            </div>
            <div className="w-full md:w-1/4 mb-10 md:mb-0 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Apply</h3>
            </div>
            <div className="w-full md:w-1/4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Grow</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold flex items-center">
                resume
                <span className="text-[#00A699]">builder</span>
                <span className="text-[#00A699] ml-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-[#00A699]">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A699]">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A699]">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Resume Builder. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

