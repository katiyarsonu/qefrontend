
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

  // Password visibility toggle
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validation functions
  const isStringOnly = (value) => {
    return /^[A-Za-z\s]+$/.test(value);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  // Handle input changes with real-time validation
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Real-time validation
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

    // Check for empty fields
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

    // Check existing validation errors
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
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left side - Decorative with enhanced visuals */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-600 to-blue-500 p-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-300/20 rounded-full filter blur-lg"></div>
          <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-indigo-300/20 rounded-full filter blur-md"></div>
        </div>
        
        <div className="relative z-10 max-w-md text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to our platform</h1>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Join thousands of users who have already transformed their experience with our tools and services.
          </p>
          
          {/* Feature points */}
          <div className="space-y-4 mt-12">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/90">Easy to use interface</p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/90">Secure data storage</p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/90">24/7 customer support</p>
            </div>
          </div>
          
          {/* Animated dots at bottom */}
          <div className="flex space-x-3 mt-16">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-white opacity-70 animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Enhanced Signup form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-600 mt-2">Join our community and start your journey</p>
          </div>
          
          {errors.general && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm">{errors.general}</p>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className={`w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.firstName ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="John"
                  required
                />
                {errors.firstName && <p className="mt-1 text-red-600 text-xs">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className={`w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    errors.lastName ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Doe"
                  required
                />
                {errors.lastName && <p className="mt-1 text-red-600 text-xs">{errors.lastName}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@example.com"
                className={`w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                  errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
                required
              />
              {errors.email && <p className="mt-1 text-red-600 text-xs">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className={`w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all pr-10 ${
                    errors.password ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </button>
              </div>
              {errors.password && <p className="mt-1 text-red-600 text-xs">{errors.password}</p>}
              {!errors.password && (
                <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full h-12 mt-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:from-indigo-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  <span>Creating account...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <UserPlus className="mr-2 h-5 w-5" /> 
                  <span>Create Account</span>
                </div>
              )}
            </button>
          </form>
          
          <div className="mt-8 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center shadow-sm">
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
              <button className="h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center shadow-sm">
                <svg className="mr-2 h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </button>
            </div>
            
            <p className="text-center text-sm mt-6 text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 font-medium hover:text-indigo-500 inline-flex items-center">
                Sign in <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </p>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-center text-xs text-gray-500 space-x-4">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure Connection
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1 .257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
                </svg>
                Privacy Protected
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;