
import { Add_Count, Sub_count, Add_TODO_SUCCESS, Add_TODO_LOADING, Add_TODO_ERROR, GET_TODO_SUCCESS, GET_TODO_LOADING, GET_TODO_ERROR, DELETE_TODO, EDIT_TODO ,EDIT_SUCCESS_TODO} from "./actiontype.js"
import axios from "axios"
export const addCount = (data) => {
    return {type: Add_Count, payload: data}
}
export const SubCount = (data) => {
    return {type: Sub_count, payload: data}
}
// export const addtodo = (data) => {
//     return {
//         type: Add_TODO,
//         payload: {
//             status: false,
//             title:data
//     },
//     }
// }
export const addTodoSuccess = (data) => {
    return {
            type:Add_TODO_SUCCESS,
            payload: data,
        
    }
}

export const addTodoLoading = (data) => {
    return {
        type: Add_TODO_LOADING,
        payload:data,
    }
}
export const addTodoError = (error) => {
    return {
        type: Add_TODO_ERROR,
        payload:error,
    }
}
export const GetTodoSuccess = (data) => {
    return {
            type:GET_TODO_SUCCESS,
            payload: data,
        
    }
}

export const GetTodoLoading = (data) => {
    return {
        type: GET_TODO_LOADING,
        payload:data,
    }
}
export const GetTodoError = (error) => {
    return {
        type: GET_TODO_ERROR,
        payload:error,
    }
}
export const DeleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id:id
        }
    }
    
}
export const Edittodo = (data) => {
    return {
        type: EDIT_TODO,
        payload:data,
    }
    
}
export const Editsuccess = (data) => {
    return {
        type: EDIT_SUCCESS_TODO,
        payload:data,
    }
    
}
//     dispatch(GetTodoLoading());
//     try {
//         const ret=await axios.get("http://localhost:3001/todos")
//         dispatch(GetTodoSuccess(ret.data))
//     }
//     catch (err) {
//         dispatch(GetTodoError(error.message))
//     }
// }

// store.dispatch({
//     type: Add_TODO,
//     payload: { id: 1, status: false, title: "Learn React" },
// });
//store.dispatch(addtodo({ id: 1, status: false, title: "Learn React" }));