import React, {useEffect, useState} from 'react';


function First(props) {


    const [error, setError] = useState(false)
    const [state, setState] = useState(true)
    const [name, setName] = useState({
        name: "", subName: ""
    })


    function prettier(stroke) {
        stroke = stroke.substring(0, 9)
        let dot = stroke.match(/.{1,3}/g)

        let newString = ""
        if (stroke.length !== 0) {
            newString = dot.join(".")
        }

        console.log("newStiring:" + newString)
        console.log(dot)
        console.log("name:" + name)

        setName(prevState => ({
                ...prevState, name: newString
            }))
        console.log("stroke:" + stroke)
    }


    const onInput = event => {
        event.target.value = event.target.value.replace(/[^0-9+]/g, '')
    }

    return (<div>
            <form onSubmit={(e) => {
                props.onClick("view2")
            }}>
                <input
                        required
                       value={name.name}
                       name="name"
                       onInput={onInput}
                       onChange={(e) => setName(prev => {
                           prettier(e.target.value)
                           return ({
                               ...prev, [e.target.name]: e.target.value
                           })
                       })}/>


            </form>

        </div>);
}

export default First;