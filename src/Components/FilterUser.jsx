// src/Components/JobFilter.jsx
import React, { useState } from 'react';

const FilterUser = () => {
  const [activeTab, setActiveTab] = useState('Applied'); // Set the initial active tab

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex space-x-4 mb-4">
        {/* Applied Tab */}
        <button
          className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'Applied' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => setActiveTab('Applied')}
        >
          Applied
        </button>

        {/* Shortlisted Tab */}
        <button
          className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'Shortlisted' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => setActiveTab('Shortlisted')}
        >
          Shortlisted
        </button>

        {/* Interviewed Tab */}
        <button
          className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'Interviewed' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => setActiveTab('Interviewed')}
        >
          Interviewed
        </button>
      </div>

      {/* Content Based on Active Tab */}
      <div>
        {activeTab === 'Applied' && (
          <div>
            <p className="text-gray-600">You have applied to X jobs.</p>
            {/* Render the applied jobs listing here */}
          </div>
        )}
        {activeTab === 'Shortlisted' && (
          <div>
            <p className="text-gray-600">You have shortlisted Y jobs.</p>
            {/* Render the shortlisted jobs listing here */}
          </div>
        )}
        {activeTab === 'Interviewed' && (
          <div>
            <p className="text-gray-600">You have interviewed for Z jobs.</p>
            {/* Render the interviewed jobs listing here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterUser;
