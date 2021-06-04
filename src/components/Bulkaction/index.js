import React from 'react'
import './Bulkaction.css';
const Bulkaction = ({removeTodos}) => {
    const remove = true;
    const handleRemove = () =>{
        removeTodos(remove)
    }   
    return (

        <div className="Bulkaction">
                            <div className="Bulkaction-box">
                                <div className="bulk-text">
                                        Bulk Action :
                                </div>    
                                <div className="button-box"  >
                                    <div className="done">
                                        <button>Done</button>
                                    </div>
                                    <div className="remove">
                                        <button onClick={()=>handleRemove()}>Remove</button>
                                    </div>
                                </div>    
                            </div>
        </div>
    )
}

export default Bulkaction
