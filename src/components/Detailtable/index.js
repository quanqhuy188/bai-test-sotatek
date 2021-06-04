import React,{useState} from 'react'

const Detailtable = (props) => {
    const {updateTodo,title,piority,description,date} = props;
    //Get Date time Today // 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + dd + '-' + mm;    

    const optionSelect = [
        {name:"low",select:"false"},
        {name:"normal",select:"true"},
        {name:"high",select:"false"},
    ]
    const [titleUpdate, setTitleUpdate] = useState(title)   
    const [descriptionUpdate, setDescriptionUpdate] = useState(description)   
    const [dateUpdate, setDateUpdate] = useState(date)   
    const [piorityUpdate, setPiorityUpdate] = useState(piority)   
 
    const [showDetailUpdate] =  useState(false)  
    const handleUpdate = (e) =>{
        e.preventDefault();
        updateTodo(titleUpdate,descriptionUpdate,dateUpdate,piorityUpdate,showDetailUpdate)
    }
    return ( 
       
        <div className="Newtask">
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <input 
                        type="text" 
                        id="input-update"
                        value={titleUpdate} 
                        onChange={(e)=>setTitleUpdate(e.target.value)}
                        required 
                        placeholder="Edit task..."/>
                </div>
                <div className="form-group">
                    <div className="description">
                        <b>Description</b>
                    </div>

                    <textarea 
                    id="description-update"
                     value={descriptionUpdate}
                      onChange={(e)=>setDescriptionUpdate(e.target.value)}
                      name="description">
                    </textarea>
                </div>                    
                 
                <div className="form-group custom-box">
                    <div className="form-group left">
                        <div className="date">
                            <b>Date</b>
                        </div>

                        <input id="date-update" type="date"
                         value={dateUpdate}
                          onChange={(e)=>setDateUpdate(e.target.value)}
                         />


                    </div>   
                    <div className="form-group right">
                        <div className="piority">
                            <b>Piority</b>
                        </div>
                            <select 
                                 onChange={(e)=>setPiorityUpdate(e.target.value)}
                                 value={piorityUpdate}
                                name="piority" 
                                id="piority-update">
                            {
                                optionSelect.map((item,index)=>(
                                    <option 
                                        key={index} 
                                        value={item.name}  
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
                    dateUpdate >= today ?
                     <input id="add-update" type="submit" value="Update and Hide"></input> : 
                     <div className="check-time">
                        Invalid time
                    </div>  
                }
                         
            </form>
        </div>
    )
}

export default Detailtable
