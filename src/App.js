import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import { useState } from 'react';
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';

function App() {
  const [todolist,settodolist]=useState([""])
  const addtask=(userinput)=>{
    let copy=[...todolist]
    copy=[...copy,{id:Date.now(),task:userinput,status:false}]
    settodolist(copy)
  }
  const handletoggle=(id)=>{
    const uptadeted_todo=todolist.map((item)=>{
      return item.id==id?{...item,status:!item.status}:{...item}
    })
    settodolist(uptadeted_todo)
  }
 const handlefilter=()=>{
   const filteredtodo= todolist.filter((item)=>{
     return !item.status
   })
   settodolist(filteredtodo)
 }
 
 
  return (
     <div className='app'>
       <Head/>
       <Todoform addtask={addtask}></Todoform>
      <Todolist list={todolist} toggle={handletoggle} filter={handlefilter} ></Todolist>
     </div>
  );
}

export default App;
