import React from 'react'
import loading from '../assets/loading.gif'
const Spinner = () => {
  return (
    <div className='text-center' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className="my-3" src={loading} alt="Loading..." style={{ width: "100px", height: "100px" }} />
    </div>
  )
}

export default Spinner