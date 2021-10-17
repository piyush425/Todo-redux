import logo from './logo.svg';
import './App.css';
import { Navbar } from "./Router.jsx/Navbar"
import {Todo} from "./Component/add"
import { Route } from 'react-router';
import { Items } from "./Component/Items"
import { ItemsEdit } from "./Component/ItemEdit"
import {Home} from "./Component/home"


function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <Route exact path="/home"><Home/></Route>
      <Route exact path="/home/addtodo"><Todo/></Route>
      <Route exact path="/home/addtodo/todos"><Items/></Route>
      <Route exact path="/home/addtodo/todos/:id"><ItemsEdit/></Route>
      
    </div>
  );
}

export default App;
