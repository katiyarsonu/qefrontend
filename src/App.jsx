import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import api from './api/axios'
import './App.css'

import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'
import TemplateSelector from './components/TemplateSelector'
import Sidebar from './components/Sidebar'
import useResumeStore from './store/resumeStore'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route 
          path="/dashboard/*" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App