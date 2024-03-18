import React from 'react'
import './Todo.css';
import { AiFillDelete } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TodoCard = ({title,body,id,delid,display,updateId,toBeUpdate}) => {

  return (
    <>

    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className='todo-card-p'>{body.split("", 27)}...</p>
      </div>

      <div className="d-flex justify-content-end">
          <div className="mx-3" onClick={()=> {
            display("block");
            console.log("update id",updateId);
            toBeUpdate(updateId);
          }}>
          <BiSolidPencil className='card-icons' />Update

          </div>
          <div onClick={()=>{
            console.log(id);
            delid(id)
            // toast.success("Deleted Successfully!!");
          }}>
          <AiFillDelete  className='card-icons' />Delete

          </div>
      </div>
      


    </div>



    
    </>
  )
}

export default TodoCard;
