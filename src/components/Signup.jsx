
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

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../api/axios'

function Signup({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    general: ''
  })
  const navigate = useNavigate()

  // START: Eye icon functionality
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // END: Eye icon functionality

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
    setFormData(prev => ({ ...prev, [field]: value }))

    // Real-time validation
    switch(field) {
      case 'firstName':
      case 'lastName':
        setErrors(prev => ({
          ...prev,
          [field]: value && !isStringOnly(value) ? 'Only letters are allowed' : ''
        }))
        break
      case 'email':
        setErrors(prev => ({
          ...prev,
          email: value && !isValidEmail(value) ? 'Invalid email format' : ''
        }))
        break
      case 'password':
        setErrors(prev => ({
          ...prev,
          password: value && !isValidPassword(value) ? 'Password must be at least 8 characters' : ''
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
      newErrors.firstName = 'This field is required'
      isValid = false
    }
    if (!formData.lastName) {
      newErrors.lastName = 'This field is required'
      isValid = false
    }
    if (!formData.email) {
      newErrors.email = 'This field is required'
      isValid = false
    }
    if (!formData.password) {
      newErrors.password = 'This field is required'
      isValid = false
    }

    // Check existing validation errors
    if (errors.firstName || errors.lastName || errors.email || errors.password) {
      isValid = false
    }

    if (!isValid) {
      setErrors(prev => ({ ...prev, ...newErrors }))
      return
    }

    try {
      const response = await api.post('/auth/register', formData)
      localStorage.setItem('token', response.data.token)
      setIsAuthenticated(true)
      navigate('/dashboard')
    } catch (err) {
      if (err.response?.data?.message === 'User already exists') {
        setErrors(prev => ({ ...prev, general: 'User already exists' }))
      } else {
        setErrors(prev => ({ ...prev, general: 'Registration failed' }))
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {errors.general && <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{errors.general}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            {/* START: Eye icon functionality */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>
            {/* END: Eye icon functionality */}
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup