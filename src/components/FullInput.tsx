import React, {ChangeEvent, useState} from 'react';

export const FullInput = ({message}) => {
    let [title, setTitle]=useState("")
    console.log(title)
    const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }
    return (<>
        <div>
            <input onChange={onChangeInputHandler}/>
            <button>+</button>
        </div>
        {message.map((el, index) => {
            return (
                <div key={index}>{el.message}</div>
            )
        })}
    </>)
}

