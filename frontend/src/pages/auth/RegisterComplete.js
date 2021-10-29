import React, {useState,useEffect} from 'react';
import {auth} from '../../firebase';
import {toast}  from 'react-toastify';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { createOrUpdateUser } from '../../functions/createUpdate';
import PasswordStrengthBar from 'react-password-strength-bar';
import Logo from '../../components/layout/partials/Logo';

import {MailOutlined, LoadingOutlined , GoogleOutlined} from '@ant-design/icons';
import UseRedirectToHttps from '../../utils/useRedirectHttps';





const RegisterComplete = (props)=>{
  UseRedirectToHttps()

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    // const createOrUpdateUser = async (authToken) => {
    //     console.log(process.env.REACT_APP_API)
    //     return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/createupdateuser", {},
    //         {headers:{authToken}})
    // }

    useEffect(()=>{

        setEmail(window.localStorage.getItem("registerEmail", email))

    },[])

    
    const handleSubmuit = async (e) =>{
        e.preventDefault()

        if(!email || !password){
            toast.error("Email and Password is not provided")
        }

        if(password.length < 6){
            toast.error("Password length is less than six characters")
        }
        try{
            const result = await auth.signInWithEmailLink(email, window.location.href)

            
            console.log(result)

            if(result.user.emailVerified){
                //remove email from local storage
                window.localStorage.removeItem("registerEmail")
                //update password
                const user = auth.currentUser
                await user.updatePassword(password)
                const getIdTokenResult = await user.getIdTokenResult()
                //use redux
                
                setLoading(true)

                // console.log(`user ${user.email} idToken ${getIdTokenResult.token}`)
                createOrUpdateUser(getIdTokenResult.token).then((res)=>{
                    dispatch({type:"LOGGED_IN_USER", payload:{email:user.email,
                         token:getIdTokenResult.token,
                            activated:res.data.activated,
                            name: res.data.name,
                        picture: res.data.picture,
                        role:res.data.role}})
                    toast.success("you have been logged in successfully")
                    setLoading(false)
    
                }).catch(err =>{
                    setLoading(false)
                    console.log(err)
                    toast.error(err.message)
                })

                //redire
                props.history.push("/login")
            }
        }
        catch(err){
            toast.error(err)

            console.log("Error ",err)
        }
        // console.log(process.env.REACT_APP_REGISTER_EMAIL_URL)
    //    const  config = {
    //         url : process.env.REACT_APP_REGISTER_EMAIL_URL,
    //         handleCodeInApp:true
    //     }

        // await auth.sendSignInLinkToEmail(email, config);
        // toast.success(`Sign in link has been sent to ${email} please click to login`);

        // setEmail("");
        // console.log("success")
    }

    const formRegister = () => <form onSubmit={handleSubmuit}>
            <input placeholder={"insert Email again"} className={"form-control"} name={email} value={email} onChange={e=>setEmail(e.target.value)} type={'email'}  />
            <br/>
            <input placeholder="password" className={"form-control"} onChange={e=>setPassword(e.target.value)} type={'password'} autoFocus />
            {password?<PasswordStrengthBar className={"col-lg-12 mx-1 d-block"} password={password}/>:null}

            {loading?<LoadingOutlined />:<button  className={"btn btn-raised"} type={"submit"}>Register Complete</button>}
        </form>
    return (
    <div className={"container p-5"}>
        <Logo/>
        <div className={"row"}>
            <div className={"col-lg-6 col-md-6 col-sm-12 border shadow offset-md-3"}>
                <h4>Register</h4>

                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default RegisterComplete;