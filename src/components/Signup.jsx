
// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import api from '../api/axios'

// function Signup({ setIsAuthenticated }) {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: ''
//   })
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await api.post('/auth/register', formData)
//       localStorage.setItem('token', response.data.token)
//       setIsAuthenticated(true)
//       navigate('/dashboard')
//     } catch (err) {
//       setError('Registration failed')
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">First Name</label>
//             <input
//               type="text"
//               value={formData.firstName}
//               onChange={(e) => setFormData({...formData, firstName: e.target.value})}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Last Name</label>
//             <input
//               type="text"
//               value={formData.lastName}
//               onChange={(e) => setFormData({...formData, lastName: e.target.value})}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               value={formData.password}
//               onChange={(e) => setFormData({...formData, password: e.target.value})}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <button 
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Signup


//old code without eye password
// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import api from '../api/axios'

// function Signup({ setIsAuthenticated }) {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: ''
//   })
//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     general: ''
//   })
//   const navigate = useNavigate()

//   // Validation functions
//   const isStringOnly = (value) => {
//     return /^[A-Za-z\s]+$/.test(value)
//   }

//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }

//   const isValidPassword = (password) => {
//     return password.length >= 8
//   }

//   // Handle input changes with real-time validation
//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }))

//     // Real-time validation
//     switch(field) {
//       case 'firstName':
//       case 'lastName':
//         setErrors(prev => ({
//           ...prev,
//           [field]: value && !isStringOnly(value) ? 'Only letters are allowed' : ''
//         }))
//         break
//       case 'email':
//         setErrors(prev => ({
//           ...prev,
//           email: value && !isValidEmail(value) ? 'Invalid email format' : ''
//         }))
//         break
//       case 'password':
//         setErrors(prev => ({
//           ...prev,
//           password: value && !isValidPassword(value) ? 'Password must be at least 8 characters' : ''
//         }))
//         break
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     // Check for empty fields
//     const newErrors = {}
//     let isValid = true

//     if (!formData.firstName) {
//       newErrors.firstName = 'This field is required'
//       isValid = false
//     }
//     if (!formData.lastName) {
//       newErrors.lastName = 'This field is required'
//       isValid = false
//     }
//     if (!formData.email) {
//       newErrors.email = 'This field is required'
//       isValid = false
//     }
//     if (!formData.password) {
//       newErrors.password = 'This field is required'
//       isValid = false
//     }

//     // Check existing validation errors
//     if (errors.firstName || errors.lastName || errors.email || errors.password) {
//       isValid = false
//     }

//     if (!isValid) {
//       setErrors(prev => ({ ...prev, ...newErrors }))
//       return
//     }

//     try {
//       const response = await api.post('/auth/register', formData)
//       localStorage.setItem('token', response.data.token)
//       setIsAuthenticated(true)
//       navigate('/dashboard')
//     } catch (err) {
//       if (err.response?.data?.message === 'User already exists') {
//         setErrors(prev => ({ ...prev, general: 'User already exists' }))
//       } else {
//         setErrors(prev => ({ ...prev, general: 'Registration failed' }))
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         {errors.general && <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{errors.general}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">First Name</label>
//             <input
//               type="text"
//               value={formData.firstName}
//               onChange={(e) => handleChange('firstName', e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//             {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Last Name</label>
//             <input
//               type="text"
//               value={formData.lastName}
//               onChange={(e) => handleChange('lastName', e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//             {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) => handleChange('email', e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//             {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Password</label>
//             <input
//               type="password"
//               value={formData.password}
//               onChange={(e) => handleChange('password', e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//             {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
//           </div>
//           <button 
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Signup


//new code login with eye password

// import { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import api from '../api/axios'

// function Signup({ setIsAuthenticated }) {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: ''
//   })
//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     general: ''
//   })
//   const navigate = useNavigate()

//   // START: Eye icon functionality
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   // END: Eye icon functionality

//   // Validation functions
//   const isStringOnly = (value) => {
//     return /^[A-Za-z\s]+$/.test(value)
//   }

//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }

//   const isValidPassword = (password) => {
//     return password.length >= 8
//   }

//   // Handle input changes with real-time validation
//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }))

//     // Real-time validation
//     switch(field) {
//       case 'firstName':
//       case 'lastName':
//         setErrors(prev => ({
//           ...prev,
//           [field]: value && !isStringOnly(value) ? 'Only letters are allowed' : ''
//         }))
//         break
//       case 'email':
//         setErrors(prev => ({
//           ...prev,
//           email: value && !isValidEmail(value) ? 'Invalid email format' : ''
//         }))
//         break
//       case 'password':
//         setErrors(prev => ({
//           ...prev,
//           password: value && !isValidPassword(value) ? 'Password must be at least 8 characters' : ''
//         }))
//         break
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     // Check for empty fields
//     const newErrors = {}
//     let isValid = true

//     if (!formData.firstName) {
//       newErrors.firstName = 'This field is required'
//       isValid = false
//     }
//     if (!formData.lastName) {
//       newErrors.lastName = 'This field is required'
//       isValid = false
//     }
//     if (!formData.email) {
//       newErrors.email = 'This field is required'
//       isValid = false
//     }
//     if (!formData.password) {
//       newErrors.password = 'This field is required'
//       isValid = false
//     }

//     // Check existing validation errors
//     if (errors.firstName || errors.lastName || errors.email || errors.password) {
//       isValid = false
//     }

//     if (!isValid) {
//       setErrors(prev => ({ ...prev, ...newErrors }))
//       return
//     }

//     try {
//       const response = await api.post('/auth/register', formData)
//       localStorage.setItem('token', response.data.token)
//       setIsAuthenticated(true)
//       navigate('/dashboard')
//     } catch (err) {
//       if (err.response?.data?.message === 'User already exists') {
//         setErrors(prev => ({ ...prev, general: 'User already exists' }))
//       } else {
//         setErrors(prev => ({ ...prev, general: 'Registration failed' }))
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         {errors.general && <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{errors.general}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">First Name</label>
//             <input
//               type="text"
//               value={formData.firstName}
//               onChange={(e) => handleChange('firstName', e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//             {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Last Name</label>
//             <input
//               type="text"
//               value={formData.lastName}
//               onChange={(e) => handleChange('lastName', e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//             {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) => handleChange('email', e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//             {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Password</label>
//             {/* START: Eye icon functionality */}
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.password}
//                 onChange={(e) => handleChange('password', e.target.value)}
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
//             {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
//           </div>
//           <button 
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Signup

//new design 

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, UserPlus, ChevronRight } from "lucide-react";
import api from "../api/axios";

function Signup({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    general: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isStringOnly = (value) => {
    return /^[A-Za-z\s]+$/.test(value);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    switch (field) {
      case "firstName":
      case "lastName":
        setErrors((prev) => ({
          ...prev,
          [field]: value && !isStringOnly(value) ? "Only letters are allowed" : "",
        }));
        break;
      case "email":
        setErrors((prev) => ({
          ...prev,
          email: value && !isValidEmail(value) ? "Invalid email format" : "",
        }));
        break;
      case "password":
        setErrors((prev) => ({
          ...prev,
          password: value && !isValidPassword(value) ? "Password must be at least 8 characters" : "",
        }));
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      newErrors.firstName = "This field is required";
      isValid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "This field is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "This field is required";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "This field is required";
      isValid = false;
    }

    if (errors.firstName || errors.lastName || errors.email || errors.password) {
      isValid = false;
    }

    if (!isValid) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
      return;
    }

    setIsLoading(true);
    try {
      const response = await api.post("/auth/register", formData);
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.data?.message === "User already exists") {
        setErrors((prev) => ({ ...prev, general: "User already exists" }));
      } else {
        setErrors((prev) => ({ ...prev, general: "Registration failed" }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-teal-50 to-gray-100 relative overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-teal-500/10 w-96 h-96 rounded-full -mr-48 -mt-48 blur-3xl md:w-[32rem] md:h-[32rem]"></div>
        <div className="absolute bottom-0 left-0 bg-[#008C80]/10 w-96 h-96 rounded-full -ml-48 -mb-48 blur-3xl md:w-[32rem] md:h-[32rem]"></div>
        <div className="absolute top-1/2 left-1/2 bg-teal-300/5 w-96 h-96 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-3xl md:w-[32rem] md:h-[32rem]"></div>
        <div className="hidden md:block absolute -bottom-16 -left-16 w-64 h-64 bg-[#008C80]/5 rounded-full blur-2xl"></div>
        <div className="hidden md:block absolute -top-16 -right-16 w-64 h-64 bg-[#008C80]/5 rounded-full blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row items-center justify-center p-4 sm:p-6 lg:p-8 z-10">
        {/* Left Side - Decorative Section */}
        <div className="hidden md:flex md:w-1/2 p-6 lg:p-12 items-center justify-center">
          <div className="max-w-md text-gray-800 relative">
            <div className="absolute -left-8 -top-8 w-20 h-20 grid grid-cols-3 gap-2 opacity-50">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#008C80]/30 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#008C80] to-teal-600 bg-clip-text text-transparent">
              Create Your Account
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Sign up to access powerful resume tools and career resources tailored for your success.
            </p>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 w-full max-w-lg">
          <div className="w-full bg-white shadow-lg rounded-xl p-6 sm:p-8 transition-all hover:shadow-xl relative">
            <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-[#008C80]/5 rounded-bl-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Sign Up</h2>
            <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">Start your journey today</p>

            {errors.general && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 flex items-center border border-red-100">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{errors.general}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    placeholder="John"
                    required
                    className={`w-full h-12 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#008C80] focus:border-transparent transition-all ${errors.firstName ? "border-red-500" : "border-gray-300 hover:border-teal-400"}`}
                  />
                  {errors.firstName && <p className="text-red-600 text-xs">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                    className={`w-full h-12 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#008C80] focus:border-transparent transition-all ${errors.lastName ? "border-red-500" : "border-gray-300 hover:border-teal-400"}`}
                  />
                  {errors.lastName && <p className="text-red-600 text-xs">{ LASTerrors.lastName}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center" htmlFor="email">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="name@example.com"
                  required
                  className={`w-full h-12 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#008C80] focus:border-transparent transition-all ${errors.email ? "border-red-500" : "border-gray-300 hover:border-teal-400"}`}
                />
                {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center" htmlFor="password">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    required
                    className={`w-full h-12 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#008C80] focus:border-transparent transition-all pr-12 ${errors.password ? "border-red-500" : "border-gray-300 hover:border-teal-400"}`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-600 text-xs">{errors.password}</p>}
                {!errors.password && <p className="text-gray-500 text-xs">Password must be at least 8 characters</p>}
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#008C80] text-white rounded-lg font-semibold flex items-center justify-center transition-all hover:bg-teal-700 hover:shadow-md transform hover:-translate-y-0.5 disabled:bg-teal-400 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Creating account...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <UserPlus className="mr-2 h-5 w-5" /> Create Account
                  </div>
                )}
              </button>
            </form>

            {/* Social Login Buttons */}
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <button className="h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:border-[#008C80] text-sm sm:text-base">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Google
              </button>
              <button className="h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:border-[#008C80] text-sm sm:text-base">
                <svg className="mr-2 h-5 w-5 text-[#008C80]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#008C80] hover:underline hover:text-teal-700 font-medium inline-flex items-center transition-colors">
                Sign In <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-[#008C80] text-white py-8 px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-xl"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">QuickEmploye</h3>
            <p className="text-teal-100 text-sm leading-relaxed">
              Empowering your job search with smart resume tools and career insights.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-teal-100 text-sm">
              <li><Link to="/templates" className="hover:text-white transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Templates</Link></li>
              <li><Link to="/ats-score" className="hover:text-white transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> ATS Checker</Link></li>
              <li><Link to="/work-history" className="hover:text-white transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Work History</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-teal-100 text-sm">
              <li><Link to="/faq" className="hover:text-white transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-4 border-t border-teal-500/30 text-center text-sm text-teal-100">
          © {new Date().getFullYear()} QuickEmploye. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Signup;