import { createStore,combineReducers,applyMiddleware } from "redux";
import { todosreduceFn } from "./Todos/reducer.js";



const middleware1 = (store) => (next) => (actions) => {
    console.log("Mw1", actions);
    return next(actions);
    
};
const middleware2 = (store) => (next) => (actions) => {
    console.log("MW2", actions);
    return next(actions)
}


const rootReducer = combineReducers({
    
    
    todos:todosreduceFn,
});
//  const store = createStore(
//    reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );


export const store = createStore(
    rootReducer,
    applyMiddleware(middleware2)
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//console.log(store.getState());






// class Store{
//     constructor(reduceFn,initialstate) {
//         this.reducer = reduceFn;
//         this.state = initialstate;
//     }
//     getState() {
//         return this.state;
//     }
//     dispatch(action) {
//         this.state = this.reducer(this.state, action);
//     }

// }
// const initialstate = {
//     counter: Number(loadData("count")),
//     todos: {
//         isLoading: false,
//         isError: false,
//         data:[]
//     }
// }

//export const store=createStore(todosreduceFn,initialstate)
//const store = new Store(reduceFn,initialstate)

