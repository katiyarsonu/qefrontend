// import { useNavigate } from 'react-router-dom'

// function HomePage() {
//   const navigate = useNavigate()

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//         {/* Original hero section */}
//         <div className="text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//             Build Your Perfect Resume
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//             Create professional, ATS-friendly resumes that stand out and get you noticed.
//             Our smart builder helps you craft the perfect resume for your dream job.
//           </p>
//           <button
//             onClick={() => navigate('/dashboard/resume-builder')} // Updated route to match nested structure
//             className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all"
//           >
//             Get Started
//           </button>
//         </div>
        
//         {/* Original features section */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: 'ATS-Optimized',
//               description: 'Ensure your resume passes through Applicant Tracking Systems'
//             },
//             {
//               title: 'Professional Templates',
//               description: 'Choose from a variety of elegant and professional designs'
//             },
//             {
//               title: 'Easy to Use',
//               description: 'Simple, intuitive interface to build your perfect resume'
//             }
//           ].map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Added new section: Quick Actions inspired by previous examples */}
//         <div className="mt-16 text-center">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
//             Quick Actions
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 title: 'Create New Resume',
//                 action: () => navigate('/dashboard/resume-builder'),
//                 description: 'Start building your resume from scratch'
//               },
//               {
//                 title: 'Check ATS Score',
//                 action: () => navigate('/dashboard/ats-score'),
//                 description: 'Analyze your resume’s ATS compatibility'
//               },
//               {
//                 title: 'View History',
//                 action: () => navigate('/dashboard/work-history'),
//                 description: 'Access your previous resume versions'
//               },
//               {
//                 title: 'Job Search',
//                 action: () => navigate('/dashboard/search'),
//                 description: 'Find opportunities that match your skills'
//               }
//             ].map((action, index) => (
//               <button
//                 key={index}
//                 onClick={action.action}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {action.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   {action.description}
//                 </p>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Added new section: Testimonials for attractive UI */}
//         <div className="mt-16">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8">
//             What Users Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 quote: 'This tool made my resume stand out and got me interviews!',
//                 author: 'Sarah K., Marketing Specialist'
//               },
//               {
//                 quote: 'The ATS checker is a game-changer for job applications.',
//                 author: 'Mike R., Software Developer'
//               }
//             ].map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
//               >
//                 <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
//                 <p className="text-gray-800 font-medium">{testimonial.author}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomePage









//sonnet 

import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()

  // Added scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Added floating navigation bar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-blue-600">ResumeBuilder</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('actions')} 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Quick Actions
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => navigate('/dashboard/resume-builder')} 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 pt-24">
        {/* Original hero section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Build Your Perfect Resume
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Create professional, ATS-friendly resumes that stand out and get you noticed.
            Our smart builder helps you craft the perfect resume for your dream job.
          </p>
          <button
            onClick={() => navigate('/dashboard/resume-builder')} // Updated route to match nested structure
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all"
          >
            Get Started
          </button>

          {/* Added resume preview placeholder */}
          <div className="mt-12 relative max-w-3xl mx-auto">
            <div className="absolute -right-4 -top-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg transform rotate-3 z-10 text-sm font-bold">
              Land your dream job!
            </div>
            <div className="bg-white shadow-2xl rounded-lg p-6 border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-center text-gray-900">John Smith</h3>
                  <p className="text-center text-gray-600 text-sm">Software Engineer</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                      <span className="text-gray-700">email@example.com</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                      <span className="text-gray-700">555-123-4567</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                      <span className="text-gray-700">New York, NY</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="mb-4">
                    <h4 className="text-md font-bold text-blue-600 mb-2">Summary</h4>
                    <div className="bg-gray-100 h-12 rounded-md"></div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-md font-bold text-blue-600 mb-2">Experience</h4>
                    <div className="space-y-2">
                      <div className="bg-gray-100 h-8 rounded-md"></div>
                      <div className="bg-gray-100 h-8 rounded-md"></div>
                      <div className="bg-gray-100 h-8 rounded-md"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-blue-600 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'React', 'Node.js', 'CSS'].map((skill, i) => (
                        <div key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Original features section */}
        <div id="features" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 scroll-mt-20">
          {[
            {
              title: 'ATS-Optimized',
              description: 'Ensure your resume passes through Applicant Tracking Systems'
            },
            {
              title: 'Professional Templates',
              description: 'Choose from a variety of elegant and professional designs'
            },
            {
              title: 'Easy to Use',
              description: 'Simple, intuitive interface to build your perfect resume'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Added ATS Score Meter section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Know Your Resume's ATS Score
              </h2>
              <p className="text-gray-600 mb-6">
                Our AI-powered system analyzes your resume against job descriptions to determine how well it will perform with Applicant Tracking Systems. Improve your chances of getting past the initial screening.
              </p>
              <button 
                onClick={() => navigate('/dashboard/ats-score')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-md font-medium hover:bg-blue-700 transition-all inline-flex items-center"
              >
                Check Your Score
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="w-full h-full rounded-full border-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-blue-500 border-t-transparent border-l-transparent border-r-transparent transform -rotate-45"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
                  <span className="text-4xl font-bold text-blue-600">85%</span>
                  <span className="text-sm text-gray-500">ATS Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Original Quick Actions section */}
        <div id="actions" className="mt-16 text-center scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Create New Resume',
                action: () => navigate('/dashboard/resume-builder'),
                description: 'Start building your resume from scratch'
              },
              {
                title: 'Check ATS Score',
                action: () => navigate('/dashboard/ats-score'),
                description: 'Analyze your resumes ATS compatibility'
              },
              {
                title: 'View History',
                action: () => navigate('/dashboard/work-history'),
                description: 'Access your previous resume versions'
              },
              {
                title: 'Job Search',
                action: () => navigate('/dashboard/search'),
                description: 'Find opportunities that match your skills'
              }
            ].map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {action.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Original Testimonials section */}
        <div id="testimonials" className="mt-16 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8">
            What Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: 'This tool made my resume stand out and got me interviews!',
                author: 'Sarah K., Marketing Specialist'
              },
              {
                quote: 'The ATS checker is a game-changer for job applications.',
                author: 'Mike R., Software Developer'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-800 font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Added Stats section */}
        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
            Trusted by Job Seekers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '25,000+', label: 'Resumes Created' },
              { number: '70%', label: 'Interview Success Rate' },
              { number: '3x', label: 'More Likely to Get Hired' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Added FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'What is an ATS-optimized resume?',
                answer: 'An ATS (Applicant Tracking System) optimized resume is designed to pass through automated screening systems that many employers use to filter job applications. Our tool ensures your resume contains the right keywords and formatting.'
              },
              {
                question: 'How long does it take to create a resume?',
                answer: 'Most users complete their resume in under 15 minutes with our intuitive builder. You can also save drafts and come back to finish later.'
              },
              {
                question: 'Can I download my resume as a PDF?',
                answer: 'Yes! You can download your completed resume in PDF format, ready to send to employers or upload to job sites.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Added CTA section */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of successful job seekers who have created winning resumes with our platform.
          </p>
          <button
            onClick={() => navigate('/dashboard/resume-builder')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all mx-2"
          >
            Create Your Resume Now
          </button>
          <button
            onClick={() => navigate('/dashboard/templates')}
            className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-all mx-2 mt-4 sm:mt-0"
          >
            Browse Templates
          </button>
        </div>

        {/* Added simple footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              © 2025 ResumeBuilder. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                Terms
              </button>
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                Privacy
              </button>
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage