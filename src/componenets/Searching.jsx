import React from 'react'

const Searching = ({onRecieveData,onHandleSearch}) => {
  return (
    <div className='query-box sm:p-2 relative sm:left-92 lg:left-80 flex gap-2'>
    <input className='sm:px-12 sm:py-2  rounded-lg' type="search" placeholder="Search Any Recipe" onChange={(e)=>onHandleSearch(e)}/>
    <button type='submit' className='w-28 h-16 rounded-lg bg-green-500 border-none' onClick={onRecieveData}>Search</button>
   </div>
  )
}

export default Searching