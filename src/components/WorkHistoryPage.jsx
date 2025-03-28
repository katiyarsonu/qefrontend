import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function WorkHistoryPage() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('') // New state for search
  const [sortBy, setSortBy] = useState('lastEdited') // New state for sorting
  const [sortOrder, setSortOrder] = useState('desc') // New state for sort order
  const [selectedItems, setSelectedItems] = useState([]) // New state for multi-select
  const navigate = useNavigate()

  useEffect(() => {
    fetchHistory()
  }, [])

  const fetchHistory = async () => {
    try {
      const response = await fetch('/api/history')
      if (!response.ok) throw new Error('Failed to fetch history')
      const data = await response.json()
      setHistory(data)
      setError(null)
    } catch (err) {
      setError('Failed to load work history')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/history/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) throw new Error('Failed to delete entry')
      setHistory(history.filter(item => item.id !== id))
      // Remove from selected items if present
      setSelectedItems(selectedItems.filter(itemId => itemId !== id))
    } catch (err) {
      setError('Failed to delete entry')
      console.error(err)
    }
  }

  // New function to handle multi-select
  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  // New function to delete multiple items
  const handleDeleteSelected = async () => {
    if (!selectedItems.length) return
    
    try {
      // Progress counter for multiple deletes
      let successCount = 0
      
      // Delete all selected items one by one
      for (const id of selectedItems) {
        const response = await fetch(`/api/history/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          successCount++
        }
      }
      
      // Update the UI after bulk delete
      if (successCount > 0) {
        setHistory(history.filter(item => !selectedItems.includes(item.id)))
        setSelectedItems([])
      }
      
      if (successCount !== selectedItems.length) {
        setError(`Deleted ${successCount} out of ${selectedItems.length} items`)
      }
    } catch (err) {
      setError('Failed to delete selected entries')
      console.error(err)
    }
  }

  // New function to duplicate a resume
  const handleDuplicate = async (id) => {
    try {
      const itemToDuplicate = history.find(item => item.id === id)
      if (!itemToDuplicate) return
      
      // Send request to duplicate the resume
      const response = await fetch('/api/history/duplicate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
      
      if (!response.ok) throw new Error('Failed to duplicate entry')
      
      const newItem = await response.json()
      setHistory([newItem, ...history])
    } catch (err) {
      setError('Failed to duplicate resume')
      console.error(err)
    }
  }

  // New function to compare two resumes
  const handleCompareResumes = () => {
    if (selectedItems.length !== 2) {
      setError('Please select exactly 2 resumes to compare')
      return
    }
    
    // Navigate to a compare page with the two selected IDs
    navigate(`/compare/${selectedItems[0]}/${selectedItems[1]}`)
  }

  // Filter and sort the history items
  const filteredAndSortedHistory = history
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.jobPosition && item.jobPosition.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      // Sort by the chosen field
      let comparison = 0
      if (sortBy === 'atsScore') {
        comparison = a.atsScore - b.atsScore
      } else if (sortBy === 'title') {
        comparison = a.title.localeCompare(b.title)
      } else { // lastEdited
        comparison = new Date(a.lastEdited) - new Date(b.lastEdited)
      }
      
      // Apply sort order
      return sortOrder === 'desc' ? -comparison : comparison
    })

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Work History</h1>
        <button
          onClick={() => navigate('/ats-score')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Create New Resume
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
          <button 
            onClick={() => setError(null)} 
            className="ml-2 text-red-700 hover:text-red-800"
          >
            ×
          </button>
        </div>
      )}
      
      {/* New search and filter bar */}
      {history.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search resumes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-colors"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
                >
                  <option value="lastEdited">Date</option>
                  <option value="atsScore">ATS Score</option>
                  <option value="title">Title</option>
                </select>
              </div>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="text-gray-600 hover:text-blue-600"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
          
          {/* Multi-select actions */}
          {selectedItems.length > 0 && (
            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-600">
                {selectedItems.length} resume{selectedItems.length > 1 ? 's' : ''} selected
              </div>
              <div className="space-x-2">
                {selectedItems.length === 2 && (
                  <button
                    onClick={handleCompareResumes}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    Compare
                  </button>
                )}
                <button
                  onClick={handleDeleteSelected}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                >
                  Delete Selected
                </button>
                <button
                  onClick={() => setSelectedItems([])}
                  className="text-gray-600 hover:text-gray-800 px-2 py-1 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {history.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg">No resume history yet</p>
          <p className="text-gray-500 mt-2">Create your first resume to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedHistory.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${
                selectedItems.includes(item.id) ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelectItem(item.id)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
                />
              </div>
              
              {item.jobPosition && (
                <p className="text-gray-600 text-sm mb-1">Job: {item.jobPosition}</p>
              )}
              
              <p className="text-gray-500 text-sm mb-4">
                Last edited: {new Date(item.lastEdited).toLocaleDateString()}
              </p>
              
              {/* Resume skills or keywords */}
              {item.keywords && item.keywords.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {item.keywords.slice(0, 3).map((keyword, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                    {item.keywords.length > 3 && (
                      <span className="text-gray-500 text-xs px-1 py-1">
                        +{item.keywords.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">
                  ATS Score: {item.atsScore}
                </span>
                <div className="space-x-2">
                  <button
                    onClick={() => navigate(`/resume/${item.id}`)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDuplicate(item.id)}
                    className="text-green-600 hover:text-green-700"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Resume tips and information */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">Resume Builder Tips</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-gray-700">A higher ATS score means better chances of getting past automated screening</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-gray-700">Customize each resume for specific job applications</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-gray-700">Use the "Compare" function to see differences between two versions</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-gray-700">Include relevant keywords from job descriptions to improve your ATS score</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WorkHistoryPage