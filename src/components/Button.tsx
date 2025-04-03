import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=>void
}

export const Button = ({callBack, name}:ButtonPropsType) => {

    return (
        <button onClick={callBack}>
            {name}
        </button>
    );
};

