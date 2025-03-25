
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-6">Resume Builder Pro</h1>
        <p className="text-xl mb-8">Create professional resumes in minutes</p>
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
  )
}

export default Landing
