

import { Edittodo } from "./actions.js";
import { Add_Count, Sub_count, Add_TODO,Add_TODO_SUCCESS,Add_TODO_LOADING,Add_TODO_ERROR, GET_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING,DELETE_TODO,EDIT_TODO,EDIT_SUCCESS_TODO } from "./actiontype.js";
export const loadData = (key) => {
    return localStorage.getItem(key);
}
const initialstate = {
    
    todos: {
        isLoading: false,
        isError: false,
        isEdit:false,
        data:[]
    }
}
export const todosreduceFn = (state=initialstate, { type, payload }) => {
    console.log("reducer tosdos")
    switch (type) {
        case Add_Count:
            return {
                ...state,
                counter: state.counter + payload,
            };
        case Sub_count:
            return {
                ...state,
                counter: state.counter - payload,
                
            };
        case Add_TODO:
            return {
                ...state,
                todos: [...state.todos, { ...payload }]
            };
        case Add_TODO_LOADING: {
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: true
                }
            }
        }
        case Add_TODO_ERROR: {
            return {
              
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                    isError: true
                }
            
            }
        }
        case Add_TODO_SUCCESS: {
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                  
                }

                
            }
        }
        case GET_TODO_LOADING: {
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: true
                }
            }
        }
        case GET_TODO_SUCCESS: {
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                    data: [...payload]
                  
                }
            }
        }
        case GET_TODO_ERROR: {
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isLoading: false,
                    isError: true
                }
            }
        }
        case DELETE_TODO: {
            const newTodo = state.todos.data.filter((el) => el.id !== payload.id)
            
            { console.log(newTodo, payload) }
            return {
                
                ...state,
             
                todos: {

                    isLoading: false,
                    isError: false,
                    data: newTodo
       
                }
               
                 
            }
        }
        case EDIT_TODO: {
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isEdit: true
                }
            }
        }
        case EDIT_SUCCESS_TODO: {
            return {
                ...state,
                todos: {
                    ...state.todos,
                    isEdit: false
                }
            }
        }
            
        
    
        default:
            return {...state}
        
        
    }
}