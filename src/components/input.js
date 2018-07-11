import React from 'react';

const Input = (title, state, onChange, name) => {
    return (
        <div className="input">
            <input name={name} value={state} onChange={onChange}/>
            <lable>{title}</lable>
        </div>
    )
}

export default Input;