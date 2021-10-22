import React, {useEffect, useState} from 'react';
import {auth, googleAuthProvider} from '../../firebase';
import {toast}  from 'react-toastify';
import { Button,  } from 'antd';
import  {Link} from 'react-router-dom';



import {MailOutlined, LoadingOutlined , GoogleOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { createOrUpdateUser } from '../../functions/createUpdate';
import Logo from '../../components/layout/partials/Logo';
// import PasswordStrengthBar from 'react-password-strength-bar';





const Login = (props)=>{
    console.log(props)
    if (typeof props.location.state != 'undefined'){
        toast.success(props.location.state.msg)
    }
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)

    // const createOrUpdateUser = async (authToken) => {
    //     console.log(process.env.REACT_APP_API)
    //     return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/createupdateuser", {},
    //         {headers:{authToken}})
    // }
    
    const properRedirect = (res) =>{
        console.log('INSIDE PROPER REDIRECT')
        console.log(res) 
        console.log(user, "THIS IS USER")
        if (user){
                if (user.activated == "false"){
                    props.history.push("/activate/account")
                    console.log("ACTIVATED JUST GOT EXECUTED")

                }
                
                else if (user.activated == "true"){
                    props.history.push("/admin/dashboard")
                    console.log("ACTIVATED JUST GOT EXECUTED")

                }

                else if( typeof props.location.state != 'undefined'){
                    console.log("STATE JUST GOT EXECUTED")

                    if(props.location.state.role == 'suscriber'){
                        console.log("IN-------STATE JUST GOT EXECUTED")
                        
                    props.history.push("/user/d")
                        }

                }else if(res.data.role == "admin"){
                    console.log("ADMIN JUST GOT EXECUTED")
                    
                    props.history.push("/admin/dashboard")

                }else{
                console.log("ELSE EXECUTED")
                props.history.push("/")

                }
            }
       

    }

    useEffect(()=>{
        if (user && user.token){
            props.history.push("/admin/dashboard")
        }

        return ()=>{}
    }, [user, props.history])


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const googleLogin = async () => {
        auth.signInWithPopup(googleAuthProvider).then(async(result)=>{
            const { user} = result
            const idToken = await user.getIdTokenResult
            createOrUpdateUser(idToken.token).then((res)=>{
                console.log("THIS IS THE ID TOKEN ",idToken.token)
                dispatch({type:"LOGGED_IN_USER", payload:{email:user.email,
                     token:idToken.token,
                        name: res.data.name,
                    picture: res.data.picture,
                    activated: res.data.activated,

                    role:res.data.role}})
                    props.history.push("/admin/dashboard")

                    properRedirect(res)
                    toast.success("Login successful!")




            }).catch(err =>{
                console.log(err)
            })
            // props.history.push("/")
        

        }).catch((error)=>{
            console.log(error)
            toast.error(error.message)
        })
    }
    const handleSubmuit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        // console.log("email", email, "password", password)
        try{
            const result = await auth.signInWithEmailAndPassword(email, password)
            const {user} = result
            const idTokenResult = await user.getIdTokenResult()
            createOrUpdateUser(idTokenResult.token).then((res)=>{
                console.log("THIS IS THE MONSTRANCE", res.data.activated)
                dispatch({type:"LOGGED_IN_USER", payload:{email:user.email,
                     token:idTokenResult.token,
                        name: res.data.name,
                    picture: res.data.picture,
                    activated:  res.data.activated,

                    role:res.data.role}})

                    properRedirect(res)
                    props.history.push("/admin/dashboard")

                    setLoading(false)

                    
                

            }).catch(err =>{
                console.log(err)
            })
            toast.success("Sign in Successful")
            // props.history.push("/")

        }
        catch(error){
            console.log(error.message)
            toast.error(error.message)
            setLoading(false)
        }
    }

    const formRegister = () => <form onSubmit={handleSubmuit}>
            <div className="form-group">
                <input className={"form-control"} 
                placeholder={"E-mail"} name={email} 
                onChange={e=>setEmail(e.target.value)} 
                value = {email}
                type={'email'} autoFocus /></div>

            
            <div className="form-group">
                <input className={"form-control col-lg-12 m-0"}
                 placeholder={"password"} name={password}
                  onChange={e=>setPassword(e.target.value)}
                  value = {password}
                   type={'password'} />
                   </div>


                

            <div className="form-group"><Button 
             type={"primary"}
             onClick={handleSubmuit}
             disabled = {!email || password.length < 6||loading}
             shape = "round"
             block
             icon = {<MailOutlined/>}
             className = {"mb-1 col-lg-12 d-block"}
             >{loading?<LoadingOutlined />:"Login with email/password"}</Button>
             </div>

             <div className="form-group">
             <Button
             type={"danger"}
             onClick={googleLogin}
             shape = "round"
             block
             icon = {<GoogleOutlined/>} 
             className = {"mb-1 col-lg-12 d-block"}
             >Google sign In</Button> 
             </div>
             <Link to="/forgotten/password" className="h7 text-danger">Forgotten Password?</Link><br/>
             <Link to="/register" className="h7 text-danger">Don't have an account?, <span className="text-primary">Create one</span></Link>

        </form>
    return (
    <div className={"container p-5"}>
        <Logo/>
        <div className={"row"}>
            <div className={"shadow col-lg-8 col-md-6 col-sm-12 border p-3 offset-md-3"}>
               <center>  <h4>Login</h4></center>
                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default Login;