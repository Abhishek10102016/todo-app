import React, { useState } from 'react'

let TodoInput = (props: any) => {
   
    const callFunction=(props: any)=>{
        props.addList(inputText)
                setInputText('')
    }
    const [inputText, setInputText] = useState('');
    return (
        <div className="input-iontainer">
            <input type="text" className="input-box-todo" placeholder="Enter your todo" style={{color: 'white'}}
                value={inputText}
                onChange={(e) => { setInputText(e.target.value) }}
            />
            <button className="add-btn" id='btn' onClick={() => {
                callFunction(props)
            }}>+</button>
        </div>
    )
}

export default TodoInput;