import React from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './Todo.css';
import Detailtable from '../Detailtable';

const Todo = (props) => {
    
    const {updateTodoList, changeDetail,changeCheck,item,index,removeTodo} = props;
    const handleCheck = () =>{
        changeCheck(index)
    } 
    const handleRemove =()=>{
        removeTodo(index)
    }
    const handleDetail =()=>{
        changeDetail(index)
    }
    const updateTodo = (titleUpdate,descriptionUpdate,dateUpdate,piorityUpdate,showDetailUpdate) =>{
        updateTodoList(index,titleUpdate,descriptionUpdate,dateUpdate,piorityUpdate,showDetailUpdate)
    }
    return (
        <div className="Todo">
                <div className="todo-item">
                    <div className="check-title">
                                    <div className="checkbox" onClick={()=>handleCheck()}>
                                        {item.check !== null && item.check === false ? <CheckBoxOutlineBlankIcon className="non-check"/> : <CheckBoxIcon  className="checked"/>}

                                    </div>
                                    <div className="title">
                                        {item.title}
                                    </div> 
                                </div>    
                                <div className="button-box"  >
                                    <div className="detail">
                                        <button onClick={()=>handleDetail()}>
                                            {item.showDetail !== null && item.showDetail !== false ? "Hide" : "Detail"}
                                        </button>
                                    </div>
                                    <div className="remove">
                                        <button onClick={()=>handleRemove()}>Remove</button>
                                    </div>
                                </div>                      
                </div>
                {
                (item.showDetail !== null &&
                     item.showDetail !== false) &&
                      <Detailtable title={item.title} 
                                    date={item.date} 
                                    description={item.description} 
                                    piority={item.piority}
                                    updateTodo={updateTodo}>
                    </Detailtable>
                }
                
        </div>
    )
}

export default Todo
