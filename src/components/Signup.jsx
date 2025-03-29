
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
"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Eye, EyeOff, UserPlus, ChevronRight } from "lucide-react"
import api from "../api/axios"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function Signup({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    general: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Password visibility toggle
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Validation functions
  const isStringOnly = (value) => {
    return /^[A-Za-z\s]+$/.test(value)
  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isValidPassword = (password) => {
    return password.length >= 8
  }

  // Handle input changes with real-time validation
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Real-time validation
    switch (field) {
      case "firstName":
      case "lastName":
        setErrors((prev) => ({
          ...prev,
          [field]: value && !isStringOnly(value) ? "Only letters are allowed" : "",
        }))
        break
      case "email":
        setErrors((prev) => ({
          ...prev,
          email: value && !isValidEmail(value) ? "Invalid email format" : "",
        }))
        break
      case "password":
        setErrors((prev) => ({
          ...prev,
          password: value && !isValidPassword(value) ? "Password must be at least 8 characters" : "",
        }))
        break
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check for empty fields
    const newErrors = {}
    let isValid = true

    if (!formData.firstName) {
      newErrors.firstName = "This field is required"
      isValid = false
    }
    if (!formData.lastName) {
      newErrors.lastName = "This field is required"
      isValid = false
    }
    if (!formData.email) {
      newErrors.email = "This field is required"
      isValid = false
    }
    if (!formData.password) {
      newErrors.password = "This field is required"
      isValid = false
    }

    // Check existing validation errors
    if (errors.firstName || errors.lastName || errors.email || errors.password) {
      isValid = false
    }

    if (!isValid) {
      setErrors((prev) => ({ ...prev, ...newErrors }))
      return
    }

    setIsLoading(true)
    try {
      const response = await api.post("/auth/register", formData)
      localStorage.setItem("token", response.data.token)
      setIsAuthenticated(true)
      navigate("/dashboard")
    } catch (err) {
      if (err.response?.data?.message === "User already exists") {
        setErrors((prev) => ({ ...prev, general: "User already exists" }))
      } else {
        setErrors((prev) => ({ ...prev, general: "Registration failed" }))
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left side - Decorative */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary/90 to-primary/50 p-12 items-center justify-center">
        <div className="max-w-md text-white">
          <h1 className="text-4xl font-bold mb-6">Join Us Today</h1>
          <p className="text-lg opacity-90 mb-8">
            Create your account and start your journey with us. It only takes a minute to get started.
          </p>
          <div className="flex space-x-3 mt-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-white opacity-60 animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Signup form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg border-0 shadow-primary/5">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
            <CardDescription className="text-center">Enter your information to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            {errors.general && (
              <div className="bg-destructive/10 text-destructive p-3 rounded-md mb-4 text-sm flex items-center">
                <span>{errors.general}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="firstName">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={`h-11 ${errors.firstName ? "border-destructive" : ""}`}
                    required
                  />
                  {errors.firstName && <p className="text-destructive text-xs">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="lastName">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={`h-11 ${errors.lastName ? "border-destructive" : ""}`}
                    required
                  />
                  {errors.lastName && <p className="text-destructive text-xs">{errors.lastName}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="name@example.com"
                  className={`h-11 ${errors.email ? "border-destructive" : ""}`}
                  required
                />
                {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className={`h-11 pr-10 ${errors.password ? "border-destructive" : ""}`}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </button>
                </div>
                {errors.password && <p className="text-destructive text-xs">{errors.password}</p>}
              </div>
              <Button type="submit" className="w-full h-11 mt-2 transition-all" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Creating account...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <UserPlus className="mr-2 h-4 w-4" /> Create Account
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-11">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
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
              </Button>
              <Button variant="outline" className="h-11">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </Button>
            </div>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline inline-flex items-center">
                Sign in <ChevronRight className="h-3 w-3 ml-1" />
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Signup
