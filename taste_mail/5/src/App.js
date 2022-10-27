
import React, {useState} from "react";
import emailjs from "emailjs-com";
import "./App.css"

function App() {

    const [bool,setBoll]=useState(true)

    const [state,setState] = useState({
        name:"",
        email:"",
        site:"",
        comment:"",
        btn:""
    })

    const current = document.getElementById("myForm")

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_tcccvjr",
                "template_iws1v2t",
                current,
                "xVHRRtBc-eVswjurv"
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));


    }

    // function check(){
    //     bool?setState((e)=>({
    //         ...e,
    //         btn: "Мужской"
    //     })):setState((e)=>({
    //         ...e,
    //         btn: "Женский"
    //     }))
    // }




  return (

        <form
            onSubmit={(e)=>{
            sendEmail(e)
            }}
            className="form" id="myForm">
            <label>Name</label>
            <input
                required
                name="name"
                type="text"
                onChange={(e)=>setState(prevState => ({
                ...prevState,
                name: e.target.value
            }))}/>
            <label>Email</label>
            <input
                required
                name="email"
                type="text"
                onChange={(e)=>setState(prevState => ({
                    ...prevState,
                    email: e.target.value
                }))}/>
            <label>Веб-сайт</label>
            <input
                required
                name="site"
                type="text"
                onChange={(e)=>setState(prevState => ({
                    ...prevState,
                    site: e.target.value
                }))}/>
            <label>Комментарий</label>
            <textarea
                required
                name="comment"
                type="text"
                onChange={(e)=>setState(prevState => ({
                    ...prevState,
                   comment: e.target.value
                }))}/>

            <div className="container">
                <label>Пол</label>
            <input type="radio" value="Мужской"  id="rad1" name="btn"
                   // onChange={()=>{check()&& setState(true)}}
            />
            <label htmlFor="rad1">Мужской</label>
            <input type="radio" value="Женский" id="rad2" name="btn"
                   // onChange={check() && setState(false)}
                // onClick={()=>{check && setState(false)}}
            />
            <label htmlFor="rad2">Женский</label>
            </div>
            <input type="submit"/>
        </form>

  );
}

export default App;
