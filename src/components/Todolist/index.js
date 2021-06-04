import React,{useState} from 'react';
import './Todolist.css';
import Newtask from '../Newtask'
import Bulkaction from '../Bulkaction/index'
import Todo from '../Todo'
import { TramRounded } from '@material-ui/icons';


const Todolist = () => {
    const [todoList,setTodolist] =useState([
        // {title:"hihi 1",description:"description 1",piority:"",date:""},
        // {title:"hihi 2",description:"description 2",piority:"",date:""},
        // {title:"hihi 3",description:"description 3",piority:"",date:""},
        // {title:"hihi 4",description:"description 4",piority:"",date:""},
    ])    
    const [bulkCheck,setBulkCheck] = useState(false);
    const addTodo = (title,description,date,piority,check,showDetail) =>{
        setTodolist([...todoList,{
                                title:title,
                                description:description,
                                piority:piority,
                                date:date,
                                check:check,
                                showDetail : showDetail
                                }
                            ])
    }
    const changeCheck = (index) =>{
        let updateTodo = [...todoList];
        updateTodo.map((item,indexTodo)=>{
            if(index === indexTodo){
                item.check = !item.check
                if(item.check === true){
                    setBulkCheck(!bulkCheck)
                }
                
            }


        return{
            updateTodo
        }
        });
        setTodolist(updateTodo)
        
        
       
    }

    const changeDetail = (index) =>{
        let updateTodo = [...todoList];
        updateTodo.map((item,indexTodo)=>{
            if(index === indexTodo){
                item.showDetail = !item.showDetail
            }
            return{
                updateTodo
            }
        })
        setTodolist(updateTodo)
    }
    const removeTodo = (index) =>{
        
        let updateTodo = [...todoList];
        setTodolist(
            updateTodo.filter((item,indexTodo) => indexTodo !== index)
        )
    }
    const removeTodos = (remove) =>{
        let updateTodo = [...todoList];
        setTodolist(
            updateTodo.filter((item) => item.check !== remove)
        )
    }    
    const updateTodoList = (index,titleUpdate,descriptionUpdate,dateUpdate,piorityUpdate,showDetailUpdate) =>{
    let updateTodo = [...todoList];
    updateTodo.map((item,indexTodo)=>{
        if(index === indexTodo){
            item.title = titleUpdate
            item.description = descriptionUpdate
            item.date = dateUpdate
            item.piority = piorityUpdate
            item.showDetail = showDetailUpdate


        }
        return{
            updateTodo
        }
    })    
    setTodolist(updateTodo)
    }
    return (
        <div className="Todolist">
            <div className="todolist-box">
                <h1>Todo List</h1>
                <Newtask addTodo={addTodo}></Newtask>
                <div className="todo-box">
                {
                            todoList.map((item,index)=>(
                                <Todo changeCheck={changeCheck} updateTodoList={updateTodoList} changeDetail={changeDetail} removeTodo={removeTodo} index={index} item={item} key={index}></Todo>

                            )).sort()
                        }
                </div>
                {
                    
                    bulkCheck && (
                        <Bulkaction removeTodos={removeTodos}></Bulkaction> 
                        )
                }
                               
            </div>
        </div>
    )
}

export default Todolist
