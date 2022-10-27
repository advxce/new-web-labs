import React from 'react';
import {useState} from "react";

function Second(props) {

    const [name,setName] = useState({
        name:"",
        subName:""
    })

    function god(e){
        console.log(name)
        e.preventDefault()
    }

    return (
        <div>

              <form >
            <input required
                   value={name.subName}
                   name="subname"
                   onChange={(e)=>setName(prev=>{

                       return({
                           ...prev,
                           [e.target.name]:e.target.value
                       })
                   })}/>
            <input

                type="button"
                value="Return"
                onClick={(e)=>{e.preventDefault()
                    props.onClick("view1")}}
            />
              </form>
        </div>
        )};


export default Second;