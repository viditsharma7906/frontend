// import React from 'react'
// import JobListing from './JobListing'

// const Home = () => {
//   return (
//     <div>
//       <JobListing />
//     </div>
//   )
// }

// export default Home

// src/Components/Home.jsx
// src/Components/Home.jsx
import React from "react";
import JobListing from "./JobListing";
import FilterHome from "./FilterHome";

const Home = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Filter Section (Full-width, horizontally aligned at the top) */}
      
        
       <FilterHome />
      
      {/* Main Section (Job Listings and Job Details) */}
      <div className="flex space-x-4">
        {/* Job Listings (70% Width) */}
        <div className="w-[70%] bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-xl mb-4">Job Listings</h2>
          <JobListing />
        </div>

        {/* Job Details (30% Width) */}
        <div className="w-[30%] bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-xl mb-4">Job Details</h2>
          {/* Show details of the selected job */}
          <div>
            <h3 className="font-semibold">Software Engineer</h3>
            <p>Full job description goes here...</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
