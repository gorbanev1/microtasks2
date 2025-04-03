import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=>void
}

export const Button = ({callBack, name}:ButtonPropsType) => {
    const onClickButtonHandler = ()=>{
        callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>
            {name}
        </button>
    );
};

