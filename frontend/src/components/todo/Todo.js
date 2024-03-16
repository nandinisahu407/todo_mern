import React, { useEffect, useState } from 'react'
import './Todo.css';
import TodoCard from './TodoCard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';

import { authActions } from '../../store';
import { useDispatch } from 'react-redux';
import axios from "axios";

let id=sessionStorage.getItem("id");

const Todo = () => {

    const [Inputs,setInputs]=useState({title: "", body: ""})
    const[Array,setArray]=useState([]);

    

    const change=(e)=>{
        const {name,value}=e.target;
        setInputs({...Inputs,[name]:value});
    }

    const submit=async(e)=>{
        e.preventDefault();

        if(Inputs.title==="" || Inputs.body===""){
            toast.error("Title or Body cannot be empty!!");
        }

        else{

            console.log("hello from add tasks");
            if(id){   //if user  has signup
               
                try {
                    const response=await axios.post("http://localhost:1000/addTask",{
                        title:Inputs.title, 
                        body:Inputs.body,
                        id:id
                    });

                    console.log("task->",response);

                    if(response.status===200){
                        toast.success("Added Task Successfully");
                        console.log("Array is->", Array);
                        setInputs({title: "", body: ""})
                    }


                    
                } catch (error) {
                    console.log("error from addtodo->",error);
                    toast.error("An error occured!!");
                    
                }

            }

            else{
                setArray([...Array,Inputs]);
                toast("Added Task Successfully");
                toast.error("But tasks are not saved :( kindly sign up");
                console.log("Array is->", Array);
                setInputs({title: "", body: ""})
            }
            

        }
       

    }

    const del=async (Cardid)=>{
        if(id){
            console.log("entered del function in parent",Cardid);

            const response=await axios.delete(`http://localhost:1000/deleteTask/${Cardid}`,{
                data: {id:id},
            });

            toast.success("Deleted Successfully!!");

            console.log("delete task-> ",response);

        }
        else{
            toast.error("Please SignUp First ")
        }


    }

    const disp_up=(value)=>{
        console.log("update old task-> ",value)
        document.getElementById("todo-update").style.display=value;
    }

    useEffect(()=>{
        if(id){
            const fetch=async()=>{
                const response=await axios.get(`http://localhost:1000/getTasks/${id}`);
                // console.log("all tasks->",response.data.allTasks);
                setArray(response.data.allTasks)
            };
    
            fetch();
        }
        

    },[submit])

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
                                            id={item._id} 
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
