import React, {useState} from 'react';
import {auth} from '../../firebase';
import {toast}  from 'react-toastify';
import Logo from '../../components/layout/partials/Logo';
import UseRedirectToHttps from '../../utils/useRedirectHttps';






const Register = (props)=>{
  UseRedirectToHttps()

    const [email, setEmail] = useState('')
    const handleSubmuit = async (e) =>{
        e.preventDefault()
        console.log(process.env.REACT_APP_REGISTER_EMAIL_URL)
       const  config = {
            url : process.env.REACT_APP_REGISTER_EMAIL_URL,
            handleCodeInApp:true
        }
        console.log(config.url) 
        

        await auth.sendSignInLinkToEmail(email, config);
        toast.success(`Sign in link has been sent to ${email} please click to login`);

        window.localStorage.setItem("registerEmail", email)
        setEmail("");
        console.log("success")
        props.history.push("/info")
    }

    const formRegister = () => <form onSubmit={handleSubmuit}>
            <div className={"form-group"}>
            <input className={"form-control"} placeholder={"Email"} name={email} onChange={e=>setEmail(e.target.value)} type={'email'} autoFocus />
            </div>
            <button className={"btn btn-success my-3 col-lg-12"} type={"submit"}>Proceed</button>
        </form>
    return (
    <div className={"container-fluid p-5"}>
        <Logo/>
        <div className={"row"}>
            <div className={"col-lg-5 col-md-6 col-sm-12 offset-md-3 border p-3 shadow"}>
               <center>  <h4>Register</h4></center>
                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default Register;