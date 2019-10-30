import React from 'react';
import './Person.css'

const Person = (props)=> {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a person and I'm {props.name}, {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        
    )
}

export default Person;