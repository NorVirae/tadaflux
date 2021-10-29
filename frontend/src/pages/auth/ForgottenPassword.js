import React, {useState} from 'react';
import {auth} from '../../firebase';
import {toast}  from 'react-toastify';
import {Button} from 'antd';
import UseRedirectToHttps from '../../utils/useRedirectHttps';






const ForgottenPassword = (props)=>{
  UseRedirectToHttps()

    const [email, setEmail] = useState('')
    const [loading, setLoading]  = useState(false)

    const config = {
        url:process.env.REACT_APP_RESET_PASSWORD_LINK,
        handleCodeInApp:false
    }

    console.log(process.env.REACT_APP_RESET_PASSWORD_LINK)

    const resetPassword = async (e) =>{
        e.preventDefault()

        await auth.sendPasswordResetEmail(email, config).then(()=>{
            toast.success( `Password Reset email has been sent! to ${email}.`)
            props.history.push("/info")
        }).catch(error=>{
            toast.error("Could not rest Password", error)
            props.history.push("/login")

        })
        


    }
    
    
    
    return <>
        <div className="container col-lg-4 col-sm-12 col-md-4 offset-md-3 p-5">
            
            <center><h4>Password Reset</h4></center>
            <div className={"form-group"}>
                <input placeholder ={"E-mail"} autoFocus className = {'form-control'} type={"email"} onChange={e=>setEmail(e.target.value)} />

            </div>
            <Button onClick={resetPassword} type={"info"} block shape={"round"} disabled={!email}>{loading?"loading...":"Reset Password"}</Button>
        
        </div>

    </>
    
    
    
    
    }
export default ForgottenPassword;