import React,{useState} from 'react'
import './Newtask.css';
const Newtask = ({addTodo}) => {
    //Get Date time Today // 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;    

    const optionSelect = [
        {name:"low",select:"false"},
        {name:"normal",select:"true"},
        {name:"high",select:"false"},
    ]
    const [title, setTitle] = useState('')   
    const [description, setDescription] = useState('')   
    const [date, setDate] = useState(today)   
    const [piority, setPiority] = useState("normal")   
    const [check] =  useState(false)  
    const [showDetail] =  useState(false)  
    const submitHandler = (e) =>{
        if(title === ""){
            e.preventDefault();
        }else{
            e.preventDefault();
            addTodo(title,description,date,piority,check,showDetail)
        }



    }

    return (
       
        <div className="Newtask">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                        // required 
                        placeholder="add new task..."/>
                </div>
                
                <div className="form-group">
                    <div className="description">
                        <b>Description</b>
                    </div>

                    <textarea 
                    id="description"
                     value={description}
                     onChange={(e)=>setDescription(e.target.value)}
                      name="description">
                    </textarea>
                </div>                    
                 
                <div className="form-group custom-box">
                    <div className="form-group left">
                        <div className="date">
                            <b>Date</b>
                        </div>

                        <input type="date"
                         value={date}
                         onChange={(e)=>setDate(e.target.value)}
                         />


                    </div>   
                    <div className="form-group right">
                        <div className="piority">
                            <b>Piority</b>
                        </div>
                            <select 
                                 onChange={(e)=>setPiority(e.target.value)}
                                 value={piority}
                                name="piority" 
                                id="piority">
                            {
                                optionSelect.map((item,index)=>(
                                    <option 
                                        key={index} 
                                        value={item.name}  
                                        selected={item.select === true && "selected" }
                                    >
                                        {item.name}
                                        
                                    </option>
                                )
                                    
                                )
                            }
                        </select>  
                    </div>                     
                    
              
                </div> 
                {
                    date >= today ?
                     <input id="add" type="submit" value="Add"></input> : 
                     <div className="check-time">
                        Invalid time
                    </div>  
                }
                         
            </form>
        </div>
    )
}

export default Newtask
