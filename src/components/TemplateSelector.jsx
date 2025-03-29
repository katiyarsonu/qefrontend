// import { useState } from 'react'

// function TemplateSelector({ selectedTemplate, onTemplateChange, themeOptions, onThemeChange }) {
//   const [showThemeOptions, setShowThemeOptions] = useState(false)
  
//   const templates = [
//     { id: 'modern', name: 'Modern' },
//     { id: 'classic', name: 'Classic' }
//   ]
  
//   const fontFamilies = [
//     { id: 'sans', name: 'Sans-serif' },
//     { id: 'serif', name: 'Serif' },
//     { id: 'mono', name: 'Monospace' }
//   ]

//   return (
//     <div className="flex items-center gap-4">
//       <div>
//         <label htmlFor="template-select" className="block text-sm font-medium text-gray-700 mb-1">
//           Template
//         </label>
//         <select
//           id="template-select"
//           value={selectedTemplate}
//           onChange={(e) => onTemplateChange(e.target.value)}
//           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//         >
//           {templates.map(template => (
//             <option key={template.id} value={template.id}>
//               {template.name}
//             </option>
//           ))}
//         </select>
//       </div>
      
//       <button
//         type="button"
//         onClick={() => setShowThemeOptions(!showThemeOptions)}
//         className="btn btn-secondary"
//       >
//         Customize Theme
//       </button>
      
//       {showThemeOptions && (
//         <div className="absolute right-4 top-4 mt-82 w-64 bg-white rounded-md shadow-lg z-10 p-4">

// <button 
//   onClick={() => setShowThemeOptions(false)} 
//   className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
// >
//   &times;
// </button>
//           <h3 className="text-lg font-medium text-gray-900 mb-3">Theme Options</h3>
          
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Font Family
//             </label>
//             <select
//               value={themeOptions.fontFamily}
//               onChange={(e) => onThemeChange({ fontFamily: e.target.value })}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//             >
//               {fontFamilies.map(font => (
//                 <option key={font.id} value={font.id}>
//                   {font.name}
//                 </option>
//               ))}
//             </select>
//           </div>
          
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Primary Color
//             </label>
//             <input
//               type="color"
//               value={themeOptions.primaryColor}
//               onChange={(e) => onThemeChange({ primaryColor: e.target.value })}
//               className="block w-full h-8 rounded-md border-gray-300"
//             />
//           </div>
          
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Background Color
//             </label>
//             <input
//               type="color"
//               value={themeOptions.backgroundColor}
//               onChange={(e) => onThemeChange({ backgroundColor: e.target.value })}
//               className="block w-full h-8 rounded-md border-gray-300"
//             />
//           </div>
          
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Text Color
//             </label>
//             <input
//               type="color"
//               value={themeOptions.textColor}
//               onChange={(e) => onThemeChange({ textColor: e.target.value })}
//               className="block w-full h-8 rounded-md border-gray-300"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default TemplateSelector


//new code

// import { useState, useEffect ,useRef } from 'react'
// import axios from '../api/axios';  // Add this import at the top
// import { useNavigate } from 'react-router-dom' // Import useNavigate
// import { FaUser } from 'react-icons/fa' // Import FaUser from react-icons


// function TemplateSelector({ selectedTemplate, onTemplateChange, themeOptions, onThemeChange }) {
//   const [showThemeOptions, setShowThemeOptions] = useState(false)
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false)
//   const [userInfo, setUserInfo] = useState(null)
//   const navigate = useNavigate() // Initialize useNavigate
//   const profileDropdownRef = useRef(null) // Ref for the profile dropdown

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await axios.get('/auth/me', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//           }
//         })
//         console.log(response.data)
//         setUserInfo(response.data)
//       } catch (error) {
//         console.error('Error fetching user info:', error)
//       }
//     }

//     fetchUserInfo()
//   }, [])

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
//         setShowProfileDropdown(false) // Close the dropdown if clicked outside
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])


//   const handleLogout = () => {
//     localStorage.removeItem('token') // Remove the token from localStorage
//     navigate('/') // Redirect to the home page
//   }

//   const templates = [
//     { id: 'modern', name: 'Modern' },
//     { id: 'classic', name: 'Classic' }
//   ]
  
//   const fontFamilies = [
//     { id: 'sans', name: 'Sans-serif' },
//     { id: 'serif', name: 'Serif' },
//     { id: 'mono', name: 'Monospace' }
//   ]

//   return (
//     <div className="flex items-center gap-4">
//       <div>
//         <label htmlFor="template-select" className="block text-sm font-medium text-gray-700 mb-1">
//           Template
//         </label>
//         <select
//           id="template-select"
//           value={selectedTemplate}
//           onChange={(e) => onTemplateChange(e.target.value)}
//           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//         >
//           {templates.map(template => (
//             <option key={template.id} value={template.id}>
//               {template.name}
//             </option>
//           ))}
//         </select>
//       </div>
      
//       <button
//         type="button"
//         onClick={() => setShowThemeOptions(!showThemeOptions)}
//         className="btn btn-secondary"
//       >
//         Customize Theme
//       </button>

//       <div className="relative" ref={profileDropdownRef}>
//         <button
//           type="button"
//           onClick={() => setShowProfileDropdown(!showProfileDropdown)}
//           className="btn btn-secondary flex items-center gap-2"
//         >
//           <FaUser className="text-lg" /> {/* Profile icon */}
//         </button>


// {showProfileDropdown && userInfo && (
//   <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-4 max-h-40 overflow-y-auto">
//     <h3 className="text-sm font-medium text-gray-900 mb-3">Profile</h3>
//     <div className="space-y-1">
//       <div className="text-sm text-gray-700 flex items-center group relative">
//         <strong className="w-16">Name:</strong>
//         <span className="flex-1 truncate group-hover:whitespace-normal group-hover:overflow-visible group-hover:z-20 group-hover:bg-gray-100 group-hover:p-1">
//           {userInfo.user.firstName} {userInfo.user.lastName}
//         </span>
//       </div>
//       <div className="text-sm text-gray-700 flex items-center group relative">
//         <strong className="w-16">Email:</strong>
//         <span className="flex-1 truncate group-hover:whitespace-normal group-hover:overflow-visible group-hover:z-20 group-hover:bg-gray-100 group-hover:p-1">
//           {userInfo.user.email}
//         </span>
//       </div>
//     </div>
//     <button
//               onClick={handleLogout}
//               className="mt-4 w-full bg-red-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-red-600"
//             >
//               Logout
//             </button>
//   </div>
// )}

//   </div>
      
//       {showThemeOptions && (
//         <div className="absolute right-4 mt-32 w-64 bg-white rounded-md shadow-lg z-10 p-4">
//           <h3 className="text-lg font-medium text-gray-900 mb-3">Theme Options</h3>
          
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Font Family
//             </label>
//             <select
//               value={themeOptions.fontFamily}
//               onChange={(e) => onThemeChange({ fontFamily: e.target.value })}
//               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//             >
//               {fontFamilies.map(font => (
//                 <option key={font.id} value={font.id}>
//                   {font.name}
//                 </option>
//               ))}
//             </select>
//           </div>
          
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Primary Color
//             </label>
//             <input
//               type="color"
//               value={themeOptions.primaryColor}
//               onChange={(e) => onThemeChange({ primaryColor: e.target.value })}
//               className="block w-full h-8 rounded-md border-gray-300"
//             />
//           </div>
          
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Background Color
//             </label>
//             <input
//               type="color"
//               value={themeOptions.backgroundColor}
//               onChange={(e) => onThemeChange({ backgroundColor: e.target.value })}
//               className="block w-full h-8 rounded-md border-gray-300"
//             />
//           </div>
          
//           <div className="mb-3">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Text Color
//             </label>
//             <input
//               type="color"
//               value={themeOptions.textColor}
//               onChange={(e) => onThemeChange({ textColor: e.target.value })}
//               className="block w-full h-8 rounded-md border-gray-300"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default TemplateSelector

// logout resolved code 

import { useState, useEffect, useRef } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function TemplateSelector({ selectedTemplate, onTemplateChange, themeOptions, onThemeChange,setIsAuthenticated }) {
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return; // Early return if no token
        const response = await axios.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
        if (error.response?.status === 401) {
          handleLogout(); // Auto-logout on unauthorized access
        }
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token
    setUserInfo(null); // Clear user info to trigger UI updates
    setShowProfileDropdown(false); // Close dropdown
     // Update auth state
  setIsAuthenticated(false); 
    navigate('/'); // Redirect to landing page
    // Dispatch a custom event to notify other components (e.g., sidebar)
    window.dispatchEvent(new Event('authChange'));
  };

  const templates = [
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
  ];

  const fontFamilies = [
    { id: 'sans', name: 'Sans-serif' },
    { id: 'serif', name: 'Serif' },
    { id: 'mono', name: 'Monospace' },
  ];

  return (
    <div className="flex items-center gap-4">
      <div>
        <label htmlFor="template-select" className="block text-sm font-medium text-gray-700 mb-1">
          Template
        </label>
        <select
          id="template-select"
          value={selectedTemplate}
          onChange={(e) => onTemplateChange(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          {templates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={() => setShowThemeOptions(!showThemeOptions)}
        className="btn btn-secondary"
      >
        Customize Theme
      </button>

      <div className="relative" ref={profileDropdownRef}>
        <button
          type="button"
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          className="btn btn-secondary flex items-center gap-2"
        >
          <FaUser className="text-lg" />
        </button>

        {showProfileDropdown && userInfo && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 p-4 max-h-40 overflow-y-auto">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Profile</h3>
            <div className="space-y-1">
              <div className="text-sm text-gray-700 flex items-center group relative">
                <strong className="w-16">Name:</strong>
                <span className="flex-1 truncate group-hover:whitespace-normal group-hover:overflow-visible group-hover:z-20 group-hover:bg-gray-100 group-hover:p-1">
                  {userInfo.user.firstName} {userInfo.user.lastName}
                </span>
              </div>
              <div className="text-sm text-gray-700 flex items-center group relative">
                <strong className="w-16">Email:</strong>
                <span className="flex-1 truncate group-hover:whitespace-normal group-hover:overflow-visible group-hover:z-20 group-hover:bg-gray-100 group-hover:p-1">
                  {userInfo.user.email}
                </span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 w-full bg-red-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {showThemeOptions && (
        <div className="absolute right-4 mt-32 w-64 bg-white rounded-md shadow-lg z-10 p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Theme Options</h3>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Font Family
            </label>
            <select
              value={themeOptions.fontFamily}
              onChange={(e) => onThemeChange({ fontFamily: e.target.value })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              {fontFamilies.map((font) => (
                <option key={font.id} value={font.id}>
                  {font.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Color
            </label>
            <input
              type="color"
              value={themeOptions.primaryColor}
              onChange={(e) => onThemeChange({ primaryColor: e.target.value })}
              className="block w-full h-8 rounded-md border-gray-300"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Background Color
            </label>
            <input
              type="color"
              value={themeOptions.backgroundColor}
              onChange={(e) => onThemeChange({ backgroundColor: e.target.value })}
              className="block w-full h-8 rounded-md border-gray-300"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Text Color
            </label>
            <input
              type="color"
              value={themeOptions.textColor}
              onChange={(e) => onThemeChange({ textColor: e.target.value })}
              className="block w-full h-8 rounded-md border-gray-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TemplateSelector;