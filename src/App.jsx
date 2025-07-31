import Header from './components/Header'
import { useState } from 'react'
import ToDoList from './components/ToDoList';
import './App.css';
import './index.css'

function App() {

  const [innerTxt, updateTxt] = useState("");
  const [listTodo, listUpdate] = useState([]);

  const innTxt = (val) => {
    updateTxt(val);

    if(innerTxt == ""){
      alert("cannot be empty");
      updateTxt("");
      return;
    }

    listTodo.some((item) => item.text == innerTxt) ? alert("already added!") :
    listUpdate((prevVal) => [...prevVal, { text :innerTxt , complete : false}]);
    updateTxt("");
  }

  return (
    <>
      <Header/>
      <input className="input-val" type="text" value={innerTxt} onChange={(e)=> updateTxt(e.target.value)}/>
      <button onClick={innTxt}>Add</button>
      <ToDoList data={listTodo} updateList={listUpdate}/>
    </>
  )
}

export default App
