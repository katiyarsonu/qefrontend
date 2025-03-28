
// import { useState } from 'react'
// import api from '../../api/axios.js'

//  function PersonalInfoForm({ data, onChange }) {
//   const [suggestions, setSuggestions] = useState([]);
//   // Add a default empty object if data is undefined
//   const safeData = data || {};
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     onChange({
//       ...safeData,
//       [name]: value
//     });
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Personal Information</h2>

//        {/* Full Name */}
//        <div className="mb-4">
//          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//            Full Name
//          </label>
//          <input
//           id="name"
//           type="text"
//           name="name"
//           value={safeData.name || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="John Doe"
//         />
//       </div>

//        {/* Professional Title */}
//        <div className="mb-4">
//          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//            Professional Title
//          </label>
//          <input
//           id="title"
//           type="text"
//           name="title"
//           value={safeData.title || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="Software Developer"
//         />
//       </div>

//        {/* Email */}
//        <div className="mb-4">
//          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//            Email
//          </label>
//          <input
//           id="email"
//           type="email"
//           name="email"
//           value={safeData.email || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="john.doe@example.com"
//           required
//         />
//       </div>

//        {/* Phone */}
//        <div className="mb-4">
//          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//            Phone
//          </label>
//          <input
//           id="phone"
//           type="tel"
//           name="phone"
//           value={safeData.phone || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="(123) 456-7890"
//           pattern="[0-9\-+\s()]*"
//           required
//         />
//       </div>

//        {/* Address */}
//        <div className="mb-4">
//          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//            Address
//          </label>
//          <input
//           id="address"
//           type="text"
//           name="address"
//           value={safeData.address || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="San Francisco, CA"
//         />
//       </div>

//        {/* Professional Summary */}
//        <div className="mb-4">
//          <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
//            Professional Summary
//          </label>
//          <textarea
//           id="summary"
//           name="summary"
//           value={safeData.summary || ''}
//           onChange={handleChange}
//           rows="4"
//           className="input-field w-full"
//           placeholder="Brief overview of your professional background and key strengths"
//          ></textarea>
//          {/* <button
//            type="button"
//            className="mt-2 px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
//          >
//            Generate with AI
//          </button> */}


// <button
//           type="button"
//           className="mt-2 px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
//           onClick={async () => {
//             try {
//               const response = await api.post('/ai/suggestions', {
//                 resumeText: safeData.summary || ''
//               });
//               console.log('AI Suggestions Response:', response.data);
//               setSuggestions(response.data.suggestions || []);
//             } catch (error) {
//               console.error('AI Suggestions Error:', error);
//               setSuggestions(['Failed to get suggestions']);
//             }
//           }}
//         >
//           Generate with AI
//         </button>
//         {suggestions.length > 0 && (
//           <div className="mt-4 space-y-2">
//             {suggestions.map((suggestion, index) => (
//               <div 
//                 key={index}
//                 className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
//                 onClick={() => {
//                   onChange({
//                     ...safeData,
//                     summary: suggestion
//                   });
//                 }}
//               >
//                 {suggestion}
//               </div>
//             ))}
//           </div>
//         )}

//        </div>
//      </div>
//   );
// }

// export default PersonalInfoForm;



//complete working code



// import { useState } from 'react';
// import api from '../../api/axios.js';

// function PersonalInfoForm({ data, onChange }) {
//   const [suggestions, setSuggestions] = useState([]); // Always an array
//   const [showSuggestions, setShowSuggestions] = useState(false); // Control rendering

//   const safeData = data || {};

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     onChange({
//       ...safeData,
//       [name]: value,
//     });
//   };

//   const handleGenerateAI = async () => {
//     try {
//       const response = await api.post('/ai/suggestions', {
//         resumeText: safeData.summary || '',
//       });

//       console.log('AI Suggestions Response:', response.data);

//       // Parse the string response into an array of suggestions
//       const suggestionString = response.data.suggestions || '';
//       const newSuggestions = suggestionString
//         .split('\n') // Split by newline
//         .map((s) => s.trim()) // Remove leading/trailing whitespace
//         .filter((s) => s.length > 0) // Remove empty lines
//         .map((s) => s.replace(/^\*\s*/, '')); // Remove leading "* " from each suggestion

//       setSuggestions(newSuggestions);
//       setShowSuggestions(true); // Show suggestions when data is received
//     } catch (error) {
//       console.error('AI Suggestions Error:', error);
//       setSuggestions([]); // Reset to empty array on error
//       setShowSuggestions(false); // Hide on error
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Personal Information</h2>

//       {/* Full Name */}
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//           Full Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           value={safeData.name || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="John Doe"
//         />
//       </div>

//       {/* Professional Title */}
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//           Professional Title
//         </label>
//         <input
//           id="title"
//           type="text"
//           name="title"
//           value={safeData.title || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="Software Developer"
//         />
//       </div>

//       {/* Email */}
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//           Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={safeData.email || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="john.doe@example.com"
//           required
//         />
//       </div>

//       {/* Phone */}
//       <div className="mb-4">
//         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//           Phone
//         </label>
//         <input
//           id="phone"
//           type="tel"
//           name="phone"
//           value={safeData.phone || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="(123) 456-7890"
//           pattern="[0-9\-+\s()]*"
//           required
//         />
//       </div>

//       {/* Address */}
//       <div className="mb-4">
//         <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//           Address
//         </label>
//         <input
//           id="address"
//           type="text"
//           name="address"
//           value={safeData.address || ''}
//           onChange={handleChange}
//           className="input-field w-full"
//           placeholder="San Francisco, CA"
//         />
//       </div>

//       {/* Professional Summary */}
//       <div className="mb-4">
//         <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
//           Professional Summary
//         </label>
//         <textarea
//           id="summary"
//           name="summary"
//           value={safeData.summary || ''}
//           onChange={handleChange}
//           rows="4"
//           className="input-field w-full"
//           placeholder="Brief overview of your professional background and key strengths"
//         ></textarea>

//         {/* AI Suggestions Button */}
//         <button
//           type="button"
//           className="mt-2 px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
//           onClick={handleGenerateAI}
//         >
//           Generate with AI
//         </button>

//         {/* AI Suggestions List (Only render when showSuggestions is true) */}
//         {showSuggestions && suggestions.length > 0 && (
//           <div className="mt-4 space-y-2">
//             {suggestions.map((suggestion, index) => (
//               <div
//                 key={index}
//                 className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
//                 onClick={() => {
//                   onChange({
//                     ...safeData,
//                     summary: suggestion,
//                   });
//                   setShowSuggestions(false); // Hide after selection
//                 }}
//               >
//                 {suggestion}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PersonalInfoForm;




import { useState } from 'react';
import api from '../../api/axios.js';

function PersonalInfoForm({ data, onChange }) {
  const [suggestions, setSuggestions] = useState([]); // Always an array
  const [showSuggestions, setShowSuggestions] = useState(false); // Control rendering
  
  // START: Added states for loading and error
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // END: Added states for loading and error

  const safeData = data || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...safeData,
      [name]: value,
    });
  };

  const handleGenerateAI = async () => {
    // START: Loading and error handling logic
    setIsLoading(true);
    setErrorMessage(''); // Reset error message
    setShowSuggestions(false); // Hide suggestions while loading
    // END: Loading and error handling logic
    
    try {
      const response = await api.post('/ai/suggestions', {
        resumeText: safeData.summary || '',
      });

      console.log('AI Suggestions Response:', response.data);

      // Parse the string response into an array of suggestions
      const suggestionString = response.data.suggestions || '';
      const newSuggestions = suggestionString
        .split('\n') // Split by newline
        .map((s) => s.trim()) // Remove leading/trailing whitespace
        .filter((s) => s.length > 0) // Remove empty lines
        .map((s) => s.replace(/^\*\s*/, '')); // Remove leading "* " from each suggestion

      setSuggestions(newSuggestions);
      setShowSuggestions(true); // Show suggestions when data is received
    } catch (error) {
      console.error('AI Suggestions Error:', error);
      setSuggestions([]); // Reset to empty array on error
      setShowSuggestions(false); // Hide on error
      // START: Set error message on failure
      setErrorMessage('Failed to generate suggestions. Please try again.');
      // END: Set error message on failure
    }
    // START: Stop loading after response or error
    setIsLoading(false);
    // END: Stop loading after response or error
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={safeData.name || ''}
          onChange={handleChange}
          className="input-field w-full"
          placeholder="John Doe"
        />
      </div>

      {/* Professional Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Professional Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={safeData.title || ''}
          onChange={handleChange}
          className="input-field w-full"
          placeholder="Software Developer"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={safeData.email || ''}
          onChange={handleChange}
          className="input-field w-full"
          placeholder="john.doe@example.com"
          required
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={safeData.phone || ''}
          onChange={handleChange}
          className="input-field w-full"
          placeholder="(123) 456-7890"
          pattern="[0-9\-+\s()]*"
          required
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input
          id="address"
          type="text"
          name="address"
          value={safeData.address || ''}
          onChange={handleChange}
          className="input-field w-full"
          placeholder="San Francisco, CA"
        />
      </div>

      {/* Professional Summary */}
      <div className="mb-4">
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
          Professional Summary
        </label>
        <textarea
          id="summary"
          name="summary"
          value={safeData.summary || ''}
          onChange={handleChange}
          rows="4"
          className="input-field w-full"
          placeholder="Brief overview of your professional background and key strengths"
        ></textarea>

        {/* AI Suggestions Button */}
        <button
          type="button"
          className="mt-2 px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
          onClick={handleGenerateAI}
          disabled={isLoading} // START: Disable button while loading
        >
          {/* START: Show loading icon or text */}
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin h-4 w-4 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </span>
          ) : (
            'Generate with AI'
          )}
          {/* END: Show loading icon or text */}
        </button>

        {/* START: Display error message if exists */}
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
        )}
        {/* END: Display error message if exists */}

        {/* AI Suggestions List (Only render when showSuggestions is true) */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="mt-4 space-y-2">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onChange({
                    ...safeData,
                    summary: suggestion,
                  });
                  setShowSuggestions(false); // Hide after selection
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfoForm;