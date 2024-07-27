import React from 'react'

const Searching = ({onRecieveData,onHandleSearch}) => {
  return (
    <div className='query-box sm:p-2 relative sm:left-92 flex justify-center  gap-2'>
    <input className='sm:px-12 sm:py-2 text-orange-500 bg-orange-50 rounded-lg font-mono' type="search" placeholder="Search Any Recipe" onChange={(e)=>onHandleSearch(e)}/>
    <button type='submit' className='searchBtn w-28 h-16 rounded-lg text-white bg-orange-500 border-none' onClick={onRecieveData}>Search</button>
   </div>
  )
}

export default Searching