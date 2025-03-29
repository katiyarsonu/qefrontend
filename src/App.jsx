// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// // import { useState, useEffect } from 'react'
// // import Dashboard from './components/Dashboard'
// // import Landing from './components/Landing'
// // import Login from './components/Login'
// // import Signup from './components/Signup'
// // import api from './api/axios'
// // import './App.css'

// // import ResumeForm from './components/ResumeForm'
// // import ResumePreview from './components/ResumePreview'
// // import TemplateSelector from './components/TemplateSelector'
// // import Sidebar from './components/Sidebar'
// // import useResumeStore from './store/resumeStore'

// // function App() {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false)
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     const token = localStorage.getItem('token')
// //     if (token) {
// //       checkAuth(token)
// //     } else {
// //       setLoading(false)
// //     }
// //   }, [])

// //   const checkAuth = async (token) => {
// //     try {
// //       const response = await api.get('/auth/me')
// //       if (response.data) {
// //         setIsAuthenticated(true)
// //       }
// //     } catch (error) {
// //       localStorage.removeItem('token')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   if (loading) {
// //     return <div>Loading...</div>
// //   }

// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Landing />} />
// //         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
// //         <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
// //         <Route 
// //           path="/dashboard/*" 
// //           element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
// //         />
// //       </Routes>
// //     </BrowserRouter>
// //   )
// // }

// // export default App


// //new code 

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import Dashboard from './components/Dashboard'
// import Landing from './components/Landing'
// import Login from './components/Login'
// import Signup from './components/Signup'
// import api from './api/axios'
// import './App.css'

// // Added resume builder components from previous examples
// import ResumeForm from './components/ResumeForm'
// import ResumePreview from './components/ResumePreview'
// import TemplateSelector from './components/TemplateSelector'
// import Sidebar from './components/Sidebar'
// import AtsScorePage from './components/AtsScorePage'
// import HomePage from './components/HomePage'
// import WorkHistoryPage from './components/WorkHistoryPage'
// import useResumeStore from './store/resumeStore'

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [loading, setLoading] = useState(true)

//   // Added state for template selection and theme options from previous examples
//   const [selectedTemplate, setSelectedTemplate] = useState(() => {
//     try {
//       const savedTemplate = localStorage.getItem('selectedTemplate')
//       return savedTemplate || 'modern'
//     } catch (error) {
//       console.error("Error loading template from localStorage:", error)
//       return 'modern'
//     }
//   })

//   const [themeOptions, setThemeOptions] = useState(() => {
//     try {
//       const savedTheme = localStorage.getItem('themeOptions')
//       return savedTheme ? JSON.parse(savedTheme) : {
//         fontFamily: 'sans',
//         primaryColor: '#3b82f6',
//         backgroundColor: '#ffffff',
//         textColor: '#333333'
//       }
//     } catch (error) {
//       console.error("Error loading theme options from localStorage:", error)
//       return {
//         fontFamily: 'sans',
//         primaryColor: '#3b82f6',
//         backgroundColor: '#ffffff',
//         textColor: '#333333'
//       }
//     }
//   })

//   // Added sidebar state management from store
//   const isSidebarCollapsed = useResumeStore((state) => state.isSidebarCollapsed)

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       checkAuth(token)
//     } else {
//       setLoading(false)
//     }
//   }, [])

//   const checkAuth = async (token) => {
//     try {
//       const response = await api.get('/auth/me')
//       if (response.data) {
//         setIsAuthenticated(true)
//       }
//     } catch (error) {
//       localStorage.removeItem('token')
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Added template change handler
//   const handleTemplateChange = (template) => {
//     setSelectedTemplate(template)
//     localStorage.setItem('selectedTemplate', template)
//   }

//   // Added theme change handler
//   const handleThemeChange = (newThemeOptions) => {
//     const updatedThemeOptions = { ...themeOptions, ...newThemeOptions }
//     setThemeOptions(updatedThemeOptions)
//     localStorage.setItem('themeOptions', JSON.stringify(updatedThemeOptions))
//   }

//   if (loading) {
//     // Enhanced loading UI
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent"></div>
//       </div>
//     )
//   }

//   return (
//     <BrowserRouter>
//       {/* Added main wrapper with enhanced styling */}
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 transition-colors duration-300">
//         {/* Added Sidebar component for authenticated routes */}
//         {isAuthenticated && <Sidebar />}
        
//         {/* Added dynamic margin based on sidebar state */}
//         <div className={`transition-all duration-300 ease-in-out ${
//           isAuthenticated && !isSidebarCollapsed ? 'md:ml-64' : isAuthenticated ? 'md:ml-16' : ''
//         }`}>
//           <Routes>
//             {/* Original routes */}
//             <Route path="/" element={<Landing />} />
//             <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//             <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
            
//             {/* Enhanced dashboard route with nested resume builder routes */}
//             <Route 
//               path="/dashboard/*" 
//               element={
//                 isAuthenticated ? (
//                   <Routes>
//                     <Route index element={<Dashboard />} />
//                     <Route path="home" element={<HomePage />} />
//                     <Route path="ats-score" element={<AtsScorePage />} />
//                     <Route path="work-history" element={<WorkHistoryPage />} />
//                     <Route path="resume-builder" element={
//                       // Enhanced resume builder UI with modern styling
//                       <div className="animate-fade-in">
//                         <header className="bg-white shadow-lg rounded-b-xl border-b-2 border-indigo-100">
//                           <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
//                             <h1 className="text-3xl font-extrabold text-gray-900 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
//                               Resume Builder
//                             </h1>
//                             <TemplateSelector 
//                               selectedTemplate={selectedTemplate} 
//                               onTemplateChange={handleTemplateChange}
//                               themeOptions={themeOptions}
//                               onThemeChange={handleThemeChange}
//                             />
//                           </div>
//                         </header>
//                         <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:px-8">
//                           <div className="flex flex-col lg:flex-row gap-8">
//                             <div className="lg:w-1/2 w-full mb-6 lg:mb-0 bg-white rounded-xl shadow-md p-6">
//                               <ResumeForm />
//                             </div>
//                             <div className="lg:w-1/2 w-full">
//                               <div className="sticky top-6 bg-white rounded-xl shadow-md p-6 border border-gray-100">
//                                 <ResumePreview 
//                                   template={selectedTemplate}
//                                   themeOptions={themeOptions}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </main>
//                       </div>
//                     } />
//                   </Routes>
//                 ) : (
//                   <Navigate to="/login" />
//                 )
//               } 
//             />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App


//new code 

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import api from './api/axios'
import './App.css'

// Added resume builder components from previous examples
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'
import TemplateSelector from './components/TemplateSelector'
import Sidebar from './components/Sidebar'
import AtsScorePage from './components/AtsScorePage'
import HomePage from './components/HomePage'
import WorkHistoryPage from './components/WorkHistoryPage'
import useResumeStore from './store/resumeStore'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  // Added state for template selection and theme options from previous examples
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    try {
      const savedTemplate = localStorage.getItem('selectedTemplate')
      return savedTemplate || 'modern'
    } catch (error) {
      console.error("Error loading template from localStorage:", error)
      return 'modern'
    }
  })

  const [themeOptions, setThemeOptions] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('themeOptions')
      return savedTheme ? JSON.parse(savedTheme) : {
        fontFamily: 'sans',
        primaryColor: '#3b82f6',
        backgroundColor: '#ffffff',
        textColor: '#333333'
      }
    } catch (error) {
      console.error("Error loading theme options from localStorage:", error)
      return {
        fontFamily: 'sans',
        primaryColor: '#3b82f6',
        backgroundColor: '#ffffff',
        textColor: '#333333'
      }
    }
  })

  // Added sidebar state management from store
  const isSidebarCollapsed = useResumeStore((state) => state.isSidebarCollapsed)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkAuth(token)
    } else {
      setLoading(false)
    }
  }, [])

  const checkAuth = async (token) => {
    try {
      const response = await api.get('/auth/me')
      if (response.data) {
        setIsAuthenticated(true)
      }
    } catch (error) {
      localStorage.removeItem('token')
    } finally {
      setLoading(false)
    }
  }

  // Added template change handler
  const handleTemplateChange = (template) => {
    setSelectedTemplate(template)
    localStorage.setItem('selectedTemplate', template)
  }

  // Added theme change handler
  const handleThemeChange = (newThemeOptions) => {
    const updatedThemeOptions = { ...themeOptions, ...newThemeOptions }
    setThemeOptions(updatedThemeOptions)
    localStorage.setItem('themeOptions', JSON.stringify(updatedThemeOptions))
  }

  if (loading) {
    // Enhanced loading UI
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      {/* Added main wrapper with enhanced styling */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 transition-colors duration-300">
        {/* Added Sidebar component for authenticated routes */}
        {isAuthenticated && <Sidebar />}
        
        {/* Added dynamic margin based on sidebar state */}
        <div className={`transition-all duration-300 ease-in-out ${
          isAuthenticated && !isSidebarCollapsed ? 'md:ml-64' : isAuthenticated ? 'md:ml-16' : ''
        }`}>
          <Routes>
            {/* Original routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
            
            {/* Enhanced dashboard route with nested resume builder routes */}
            <Route 
              path="/dashboard/*" 
              element={
                isAuthenticated ? (
                  <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="ats" element={<AtsScorePage />} />
                    <Route path="work-history" element={<WorkHistoryPage />} />
                    <Route path="resume-builder" element={
                      // Enhanced resume builder UI with modern styling
                      <div className="animate-fade-in">
                        <header className="bg-white shadow-lg rounded-b-xl border-b-2 border-indigo-100">
                          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <h1 className="text-3xl font-extrabold text-gray-900 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                              Resume Builder
                            </h1>
                            <TemplateSelector 
                              selectedTemplate={selectedTemplate} 
                              onTemplateChange={handleTemplateChange}
                              themeOptions={themeOptions}
                              onThemeChange={handleThemeChange}
                              setIsAuthenticated={setIsAuthenticated}
                            />
                          </div>
                        </header>
                        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:px-8">
                          <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 bg-white rounded-xl shadow-md p-6">
                              <ResumeForm />
                            </div>
                            <div className="lg:w-1/2 w-full">
                              <div className="sticky top-6 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                                <ResumePreview 
                                  template={selectedTemplate}
                                  themeOptions={themeOptions}
                                />
                              </div>
                            </div>
                          </div>
                        </main>
                      </div>
                    } />
                  </Routes>
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App