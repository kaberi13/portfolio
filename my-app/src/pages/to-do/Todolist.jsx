import React, { useState } from 'react'
import '../../pages/to-do/Todolist.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'
function Todolist() {

     const navigate=useNavigate()

  let [todolist,setTodolist]=useState([])
  let saveTodo=(event)=>{

    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalTodoList=[...todolist,toname]
      setTodolist(finalTodoList)
    }
    else{
      alert("Already exits")
    }

    event.preventDefault();
  }

  let list=todolist.map((value,index)=>{
    return(
      <TodoListItems value={value} key={index} indexNumber={index} 
      setTodolist={setTodolist}
      todolist={todolist}
      />
      
    )
  })
  return (
    <>
    <Navbar/>
    <div id='todocon'>
      
        <h2 id='todotext' >To-do list<span id='todospan' onClick={()=>navigate('/')}>&times;</span></h2>
        <form onSubmit={saveTodo}>
        <input id='todoinput' type='text' placeholder='Add task...'  name='toname'></input>
        <button  id='todobutton' type='submit' ><ion-icon name="add-outline"></ion-icon></button>
        </form>

        <div id='todoitems'>
            <ul>
              {list}
           
            </ul>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Todolist

function TodoListItems({value,indexNumber,todolist,setTodolist}){
  let [status,setStatus]=useState(false)

  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
  setTodolist(finalData)}

  let checkStatus=()=>{
    setStatus(!status)
  }
  return(
    <li className={(status)? 'licomplete': ''} onClick={checkStatus}>{value} <span onClick={deleteRow}>&times;</span></li>
  )
}