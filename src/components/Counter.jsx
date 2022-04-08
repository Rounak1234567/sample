import { useState } from "react";
import { useEffect } from "react";

const Counter = ()=>{

    const [text, setText] = useState("");
    const [char, setChar] = useState(0);


    useEffect(()=>{
        setChar(text.length)
    },[text])

    const handleChange = (e)=>{
        console.log((e.target.value).charCodeAt(text.length))
        setText(e.target.value)
    }

    

    return(
        <div>
            <input type="text" onChange={(e)=>handleChange(e)} value={text}/>
            <h1>Total Characters = {char}</h1>
        </div>
    )
}


export default Counter;