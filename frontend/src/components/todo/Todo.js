import React, { useState } from 'react'
import './Todo.css';
import TodoCard from './TodoCard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';


const Todo = () => {

    const [Inputs,setInputs]=useState({title: "", body: ""})
    const[Array,setArray]=useState([]);

    const change=(e)=>{
        const {name,value}=e.target;
        setInputs({...Inputs,[name]:value});
    }

    const submit=()=>{
        if(Inputs.title==="" || Inputs.body===""){
            toast.error("Title or Body cannot be empty!!");
        }

        else{
            setArray([...Array,Inputs]);
            toast("Added Task Successfully");
            console.log("Array is->", Array);
            setInputs({title: "", body: ""})

        }
       

    }

    const del=(id)=>{
        console.log("entered del function in parent",id);
        Array.splice(id,1);
        console.log("array is: ",Array);
        setArray([...Array]);


    }

    const disp_up=(value)=>{
        console.log("update old task-> ",value)
        document.getElementById("todo-update").style.display=value;
    }

  return (
    <>

    <div className="todo">
        <ToastContainer/>
                <form action="" className="add-task-form" autoComplete='off'>

                    <div className="row">
                        <div className="input-field">
                            <input type="text" name="title" placeholder="TITLE" id="" required="required" value={Inputs.title} onChange={change} />
                        </div>	
                    </div>

                    <div className="row">
                        <div className="input-field">
                            <textarea name="body" placeholder="BODY" cols="22" rows="10" required="required" value={Inputs.body} onChange={change}></textarea>
                        </div>	
                    </div>

                    <div className="form-button">
                        <button className='add-btn' onClick={submit}>Add Task</button>
                    </div>                    
                </form>

                <div className="todo-body">
                    <div className="container">

                        <div className="row">
                                {Array && Array.map((item, index) => (
                                        <div className="show-card col-lg-4" key={index}>
                                            <TodoCard 
                                            title={item.title} 
                                            body={item.body} 
                                            id={index} 
                                            delid={del}
                                            display={disp_up}                                            
                                            />
                                        </div>
                                ))}
                        </div>
                        
                    </div>
                </div>
    </div>

    <div className="todo-update" id="todo-update">
        <div className="container update">
            <Update display={disp_up} />

        </div>
    </div>
    
    </>
  )
}

export default Todo
