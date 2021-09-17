import React, {useState, useEffect} from "react";
import "./countbtn.css"

export default function CounterComponent (props){
    /* useState (React Hooks) stores the current state of the variable and re-renders it on the browser
    useState returns an array firstvalue is the current value and second is the function to increment the value
    */
   
    const [val, inc] = useState(0);
    function Incrementer(){
        inc(val+props.addBy);
    }
    const btnColor = {
        color: props.addColor,
        fontWeight: "bolder",
        borderRadius: props.addBorderRadius
    }

    /*
    UseEffect hooks
    */

    useEffect(()=>{
        console.log(val);
        if(val === 10){
            alert("hello user");
        }
    },[val]);

    return(
        <div>
            <button style = {btnColor} onClick = {Incrementer}>+{props.addBy}</button>
            <h1 className = {"display"}>{val}</h1>
        </div>
    );
}