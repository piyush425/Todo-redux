import {  useState } from "react";
import axios from "axios"
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';



import { useSelector, useDispatch } from "react-redux"
import {  addTodoError, addTodoLoading, addTodoSuccess } from "../redux/Todos/actions";
export const Todo = () => {
    const [text, setText] = useState("");
    

    const { data, isLoading, isError } = useSelector((state) => state.todos.todos);
    
    
    const handleaddtodo = async () => {
        dispatch(addTodoLoading())
        try {
            const resp = await axios.post("http://localhost:3001/todos", { status: false, title: text })
            dispatch(addTodoSuccess(resp.data));
            
        }
        catch (e) {
            dispatch(addTodoError(e.message));
        }
      
    }
    

   
    const dispatch = useDispatch();

    return isLoading?"Loading....":isError?"error occurred": (
        <div>
            
           <span> <Box component="form" sx={{'& > :not(style)': { m: 1 },}}noValidateautoComplete="off">
               <Input  onChange={(e)=>setText(e.target.value)} placeholder="Enter ToDo"  />
            </Box>
             <button onClick={handleaddtodo}><img style={{height:"22px"}} src="https://cdn.onlinewebfonts.com/svg/img_28512.png" alt="" /></button></span>
           
            

        </div>
    )
}