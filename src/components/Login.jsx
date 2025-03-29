// // api.js
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://0.0.0.0:5000/api', // Set your base URL here
// });

// export default api;

//old code login without eye password
// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import api from '../api/axios.js'; // Import the axios instance

// function Login({ setIsAuthenticated }) {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await api.post('/auth/login', {
//         email,
//         password
//       })
//       localStorage.setItem('token', response.data.token)
//       setIsAuthenticated(true)
//       navigate('/dashboard')
//     } catch (err) {
//       console.log(error)
//       setError('Invalid credentials')
//       console.log(error)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <button 
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login



//new code login with eye password

// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import api from '../api/axios.js'; // Import the axios instance

// function Login({ setIsAuthenticated }) {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   // START: Eye icon functionality
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   // END: Eye icon functionality

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await api.post('/auth/login', {
//         email,
//         password
//       })
//       localStorage.setItem('token', response.data.token)
//       setIsAuthenticated(true)
//       navigate('/dashboard')
//     } catch (err) {
//       console.log(error)
//       setError('Invalid credentials')
//       console.log(error)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Password</label>
//             {/* START: Eye icon functionality */}
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-3 py-2 border rounded"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? (
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 ) : (
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//             {/* END: Eye icon functionality */}
//           </div>
//           <button 
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login



//new design 
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, LogIn, ChevronRight, Star, ArrowRight } from "lucide-react";
import api from "../api/axios.js";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Password visibility toggle
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // State for dynamic header scroll effect
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect for scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setError("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-blue-500/10 w-96 h-96 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-indigo-500/10 w-96 h-96 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 bg-purple-500/5 w-96 h-96 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </div>

      {/* Sticky header */}
      <header
        className={`sticky top-0 z-20 px-6 py-4 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            Quick<span className="text-blue-600 font-extrabold">Employe</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center transition-colors"
            >
              Sign Up <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:flex-row items-center justify-center p-6 z-10">
        {/* Left side - Decorative */}
        <div className="hidden md:flex md:w-1/2 p-12 items-center justify-center">
          <div className="max-w-md text-gray-800">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Welcome Back</h1>
            <p className="text-lg mb-8 text-gray-700">
              Sign in to access your resume builder, ATS scores, and work
              history. Boost your job search today.
            </p>
            {/* Trust indicators */}
            <div className="space-y-4">
              <div className="flex items-center bg-blue-500/10 rounded-lg py-3 px-4 w-fit">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="font-medium">Trusted by 1.5M+ job seekers</span>
              </div>
              <div className="flex items-center space-x-6 mt-6">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-blue-600">98%</span>
                  <span className="text-sm text-gray-600">Success rate</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-blue-600">24/7</span>
                  <span className="text-sm text-gray-600">Support</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-blue-600">4.9/5</span>
                  <span className="text-sm text-gray-600">User rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="flex-1 flex items-center justify-center p-6 w-full md:w-1/2">
          <div className="w-full max-w-md shadow-xl border border-gray-200 rounded-2xl bg-white/95 backdrop-blur-sm p-8 transition-all hover:shadow-2xl">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-center text-gray-900">
                Login
              </h2>
              <p className="text-center text-gray-600">
                Access your account to continue your job search journey
              </p>
            </div>
            <div className="space-y-6 mt-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm flex items-center border border-red-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-3">
                  <label
                    className="text-sm font-medium text-gray-700 flex items-center"
                    htmlFor="email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label
                      className="text-sm font-medium text-gray-700 flex items-center"
                      htmlFor="password"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all outline-none pr-12"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {showPassword ? (
                        <Eye className="h-5 w-5" />
                      ) : (
                        <EyeOff className="h-5 w-5" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <LogIn className="mr-2 h-5 w-5" /> Sign In
                    </div>
                  )}
                </button>
              </form>

              {/* Social login buttons */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 text-gray-500 font-medium">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="h-12 border border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center rounded-lg hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Google
                </button>
                <button
                  className="h-12 border border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center rounded-lg hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <svg
                    className="mr-2 h-5 w-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-4 pt-6">
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 font-medium hover:text-blue-800 hover:underline inline-flex items-center transition-colors"
                >
                  Sign Up <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </p>
              {/* Quick links */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <Link
                  to="/templates"
                  className="hover:text-blue-600 transition-colors"
                >
                  Templates
                </Link>
                <Link
                  to="/ats-score"
                  className="hover:text-blue-600 transition-colors"
                >
                  ATS Checker
                </Link>
                <Link
                  to="/work-history"
                  className="hover:text-blue-600 transition-colors"
                >
                  Work History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">QuickEmploye</h3>
              <p className="text-blue-100 text-sm">
                Your all-in-one platform for resume building, job applications, and career success.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li><Link to="/templates" className="hover:text-white">Resume Templates</Link></li>
                <li><Link to="/ats-score" className="hover:text-white">ATS Checker</Link></li>
                <li><Link to="/work-history" className="hover:text-white">Work History Manager</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@quickemploye.com
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (123) 456-7890
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-blue-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-blue-100">
              © {new Date().getFullYear()} QuickEmploye. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-blue-100">
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;