import { useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from "axios"
import { Redirect, Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { useSelector, useDispatch } from "react-redux"
import {addTodoError, Editsuccess} from "../redux/Todos/actions";

export const ItemsEdit = () => {
    const [text1, setText1] = useState("");
    
    const { data, isLoading, isError,isEdit } = useSelector((state) => state.todos.todos);
    const param = useParams();
    console.log(param.id);

    
    const handleEdit1 = async(id1) => {
        try {
            await axios.patch(`http://localhost:3001/todos/${id1}`, { status: false, title: text1 })
                .then(() => {
                alert("successfully saved")
            })
            dispatch(Editsuccess())
            
            
           
        }
        catch (e) {
            dispatch(addTodoError(e.message));
        }

      
       
    }
    const dispatch = useDispatch();

    return (
        <div>
            <div>
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField   onChange={(e) => setText1(e.target.value)} id="outlined-basic" label="Edit" variant="outlined" />
     
    </Box>
        
        
                <Button onClick={() => { handleEdit1(param.id) }} variant="outlined" >SAVE</Button>
                <div>
                    
                <Link  style={{textDecoration:"none" }} to="/home/addtodo/todos"><Button style={{marginTop:"3%"}} variant="contained" color="success">
  Back to todos
</Button></Link>
                </div>
                
        
    </div>
        </div>
    )
}