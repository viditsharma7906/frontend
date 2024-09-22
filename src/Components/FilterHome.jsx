import React from 'react'

const FilterHome = () => {
  return (
    <div>
        <div className="w-full bg-white p-4 rounded-lg shadow-md flex space-x-4">
        
        <h2 className="font-semibold text-xl">Filters</h2>
        {/* Add your filter options here */}
        <div className="flex-1">
          <p className="mb-2">Category</p>
          <input className="border p-2 w-full rounded" placeholder="Enter category" />
        </div>
        <div className="flex-1">
          <p className="mb-2">Location</p>
          <input className="border p-2 w-full rounded" placeholder="Enter location" />
        </div>
        <div className="flex-1">
          <p className="mb-2">Job Type</p>
          <input className="border p-2 w-full rounded" placeholder="Enter job type" />
        </div>
      </div>
    </div>
  )
}

export default FilterHome;
