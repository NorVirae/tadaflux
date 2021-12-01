import React, { useEffect, useState } from "react";
import doubler3 from '../assets/images/coins.jpg';
import LTC from '../assets/images/LTCs.svg';
import BTC from '../assets/images/BTC.svg';
import ETH from '../assets/images/ETH.svg';
import XRP from '../assets/images/XRP.svg';
import afghan2 from '../assets/images/afghan2.jpeg';
// import anon from '../assets/images/anon.jpg';
import anon from '../assets/images/anonMask.jpg';
import walletPhoto from '../assets/images/walletaddrphoto.jpg';

import Counter from 'react-counter';
import USDTFormat from "../functions/USDTFormat";

import Axios from 'axios';
import { readDonation } from "../functions/donations";
import { createDornors, readDornor, updateDornor } from "../functions/dornors";
import { toast } from "react-toastify";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";





const Doubler = (props) => {

    const scrollToSection = (sec) => {
        scroller.scrollTo(sec, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };

    
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    //   }
    
    const [verify, setVerify] = useState(null)
    const [coin, setCoin] = useState(null)
    const [email, setEmail] = useState(null)
    const [newAddress, setNewAddress] = useState(verify?verify.address:"")
    const [address, setAddress] = useState(null)
    const [regEmail,setRegEmail] = useState(null)
    const [updateWallet,setUpdateWallet] = useState(false)

    const [copyText,setCopyText] = useState("0xc0cf47fA5f761137a1b0011B0f8bA71712A8528D")

    const [dornorMoney, setDonorMoney] = useState({noofpeople:0, amount:0})
    // const [donor, setDonor] = useState(2)
    // const [money, setMoney] = useState(4356.32)
      const copyToClipBoard = async () => {
       
        if ('clipboard' in navigator) {
            toast.success(copyText+" copied to clipboard")
            return await navigator.clipboard.writeText(copyText);
        } else {
            return document.execCommand('copy', true, copyText);
        }
      }
          
      

    const ChangeWallet = (newAddress) =>{
        updateDornor({email, newAddress, coin}).then(res=>{
            console.log(res.data)
            toast.success("wallet has been updated successfully")
        }).catch(err=>{
            console.log(err)
        })
    }
    
    const callUpdateWallet = ()=>{
        setUpdateWallet(true)
    }
    const createNewDornor = () => {
        console.log("CREATE NEW DORNOR WAS CLICKED!")
        createDornors({regEmail, address, coin}).then(res=>{
            console.log(res)
        }).catch(err=>{
            toast.error("email already exist on the anon network")
        })
    }

    const verifyExistence = () => {
        setUpdateWallet(false)
        readDornor({email}).then(res=>{
            setVerify(res.data)
            console.log(res.data)
            toast.success("Your Email Exist!")
        }).catch(err=>{
            toast.error("your email is not on the anon Network, DONATE TO THE AFGHAN CHILDREN TO HELP YOU GET REGISTERED")
        })
    }
    

    useEffect(() => {
        scrollToSection("who")
        readDonation().then((res)=>{
            setDonorMoney(res.data)
            console.log(res.data)
        })
        
        const timer = window.setInterval(() => {
            
            readDonation().then((res)=>{
                setDonorMoney(res.data)
                console.log(res.data)
            })
        //   setDonor(donor => donor + getRandomInt(9));
        //   setMoney(money => money + getRandomInt(19.33));
        }, 10000);
        return () => {
        //   window.clearInterval(timer);
        };
      }, []);

    return <>

<section className="who">
                    <div className={"container grids grids-2 gap-1"}>

                        <div className="explain">
                            <h2>
                                Donations
                            </h2>
                            <p>
                                Anonymous for the first time have decided to turn to the 
                                Inhabitants of planet earth to Donate as little as Five(5) USDC, USDC is chosen so that minimal contribution
                                is made to global warming due to mining.
                            </p>

                            <p>
                                For Every Donation you make, you feed one afghan child, you stop those kids from becoming Terrorists,
                                you save them from the hands of the talibans. we have created structures in the country to smuggle out
                                as much of the women and children as we can, we shall not reveal further details here.
                            </p>
                            
                            <button onClick={e=>scrollToSection("alert-primary")} className="btn btn-warning">Donate</button>
                            <button onClick={e=>scrollToSection("card")} className="my-3 btn btn-warning">Click if you are not sure you are on the network!</button>


                
                            


                           
                        </div>
                        <img className="purpose-img" src ={afghan2} alt="crypto pics" />


                    </div>
                </section>

                <section className="stats">
                    <div className="container grids grids-2">
                        {dornorMoney.amount != 0?
                            <><div><h2>{dornorMoney.noofpeople} </h2><p>People Have Donated</p></div>
                            <div><h2>{USDTFormat(dornorMoney?dornorMoney.amount:0)}</h2><p>Approximate Total Donations</p></div></>:
                            <><div><h2>-- </h2><p>People Have Donated</p></div>
                            <div><h2>--</h2><p>Approximate Total Donations</p></div></>}
                    </div>
                </section>

        <section className="double-it">
            <div className="container grid gap-1 grid-2">

            {/* <div className="address">
                   
                    <p>Input your address!</p>
            </div> */}

                <div className="card flex flex-column align-items-center justify-content-center">
                    <img src={anon} alt="anon" />
                    <p className="alert alert-info h5">Check to see if your E-mail has been registered on the Anon Network!</p>

                    <input onChange={e=>setEmail(e.target.value)} placeholder="Email address" className="form-control" type="email" />
                    <button onClick={(e)=>{verifyExistence()}} className="btn btn-warning submit">Submit</button>

                   {verify? <div className="card">
                        <div className="card-body flex flex-column justify-content-center align-items-center">
                            {!updateWallet?<p className="text-info">this is your wallet address</p>:
                            <p className="text-info">New wallet address</p>}

                            {!updateWallet?<input disabled value={verify?verify.address:"Loading..."} className="form-control" />:
                            <input onChange={e=>{setNewAddress(e.target.value);}} value={newAddress} className="form-control" />}

                            <p className="text-info">on</p>
                           {!updateWallet? <p className="text-info"><h4 className="alert alert-info">{verify?verify.currency:''}</h4> Network</p>:

                            <select  onChange={e=>setCoin(e.target.value)} className="form-control">
                            
                            <option>Select Currency</option>
                            <option >Ethereum</option>
                            <option>Bitcoin</option>
                            <option>Litecoin</option>
                            <option>Ripple</option>

                        </select>}

                            {!updateWallet?<button className="btn btn-warning" onClick={e=>callUpdateWallet(newAddress)}> Update Wallet</button>:
                            <button className="btn btn-warning" onClick={e=>ChangeWallet(newAddress)}> Submit</button>}
                            <button className="btn btn-warning my-2" onClick={e=>props.history.push({pathname:"/time/page", state:{email:email}})}> Click here to Start Doubler on this Wallet Address</button>

                            
                        </div>
                    </div>:null}
                    
                    
                    <hr/>
                        <div className="alert alert-primary">Scan or Copy the wallet address to Donate to this course, After Donation your Wallet Address
                         would be registered on the anon network for the doubling if you don't understand what that means click <Link to="/anondoubler">Here</Link>
                        </div>

                        <div className="alert alert-danger"> ~USDC Wallet Address Transfer only USDC to this Wallet"</div>
                        <div className="alert alert-danger">Copy and paste this WALLET ADDRESS to your prefered exchange to send USDC</div>


                        <input id="wallet-addr" className="form-control" disabled value={copyText } /><i onClick={e=>copyToClipBoard()} class="fas fa-copy fa-2x"></i>
                        <h6>Copy</h6>
                        <img onClick={e=>copyToClipBoard()}  className={"wallet-photo"} src={walletPhoto} alt="adress scan image" />
                        <p className="donate alert alert-info h4">Select Your prefered coin and input your blockchain wallet address for Registration!, Your Email would be used to track Your Donations, and for the registration of your address on the anon network</p>
                        <input onChange={e=>{setRegEmail(e.target.value)}} placeholder="Email address" className="form-control" alt="Wallet address" />
                        <select  onChange={e=>setCoin(e.target.value)} className="form-control">
                            
                            <option>Select Currency</option>
                            <option >Ethereum</option>
                            <option>Bitcoin</option>
                            <option>Litecoin</option>
                            <option>Ripple</option>

                        </select>
                        <input type="text" onChange={e=>setAddress(e.target.value)} placeholder={coin?coin+" Address":"Blockchain Address"} className="form-control" />

                        <button onClick={e=>createNewDornor()} className="btn btn-warning">Register Addresses</button>


                </div>

                
            </div>
        </section>

       


            </>
}

export default Doubler