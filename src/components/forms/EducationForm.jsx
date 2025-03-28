// import { v4 as uuidv4 } from 'uuid'

// function EducationForm({ education, onChange }) {
//   const addEducation = () => {
//     const newEducation = {
//       id: uuidv4(),
//       degree: "",
//       institution: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       description: ""
//     }
//     onChange([...education, newEducation])
//   }

//   const updateEducation = (id, field, value) => {
//     const updatedEducation = education.map(edu => 
//       edu.id === id ? { ...edu, [field]: value } : edu
//     )
//     onChange(updatedEducation)
//   }

//   const removeEducation = (id) => {
//     const updatedEducation = education.filter(edu => edu.id !== id)
//     onChange(updatedEducation)
//   }

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Education</h2>
//         <button 
//           onClick={addEducation}
//           className="btn bg-green-600 text-white hover:bg-green-700"
//         >
//           Add Education
//         </button>
//       </div>
      
//       {education.length === 0 ? (
//         <p className="text-gray-500 italic">No education added yet. Click "Add Education" to get started.</p>
//       ) : (
//         <div className="space-y-6">
//           {education.map(edu => (
//             <div key={edu.id} className="border border-gray-200 rounded-md p-4">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="font-semibold">{edu.degree || 'New Education'}</h3>
//                 <button 
//                   onClick={() => removeEducation(edu.id)}
//                   className="p-1 text-red-600 hover:text-red-800"
//                   aria-label="Remove education"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Degree
//                   </label>
//                   <input
//                     type="text"
//                     value={edu.degree || ''}
//                     onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
//                     className="input-field"
//                     placeholder="Bachelor of Science in Computer Science"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Institution
//                   </label>
//                   <input
//                     type="text"
//                     value={edu.institution || ''}
//                     onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
//                     className="input-field"
//                     placeholder="University Name"
//                   />
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     value={edu.location || ''}
//                     onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
//                     className="input-field"
//                     placeholder="City, State"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Start Date
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       value={edu.startDate || ''}
//                       onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
//                       className="input-field w-full"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     End Date
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       value={edu.endDate || ''}
//                       onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
//                       className="input-field w-full"
//                     />
//                   </div>
//                   <div className="mt-1">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={edu.endDate === 'Present'}
//                         onChange={(e) => {
//                           updateEducation(edu.id, 'endDate', e.target.checked ? 'Present' : '')
//                         }}
//                         className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                       />
//                       <span className="ml-2 text-sm text-gray-600">Currently Studying</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Description
//                 </label>
//                 <textarea
//                   value={edu.description || ''}
//                   onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
//                   rows="3"
//                   className="input-field"
//                   placeholder="Describe your studies, achievements, etc."
//                 ></textarea>
//                 <div className="mt-2 flex gap-2">
//                   <button
//                     type="button"
//                     className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
//                   >
//                     Generate with AI
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       const bullets = edu.bullets || [];
//                       updateEducation(edu.id, 'bullets', [...bullets, { id: uuidv4(), text: '', checked: true }]);
//                     }}
//                     className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
//                   >
//                     Add Bullet
//                   </button>
//                 </div>
                
//                 {/* Bullet Points */}
//                 {edu.bullets && edu.bullets.length > 0 && (
//                   <div className="mt-3 space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">Bullet Points</label>
//                     {edu.bullets.map((bullet, index) => (
//                       <div key={bullet.id} className="flex items-start gap-2">
//                         <input
//                           type="checkbox"
//                           checked={bullet.checked}
//                           onChange={() => {
//                             const updatedBullets = [...edu.bullets];
//                             updatedBullets[index] = { ...bullet, checked: !bullet.checked };
//                             updateEducation(edu.id, 'bullets', updatedBullets);
//                           }}
//                           className="mt-1"
//                         />
//                         <input
//                           type="text"
//                           value={bullet.text}
//                           onChange={(e) => {
//                             const updatedBullets = [...edu.bullets];
//                             updatedBullets[index] = { ...bullet, text: e.target.value };
//                             updateEducation(edu.id, 'bullets', updatedBullets);
//                           }}
//                           className="flex-grow input-field py-1"
//                           placeholder="Bullet point"
//                         />
//                         <div className="flex space-x-1">
//                           <button
//                             type="button"
//                             onClick={() => {
//                               const updatedBullets = [...edu.bullets];
//                               updatedBullets.splice(index, 1);
//                               updateEducation(edu.id, 'bullets', updatedBullets);
//                             }}
//                             className="p-1 text-red-600 hover:text-red-800"
//                             aria-label="Delete bullet"
//                           >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                               <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                             </svg>
//                           </button>
//                           <button
//                             type="button"
//                             className="p-1 text-purple-600 hover:text-purple-800"
//                             aria-label="Generate with AI"
//                           >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                               <path d="M13.5 9.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5z"/>
//                               <path d="M10 2.5c-1.8 0-3.5.9-4.6 2.4v-.9H4.3v.8c-1.1 1.5-1.7 3.4-1.7 5.2 0 4.9 4 8.9 8.9 8.9s8.9-4 8.9-8.9-4-8.9-8.9-8.9h-.5zM5.8 9.6c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm6.3 0c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zM10 15.3c-2.3 0-4.3-1.6-4.8-3.7h9.6c-.5 2.1-2.5 3.7-4.8 3.7z"/>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default EducationForm




// import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react';
// import api from '../../api/axios.js'; // Assuming you have this API setup

// function EducationForm({ education, onChange }) {
//   const [suggestions, setSuggestions] = useState([]); // Store AI suggestions
//   const [showSuggestions, setShowSuggestions] = useState(false); // Control suggestion visibility

//   const addEducation = () => {
//     const newEducation = {
//       id: uuidv4(),
//       degree: "",
//       institution: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//       bullets: []
//     };
//     onChange([...education, newEducation]);
//   };

//   const updateEducation = (id, field, value) => {
//     const updatedEducation = education.map(edu => 
//       edu.id === id ? { ...edu, [field]: value } : edu
//     );
//     onChange(updatedEducation);
//   };

//   const removeEducation = (id) => {
//     const updatedEducation = education.filter(edu => edu.id !== id);
//     onChange(updatedEducation);
//   };

//   const handleGenerateAI = async (eduId) => {
//     try {
//       const currentEdu = education.find(edu => edu.id === eduId);
//       const response = await api.post('/ai/suggestions', {
//         resumeText: currentEdu.description || '',
//       });

//       const suggestionString = response.data.suggestions || '';
//       const newSuggestions = suggestionString
//         .split('\n')
//         .map(s => s.trim())
//         .filter(s => s.length > 0)
//         .map(s => s.replace(/^\*\s*/, ''));

//       setSuggestions(newSuggestions);
//       setShowSuggestions(true);
//     } catch (error) {
//       console.error('AI Suggestions Error:', error);
//       setSuggestions([]);
//       setShowSuggestions(false);
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Education</h2>
//         <button 
//           onClick={addEducation}
//           className="btn bg-green-600 text-white hover:bg-green-700"
//         >
//           Add Education
//         </button>
//       </div>
      
//       {education.length === 0 ? (
//         <p className="text-gray-500 italic">No education added yet. Click "Add Education" to get started.</p>
//       ) : (
//         <div className="space-y-6">
//           {education.map(edu => (
//             <div key={edu.id} className="border border-gray-200 rounded-md p-4">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="font-semibold">{edu.degree || 'New Education'}</h3>
//                 <button 
//                   onClick={() => removeEducation(edu.id)}
//                   className="p-1 text-red-600 hover:text-red-800"
//                   aria-label="Remove education"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
//                   <input
//                     type="text"
//                     value={edu.degree || ''}
//                     onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
//                     className="input-field"
//                     placeholder="Bachelor of Science in Computer Science"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
//                   <input
//                     type="text"
//                     value={edu.institution || ''}
//                     onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
//                     className="input-field"
//                     placeholder="University Name"
//                   />
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//                   <input
//                     type="text"
//                     value={edu.location || ''}
//                     onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
//                     className="input-field"
//                     placeholder="City, State"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
//                   <input
//                     type="date"
//                     value={edu.startDate || ''}
//                     onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
//                     className="input-field w-full"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
//                   <input
//                     type="date"
//                     value={edu.endDate || ''}
//                     onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
//                     className="input-field w-full"
//                   />
//                   <div className="mt-1">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={edu.endDate === 'Present'}
//                         onChange={(e) => updateEducation(edu.id, 'endDate', e.target.checked ? 'Present' : '')}
//                         className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                       />
//                       <span className="ml-2 text-sm text-gray-600">Currently Studying</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                 <textarea
//                   value={edu.description || ''}
//                   onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
//                   rows="3"
//                   className="input-field"
//                   placeholder="Describe your studies, achievements, etc."
//                 ></textarea>
//                 <div className="mt-2 flex gap-2">
//                   <button
//                     type="button"
//                     onClick={() => handleGenerateAI(edu.id)}
//                     className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
//                   >
//                     Generate with AI
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       const bullets = edu.bullets || [];
//                       updateEducation(edu.id, 'bullets', [...bullets, { id: uuidv4(), text: '', checked: true }]);
//                     }}
//                     className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
//                   >
//                     Add Bullet
//                   </button>
//                 </div>

//                 {/* AI Suggestions */}
//                 {showSuggestions && suggestions.length > 0 && (
//                   <div className="mt-4 space-y-2">
//                     {suggestions.map((suggestion, index) => (
//                       <div
//                         key={index}
//                         className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
//                         onClick={() => {
//                           updateEducation(edu.id, 'description', suggestion);
//                           setShowSuggestions(false);
//                           setSuggestions([]);
//                         }}
//                       >
//                         {suggestion}
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Bullet Points */}
//                 {edu.bullets && edu.bullets.length > 0 && (
//                   <div className="mt-3 space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">Bullet Points</label>
//                     {edu.bullets.map((bullet, index) => (
//                       <div key={bullet.id} className="flex items-start gap-2">
//                         <input
//                           type="checkbox"
//                           checked={bullet.checked}
//                           onChange={() => {
//                             const updatedBullets = [...edu.bullets];
//                             updatedBullets[index] = { ...bullet, checked: !bullet.checked };
//                             updateEducation(edu.id, 'bullets', updatedBullets);
//                           }}
//                           className="mt-1"
//                         />
//                         <input
//                           type="text"
//                           value={bullet.text}
//                           onChange={(e) => {
//                             const updatedBullets = [...edu.bullets];
//                             updatedBullets[index] = { ...bullet, text: e.target.value };
//                             updateEducation(edu.id, 'bullets', updatedBullets);
//                           }}
//                           className="flex-grow input-field py-1"
//                           placeholder="Bullet point"
//                         />
//                         <div className="flex space-x-1">
//                           <button
//                             type="button"
//                             onClick={() => {
//                               const updatedBullets = [...edu.bullets];
//                               updatedBullets.splice(index, 1);
//                               updateEducation(edu.id, 'bullets', updatedBullets);
//                             }}
//                             className="p-1 text-red-600 hover:text-red-800"
//                           >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                               <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default EducationForm;



// changed with the section error in the code

// import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react';
// import api from '../../api/axios.js';

// function EducationForm({ education, onChange }) {
//   // Changed to store suggestions by education ID
//   const [suggestionsById, setSuggestionsById] = useState({}); 
//   // Changed to store visibility by education ID
//   const [showSuggestionsById, setShowSuggestionsById] = useState({});

//   const addEducation = () => {
//     const newEducation = {
//       id: uuidv4(),
//       degree: "",
//       institution: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//       bullets: []
//     };
//     onChange([...education, newEducation]);
//   };

//   const updateEducation = (id, field, value) => {
//     const updatedEducation = education.map(edu => 
//       edu.id === id ? { ...edu, [field]: value } : edu
//     );
//     onChange(updatedEducation);
//   };

//   const removeEducation = (id) => {
//     const updatedEducation = education.filter(edu => edu.id !== id);
//     onChange(updatedEducation);
//   };

//   const handleGenerateAI = async (eduId) => {
//     try {
//       const currentEdu = education.find(edu => edu.id === eduId);
//       const response = await api.post('/ai/suggestions', {
//         resumeText: currentEdu.description || '',
//       });

//       const suggestionString = response.data.suggestions || '';
//       const newSuggestions = suggestionString
//         .split('\n')
//         .map(s => s.trim())
//         .filter(s => s.length > 0)
//         .map(s => s.replace(/^\*\s*/, ''));

//       // Update suggestions specific to this education ID
//       setSuggestionsById(prev => ({
//         ...prev,
//         [eduId]: newSuggestions
//       }));
//       setShowSuggestionsById(prev => ({
//         ...prev,
//         [eduId]: true
//       }));
//     } catch (error) {
//       console.error('AI Suggestions Error:', error);
//       setSuggestionsById(prev => ({
//         ...prev,
//         [eduId]: []
//       }));
//       setShowSuggestionsById(prev => ({
//         ...prev,
//         [eduId]: false
//       }));
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Education</h2>
//         <button 
//           onClick={addEducation}
//           className="btn bg-green-600 text-white hover:bg-green-700"
//         >
//           Add Education
//         </button>
//       </div>
      
//       {education.length === 0 ? (
//         <p className="text-gray-500 italic">No education added yet. Click "Add Education" to get started.</p>
//       ) : (
//         <div className="space-y-6">
//           {education.map(edu => (
//             <div key={edu.id} className="border border-gray-200 rounded-md p-4">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="font-semibold">{edu.degree || 'New Education'}</h3>
//                 <button 
//                   onClick={() => removeEducation(edu.id)}
//                   className="p-1 text-red-600 hover:text-red-800"
//                   aria-label="Remove education"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
//                   <input
//                     type="text"
//                     value={edu.degree || ''}
//                     onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
//                     className="input-field"
//                     placeholder="Bachelor of Science in Computer Science"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
//                   <input
//                     type="text"
//                     value={edu.institution || ''}
//                     onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
//                     className="input-field"
//                     placeholder="University Name"
//                   />
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//                   <input
//                     type="text"
//                     value={edu.location || ''}
//                     onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
//                     className="input-field"
//                     placeholder="City, State"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
//                   <input
//                     type="date"
//                     value={edu.startDate || ''}
//                     onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
//                     className="input-field w-full"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
//                   <input
//                     type="date"
//                     value={edu.endDate || ''}
//                     onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
//                     className="input-field w-full"
//                   />
//                   <div className="mt-1">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={edu.endDate === 'Present'}
//                         onChange={(e) => updateEducation(edu.id, 'endDate', e.target.checked ? 'Present' : '')}
//                         className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                       />
//                       <span className="ml-2 text-sm text-gray-600">Currently Studying</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                 <textarea
//                   value={edu.description || ''}
//                   onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
//                   rows="3"
//                   className="input-field"
//                   placeholder="Describe your studies, achievements, etc."
//                 ></textarea>
//                 <div className="mt-2 flex gap-2">
//                   <button
//                     type="button"
//                     onClick={() => handleGenerateAI(edu.id)}
//                     className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
//                   >
//                     Generate with AI
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       const bullets = edu.bullets || [];
//                       updateEducation(edu.id, 'bullets', [...bullets, { id: uuidv4(), text: '', checked: true }]);
//                     }}
//                     className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
//                   >
//                     Add Bullet
//                   </button>
//                 </div>

//                 {/* AI Suggestions - Now specific to each education ID */}
//                 {showSuggestionsById[edu.id] && suggestionsById[edu.id]?.length > 0 && (
//                   <div className="mt-4 space-y-2">
//                     {suggestionsById[edu.id].map((suggestion, index) => (
//                       <div
//                         key={index}
//                         className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
//                         onClick={() => {
//                           updateEducation(edu.id, 'description', suggestion);
//                           setShowSuggestionsById(prev => ({
//                             ...prev,
//                             [edu.id]: false
//                           }));
//                           setSuggestionsById(prev => ({
//                             ...prev,
//                             [edu.id]: []
//                           }));
//                         }}
//                       >
//                         {suggestion}
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Bullet Points */}
//                 {edu.bullets && edu.bullets.length > 0 && (
//                   <div className="mt-3 space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">Bullet Points</label>
//                     {edu.bullets.map((bullet, index) => (
//                       <div key={bullet.id} className="flex items-start gap-2">
//                         <input
//                           type="checkbox"
//                           checked={bullet.checked}
//                           onChange={() => {
//                             const updatedBullets = [...edu.bullets];
//                             updatedBullets[index] = { ...bullet, checked: !bullet.checked };
//                             updateEducation(edu.id, 'bullets', updatedBullets);
//                           }}
//                           className="mt-1"
//                         />
//                         <input
//                           type="text"
//                           value={bullet.text}
//                           onChange={(e) => {
//                             const updatedBullets = [...edu.bullets];
//                             updatedBullets[index] = { ...bullet, text: e.target.value };
//                             updateEducation(edu.id, 'bullets', updatedBullets);
//                           }}
//                           className="flex-grow input-field py-1"
//                           placeholder="Bullet point"
//                         />
//                         <div className="flex space-x-1">
//                           <button
//                             type="button"
//                             onClick={() => {
//                               const updatedBullets = [...edu.bullets];
//                               updatedBullets.splice(index, 1);
//                               updateEducation(edu.id, 'bullets', updatedBullets);
//                             }}
//                             className="p-1 text-red-600 hover:text-red-800"
//                           >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                               <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default EducationForm;


//generative working 

// import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react';
// import api from '../../api/axios.js';

// function EducationForm({ education, onChange }) {
//   // Changed to store suggestions by education ID
//   const [suggestionsById, setSuggestionsById] = useState({}); 
//   // Changed to store visibility by education ID
//   const [showSuggestionsById, setShowSuggestionsById] = useState({});
//   // START: Added states for loading and error by education ID
//   const [isLoadingById, setIsLoadingById] = useState({});
//   const [errorMessageById, setErrorMessageById] = useState({});
//   // END: Added states for loading and error by education ID

//   const addEducation = () => {
//     const newEducation = {
//       id: uuidv4(),
//       degree: "",
//       institution: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//       bullets: []
//     };
//     onChange([...education, newEducation]);
//   };

//   const updateEducation = (id, field, value) => {
//     const updatedEducation = education.map(edu => 
//       edu.id === id ? { ...edu, [field]: value } : edu
//     );
//     onChange(updatedEducation);
//   };

//   const removeEducation = (id) => {
//     const updatedEducation = education.filter(edu => edu.id !== id);
//     onChange(updatedEducation);
//   };

//   const handleGenerateAI = async (eduId) => {
//     // START: Loading and error handling logic
//     setIsLoadingById(prev => ({ ...prev, [eduId]: true }));
//     setErrorMessageById(prev => ({ ...prev, [eduId]: '' })); // Reset error message
//     setShowSuggestionsById(prev => ({ ...prev, [eduId]: false })); // Hide suggestions while loading
//     // END: Loading and error handling logic
    
//     try {
//       const currentEdu = education.find(edu => edu.id === eduId);
//       const response = await api.post('/ai/suggestions', {
//         resumeText: currentEdu.description || '',
//       });

//       const suggestionString = response.data.suggestions || '';
//       const newSuggestions = suggestionString
//         .split('\n')
//         .map(s => s.trim())
//         .filter(s => s.length > 0)
//         .map(s => s.replace(/^\*\s*/, ''));

//       // Update suggestions specific to this education ID
//       setSuggestionsById(prev => ({
//         ...prev,
//         [eduId]: newSuggestions
//       }));
//       setShowSuggestionsById(prev => ({
//         ...prev,
//         [eduId]: true
//       }));
//     } catch (error) {
//       console.error('AI Suggestions Error:', error);
//       setSuggestionsById(prev => ({
//         ...prev,
//         [eduId]: []
//       }));
//       setShowSuggestionsById(prev => ({
//         ...prev,
//         [eduId]: false
//       }));
//       // START: Set error message on failure
//       setErrorMessageById(prev => ({
//         ...prev,
//         [eduId]: 'Failed to generate suggestions. Please try again.'
//       }));
//       // END: Set error message on failure
//     }
//     // START: Stop loading after response or error
//     setIsLoadingById(prev => ({ ...prev, [eduId]: false }));
//     // END: Stop loading after response or error
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Education</h2>
//         <button 
//           onClick={addEducation}
//           className="btn bg-green-600 text-white hover:bg-green-700"
//         >
//           Add Education
//         </button>
//       </div>
      
//       {education.length === 0 ? (
//         <p className="text-gray-500 italic">No education added yet. Click "Add Education" to get started.</p>
//       ) : (
//         <div className="space-y-6">
//           {education.map(edu => (
//             <div key={edu.id} className="border border-gray-200 rounded-md p-4">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="font-semibold">{edu.degree || 'New Education'}</h3>
//                 <button 
//                   onClick={() => removeEducation(edu.id)}
//                   className="p-1 text-red-600 hover:text-red-800"
//                   aria-label="Remove education"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
//                   <input
//                     type="text"
//                     value={edu.degree || ''}
//                     onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
//                     className="input-field"
//                     placeholder="Bachelor of Science in Computer Science"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
//                   <input
//                     type="text"
//                     value={edu.institution || ''}
//                     onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
//                     className="input-field"
//                     placeholder="University Name"
//                   />
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//                   <input
//                     type="text"
//                     value={edu.location || ''}
//                     onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
//                     className="input-field"
//                     placeholder="City, State"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
//                   <input
//                     type="date"
//                     value={edu.startDate || ''}
//                     onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
//                     className="input-field w-full"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
//                   {/* START: Conditional rendering for endDate */}
//                   {edu.endDate === 'Present' ? (
//                     <div className="input-field w-full flex items-center text-gray-700">
//                       Present
//                     </div>
//                   ) : (
//                     <input
//                       type="date"
//                       value={edu.endDate || ''}
//                       onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
//                       className="input-field w-full"
//                     />
//                   )}
//                   {/* END: Conditional rendering for endDate */}
//                   <div className="mt-1">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={edu.endDate === 'Present'}
//                         onChange={(e) => updateEducation(edu.id, 'endDate', e.target.checked ? 'Present' : '')}
//                         className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                       />
//                       <span className="ml-2 text-sm text-gray-600">Currently Studying</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                 <textarea
//                   value={edu.description || ''}
//                   onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
//                   rows="3"
//                   className="input-field"
//                   placeholder="Describe your studies, achievements, etc."
//                 ></textarea>
//                 <div className="mt-2 flex gap-2">
//                   <button
//                     type="button"
//                     onClick={() => handleGenerateAI(edu.id)}
//                     className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
//                     disabled={isLoadingById[edu.id]} // START: Disable button while loading
//                   >
//                     {/* START: Show loading icon or text */}
//                     {isLoadingById[edu.id] ? (
//                       <span className="flex items-center">
//                         <svg
//                           className="animate-spin h-4 w-4 mr-2 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Loading...
//                       </span>
//                     ) : (
//                       'Generate with AI'
//                     )}
//                     {/* END: Show loading icon or text */}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       const bullets = edu.bullets || [];
//                       updateEducation(edu.id, 'bullets', [...bullets, { id: uuidv4(), text: '', checked: true }]);
//                     }}
//                     className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
//                   >
//                     Add Bullet
//                   </button>
//                 </div>

//                 {/* START: Display error message if exists */}
//                 {errorMessageById[edu.id] && (
//                   <p className="mt-2 text-sm text-red-600">{errorMessageById[edu.id]}</p>
//                 )}
//                 {/* END: Display error message if exists */}

//                 {/* AI Suggestions - Now specific to each education ID */}
//                 {showSuggestionsById[edu.id] && suggestionsById[edu.id]?.length > 0 && (
//                   <div className="mt-4 space-y-2">
//                     {suggestionsById[edu.id].map((suggestion, index) => (
//                       <div
//                         key={index}
//                         className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
//                         onClick={() => {
//                           updateEducation(edu.id, 'description', suggestion);
//                           setShowSuggestionsById(prev => ({
//                             ...prev,
//                             [edu.id]: false
//                           }));
//                           setSuggestionsById(prev => ({
//                             ...prev,
//                             [edu.id]: []
//                           }));
//                         }}
//                       >
//                         {suggestion}
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Bullet Points */}
//                 {edu.bullets && edu.bullets.length > 0 && (
//                   <div className="mt-3 space-y-2">
//                     <label className="block text-sm font-medium text-gray-700">Bullet Points</label>
//                     {edu.bullets.map((bullet, index) => (
//                       <div key={bullet.id} className="flex items-start gap-2">
//                         <input
//                           type="checkbox"
//                           checked={bullet.checked}
//                           onChange={() => {
//                             const updatedBullets = [...edu.bullets];
//                             updatedBullets[index] = { ...bullet, checked: !bullet.checked };
//                             updateEducation(edu.id, 'bullets', updatedBullets);
//                           }}
//                           className="mt-1"
//                         />
//                         <input
//                           type="text"
//                           value={bullet.text}
//                           onChange={(e) => {
//                             const updatedBullets = [...edu.bullets];
//                             updatedBullets[index] = { ...bullet, text: e.target.value };
//                             updateEducation(edu.id, 'bullets', updatedBullets);
//                           }}
//                           className="flex-grow input-field py-1"
//                           placeholder="Bullet point"
//                         />
//                         <div className="flex space-x-1">
//                           <button
//                             type="button"
//                             onClick={() => {
//                               const updatedBullets = [...edu.bullets];
//                               updatedBullets.splice(index, 1);
//                               updateEducation(edu.id, 'bullets', updatedBullets);
//                             }}
//                             className="p-1 text-red-600 hover:text-red-800"
//                           >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                               <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default EducationForm;


// new add bullet 

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import api from '../../api/axios.js';

function EducationForm({ education, onChange }) {
  // Changed to store suggestions by education ID
  const [suggestionsById, setSuggestionsById] = useState({}); 
  // Changed to store visibility by education ID
  const [showSuggestionsById, setShowSuggestionsById] = useState({});
  // START: Added states for loading and error by education ID
  const [isLoadingById, setIsLoadingById] = useState({});
  const [errorMessageById, setErrorMessageById] = useState({});
  // END: Added states for loading and error by education ID

  // START-BULLET: Added states for AI suggestions, loading, and error by bullet ID
  const [bulletSuggestionsById, setBulletSuggestionsById] = useState({});
  const [showBulletSuggestionsById, setShowBulletSuggestionsById] = useState({});
  const [isBulletLoadingById, setIsBulletLoadingById] = useState({});
  const [bulletErrorMessageById, setBulletErrorMessageById] = useState({});
  // END-BULLET: Added states for AI suggestions, loading, and error by bullet ID

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      bullets: []
    };
    onChange([...education, newEducation]);
  };

  const updateEducation = (id, field, value) => {
    const updatedEducation = education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onChange(updatedEducation);
  };

  const removeEducation = (id) => {
    const updatedEducation = education.filter(edu => edu.id !== id);
    onChange(updatedEducation);
  };

  const handleGenerateAI = async (eduId) => {
    // START: Loading and error handling logic
    setIsLoadingById(prev => ({ ...prev, [eduId]: true }));
    setErrorMessageById(prev => ({ ...prev, [eduId]: '' })); // Reset error message
    setShowSuggestionsById(prev => ({ ...prev, [eduId]: false })); // Hide suggestions while loading
    // END: Loading and error handling logic
    
    try {
      const currentEdu = education.find(edu => edu.id === eduId);
      const response = await api.post('/ai/suggestions', {
        resumeText: currentEdu.description || '',
      });

      const suggestionString = response.data.suggestions || '';
      const newSuggestions = suggestionString
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(s => s.replace(/^\*\s*/, ''));

      // Update suggestions specific to this education ID
      setSuggestionsById(prev => ({
        ...prev,
        [eduId]: newSuggestions
      }));
      setShowSuggestionsById(prev => ({
        ...prev,
        [eduId]: true
      }));
    } catch (error) {
      console.error('AI Suggestions Error:', error);
      setSuggestionsById(prev => ({
        ...prev,
        [eduId]: []
      }));
      setShowSuggestionsById(prev => ({
        ...prev,
        [eduId]: false
      }));
      // START: Set error message on failure
      setErrorMessageById(prev => ({
        ...prev,
        [eduId]: 'Failed to generate suggestions. Please try again.'
      }));
      // END: Set error message on failure
    }
    // START: Stop loading after response or error
    setIsLoadingById(prev => ({ ...prev, [eduId]: false }));
    // END: Stop loading after response or error
  };

  // START-BULLET: Added handleGenerateAIBullet function
  const handleGenerateAIBullet = async (eduId, bulletId) => {
    setIsBulletLoadingById(prev => ({ ...prev, [bulletId]: true }));
    setBulletErrorMessageById(prev => ({ ...prev, [bulletId]: '' })); // Reset error message
    setShowBulletSuggestionsById(prev => ({ ...prev, [bulletId]: false })); // Hide suggestions while loading
    
    try {
      const currentEdu = education.find(edu => edu.id === eduId);
      const currentBullet = currentEdu.bullets.find(bullet => bullet.id === bulletId);
      const response = await api.post('/ai/suggestions', {
        resumeText: currentBullet.text || '',
      });

      const suggestionString = response.data.suggestions || '';
      const newSuggestions = suggestionString
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(s => s.replace(/^\*\s*/, ''));

      setBulletSuggestionsById(prev => ({
        ...prev,
        [bulletId]: newSuggestions
      }));
      setShowBulletSuggestionsById(prev => ({
        ...prev,
        [bulletId]: true
      }));
    } catch (error) {
      console.error('AI Bullet Suggestions Error:', error);
      setBulletSuggestionsById(prev => ({
        ...prev,
        [bulletId]: []
      }));
      setShowBulletSuggestionsById(prev => ({
        ...prev,
        [bulletId]: false
      }));
      setBulletErrorMessageById(prev => ({
        ...prev,
        [bulletId]: 'Failed to generate bullet suggestions. Please try again.'
      }));
    }
    setIsBulletLoadingById(prev => ({ ...prev, [bulletId]: false }));
  };
  // END-BULLET: Added handleGenerateAIBullet function

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Education</h2>
        <button 
          onClick={addEducation}
          className="btn bg-green-600 text-white hover:bg-green-700"
        >
          Add Education
        </button>
      </div>
      
      {education.length === 0 ? (
        <p className="text-gray-500 italic">No education added yet. Click "Add Education" to get started.</p>
      ) : (
        <div className="space-y-6">
          {education.map(edu => (
            <div key={edu.id} className="border border-gray-200 rounded-md p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold">{edu.degree || 'New Education'}</h3>
                <button 
                  onClick={() => removeEducation(edu.id)}
                  className="p-1 text-red-600 hover:text-red-800"
                  aria-label="Remove education"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                  <input
                    type="text"
                    value={edu.degree || ''}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    className="input-field"
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                  <input
                    type="text"
                    value={edu.institution || ''}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    className="input-field"
                    placeholder="University Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={edu.location || ''}
                    onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                    className="input-field"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={edu.startDate || ''}
                    onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  {/* START: Conditional rendering for endDate */}
                  {edu.endDate === 'Present' ? (
                    <div className="input-field w-full flex items-center text-gray-700">
                      Present
                    </div>
                  ) : (
                    <input
                      type="date"
                      value={edu.endDate || ''}
                      onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                      className="input-field w-full"
                    />
                  )}
                  {/* END: Conditional rendering for endDate */}
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={edu.endDate === 'Present'}
                        onChange={(e) => updateEducation(edu.id, 'endDate', e.target.checked ? 'Present' : '')}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-sm text-gray-600">Currently Studying</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={edu.description || ''}
                  onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                  rows="3"
                  className="input-field"
                  placeholder="Describe your studies, achievements, etc."
                ></textarea>
                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleGenerateAI(edu.id)}
                    className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors"
                    disabled={isLoadingById[edu.id]}
                  >
                    {isLoadingById[edu.id] ? (
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
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const bullets = edu.bullets || [];
                      updateEducation(edu.id, 'bullets', [...bullets, { id: uuidv4(), text: '', checked: true }]);
                    }}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                  >
                    Add Bullet
                  </button>
                </div>

                {errorMessageById[edu.id] && (
                  <p className="mt-2 text-sm text-red-600">{errorMessageById[edu.id]}</p>
                )}

                {showSuggestionsById[edu.id] && suggestionsById[edu.id]?.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {suggestionsById[edu.id].map((suggestion, index) => (
                      <div
                        key={index}
                        className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          updateEducation(edu.id, 'description', suggestion);
                          setShowSuggestionsById(prev => ({
                            ...prev,
                            [edu.id]: false
                          }));
                          setSuggestionsById(prev => ({
                            ...prev,
                            [edu.id]: []
                          }));
                        }}
                      >
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                {edu.bullets && edu.bullets.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Bullet Points</label>
                    {edu.bullets.map((bullet, index) => (
                      <div key={bullet.id} className="space-y-2">
                        <div className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            checked={bullet.checked}
                            onChange={() => {
                              const updatedBullets = [...edu.bullets];
                              updatedBullets[index] = { ...bullet, checked: !bullet.checked };
                              updateEducation(edu.id, 'bullets', updatedBullets);
                            }}
                            className="mt-1"
                          />
                          <input
                            type="text"
                            value={bullet.text}
                            onChange={(e) => {
                              const updatedBullets = [...edu.bullets];
                              updatedBullets[index] = { ...bullet, text: e.target.value };
                              updateEducation(edu.id, 'bullets', updatedBullets);
                            }}
                            className="flex-grow input-field py-1"
                            placeholder="Bullet point"
                          />
                          <div className="flex space-x-1">
                            <button
                              type="button"
                              onClick={() => {
                                const updatedBullets = [...edu.bullets];
                                updatedBullets.splice(index, 1);
                                updateEducation(edu.id, 'bullets', updatedBullets);
                              }}
                              className="p-1 text-red-600 hover:text-red-800"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                            {/* START-BULLET: Added AI Generate button */}
                            <button
                              type="button"
                              onClick={() => handleGenerateAIBullet(edu.id, bullet.id)}
                              className="p-1 text-purple-600 hover:text-purple-800"
                              aria-label="Generate with AI"
                              disabled={isBulletLoadingById[bullet.id]}
                            >
                              {isBulletLoadingById[bullet.id] ? (
                                <svg
                                  className="animate-spin h-4 w-4 text-purple-600"
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
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M13.5 9.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5z"/>
                                  <path d="M10 2.5c-1.8 0-3.5.9-4.6 2.4v-.9H4.3v.8c-1.1 1.5-1.7 3.4-1.7 5.2 0 4.9 4 8.9 8.9 8.9s8.9-4 8.9-8.9-4-8.9-8.9-8.9h-.5zM5.8 9.6c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm6.3 0c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zM10 15.3c-2.3 0-4.3-1.6-4.8-3.7h9.6c-.5 2.1-2.5 3.7-4.8 3.7z"/>
                                </svg>
                              )}
                            </button>
                            {/* END-BULLET: Added AI Generate button */}
                          </div>
                        </div>
                        {/* START-BULLET: Display error message if exists */}
                        {bulletErrorMessageById[bullet.id] && (
                          <p className="text-sm text-red-600">{bulletErrorMessageById[bullet.id]}</p>
                        )}
                        {/* END-BULLET: Display error message if exists */}
                        {/* START-BULLET: AI Suggestions - Specific to each bullet ID */}
                        {showBulletSuggestionsById[bullet.id] && bulletSuggestionsById[bullet.id]?.length > 0 && (
                          <div className="ml-6 space-y-2">
                            {bulletSuggestionsById[bullet.id].map((suggestion, suggestionIndex) => (
                              <div
                                key={suggestionIndex}
                                className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                  const updatedBullets = [...edu.bullets];
                                  updatedBullets[index] = { ...bullet, text: suggestion };
                                  updateEducation(edu.id, 'bullets', updatedBullets);
                                  setShowBulletSuggestionsById(prev => ({
                                    ...prev,
                                    [bullet.id]: false
                                  }));
                                  setBulletSuggestionsById(prev => ({
                                    ...prev,
                                    [bullet.id]: []
                                  }));
                                }}
                              >
                                {suggestion}
                              </div>
                            ))}
                          </div>
                        )}
                        {/* END-BULLET: AI Suggestions - Specific to each bullet ID */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EducationForm;