import React from 'react'
import './Update.css';

const Update = ({display}) => {
  return (
    <>
      <div className="p-5 d-flex justify-content-center align-items-center flex-column update">
          <h3>Update Your Task</h3> 
          <input type="text" name="" id="" className='todo-inputs my-4  w-100 p-3'/>
          <textarea name="" className='todo-inputs w-100 p-3' id="" cols="30" rows="10"></textarea>
          <div>
            <button className='btn btn-dark my-4'>UPDATE</button>
            <button className='btn btn-danger my-4 mx-3' onClick={()=>display("none")}>Close</button>
          </div>
          
      </div>
    
    </>
  )
}

export default Update
