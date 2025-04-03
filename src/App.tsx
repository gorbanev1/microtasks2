import React, { useState } from 'react'
import './App.css'
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title, setTitle]=useState("")

    const addMessage = (title:string)=>{
            setMessage([{message: title},...message ])
    }
    const  onClickButtonHandler = ()=>{
        addMessage(title)
        setTitle("")
    }
    return (
        <div className="App">
            <Input setTitle={setTitle} title={title}/>
            <Button name={"+"} callBack={onClickButtonHandler}></Button>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}
export default App
