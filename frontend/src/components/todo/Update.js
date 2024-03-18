import React, { useEffect, useState } from 'react'
import './Update.css';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let flag=false;

const Update = ({display,update}) => {

  useEffect(()=>{
    setInputs({
      title: update.title,
      body: update.body
    })
  },[update]);

  const[Inputs,setInputs]=useState({
    title:"",
    body:""
  });

  const change=(e)=>{
    flag=true;
    const {name,value}=e.target;
    setInputs({...Inputs,[name]:value});

  }

  const submit=async(e)=>{

    e.preventDefault();

    try {
      console.log("hitting update api");
      console.log(Inputs);

      if(flag){   //kuch change kia h toh hi update ap call
        const response=await axios.put(`http://localhost:1000/updateTask/${update._id}`,Inputs);

        console.log("update response->",response)
        if(response.status===200){
            toast.success("Task Updated Successfully");
        }

        flag=false;

      }

      display("none")

      

      
    } catch (error) {
      
    }

    
  }


  return (
    <>
      <div className="p-5 d-flex justify-content-center align-items-center flex-column update">
        <ToastContainer/>
          <h3>Update Your Task</h3> 
          <input type="text" name="title" id="" value={Inputs.title}  onChange={change} className='todo-inputs my-4  w-100 p-3'/>
          <textarea name="body" className='todo-inputs w-100 p-3' id="" value={Inputs.body} onChange={change} cols="30" rows="10"></textarea>
          <div>
            <button className='btn btn-dark my-4' onClick={submit} >UPDATE</button>
            <button className='btn btn-danger my-4 mx-3' onClick={()=>display("none")}>Close</button>
          </div>
          
      </div>
    
    </>
  )
}

export default Update
