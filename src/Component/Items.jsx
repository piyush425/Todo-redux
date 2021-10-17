import { useEffect, useState } from "react";
import axios from "axios"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';




import { useSelector, useDispatch } from "react-redux"
import {  GetTodoError, GetTodoLoading, GetTodoSuccess,addTodoError } from "../redux/Todos/actions";
import { Redirect,Link } from "react-router-dom";
export const Items = () => {
   

    const { data, isLoading, isError } = useSelector((state) => state.todos.todos);
    
    const getTodos = async () => {
        dispatch(GetTodoLoading())
        try {
            const ret = await axios.get("http://localhost:3001/todos");
            dispatch(GetTodoSuccess(ret.data))
        }
        catch (error) {
            dispatch(GetTodoError(error.message))
        }
    }
    useEffect(() => {
        getTodos();
    },[])
    const handledelete = async (i) => {
         try {
            await axios.delete(`http://localhost:3001/todos/${i}`)
           
            getTodos();
        }
        catch (e) {
            dispatch(addTodoError(e.message));
        }
       
        
       // dispatch(DeleteTodo(i));
    }
    

    //const {data,isLoading,isError} = useSelector((state) => state.todos);
    //console.log(todos);
    const dispatch = useDispatch();

    return isLoading?"Loading....":isError?"error occurred": (
        <div>
            
            {data.map((e, i) => (
                <div>
                    <h1 style={{ fontWeight: "bold", fontFamily: "sans-serif", color: "darkgray" }}>{e.title}</h1>
                    <h3>status:{e.status?"complete":"Not complete"}</h3>
                    <Link style={{textDecoration:"none" }} to={`/home/addtodo/todos/${e.id}`} ><Button style={{marginRight:"22px",height:"22px"}}   variant="contained" color="success">EDIT</Button></Link>
                    <Button style={{height:"22px"}}  onClick={() => { handledelete(e.id) }} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                    
                </div>
               
               
            ))}
            

        </div>
    )
}