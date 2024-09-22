import React from 'react'
import FilterUser from './FilterUser'
import JobListing from './JobListing'

const User = () => {
  return (
    <div className="p-4 space-y-4">
        <FilterUser />
        <JobListing />
    </div>
  )
}

export default User