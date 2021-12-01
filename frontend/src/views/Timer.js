import React, { useEffect, useState } from 'react';
import { readDornor } from '../functions/dornors';




const TimePage = (props) => {
    const [times, setTimes] = useState(1)
    const [email, setEmail] = useState(props.location.state.email)
    const [dornorInfo, setDonorInfo] = useState({minutes:"--", seconds:"--"})
    var countDownDate = new Date().getTime() + 600000

    


    useEffect(() => {
        console.log(props.location.state)
        readDornor({email}).then((res)=>{
            
            setDonorInfo(res.data)
            console.log(res.data)

            if (res.data == null) {
                props.history.push('/doubler')
            }
        })
            
                const timer = window.setInterval(() => {
                    var now = new Date().getTime();
                    var distance = countDownDate - now;                
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    if (distance > 0){
                        setTimes({minutes, seconds})
                    }else {
                        setTimes({minutes:"--", seconds:"--"})
                        props.history.push("/doubler")
                    }
           

            

            
        //   setDonor(donor => donor + getRandomInt(9));
        //   setMoney(money => money + getRandomInt(19.33));
        }, 1000);
        return () => {
        //   window.clearInterval(timer);
        };
      }, []);

        return <>
                <section className="main-time-page">
                    <div className="container flex flex-column justify-content-center align-items-center">
                        <h4 className="blood-red">Donot Not Close this page!</h4>
                        <h6>Your Wallet address has been registered on the Anon Network</h6>

                            {times.minutes<1?<h1 className="blood-red">{times.minutes+" : "+times.seconds}</h1>:<h1>{times.minutes+" : "+times.seconds}</h1>}

                        <div className="card">
                            <h6>Any Crypto transfer made to address below before time elapse would be doubled</h6>
                                
                                <div className="card-body">
                                    <h6>{dornorInfo?dornorInfo.email:null}</h6>
                                    <h5>{dornorInfo?dornorInfo.currency:null} Blockchain</h5>
                                    <input className="form-control" disabled type="text" value={dornorInfo?dornorInfo.address:null} />
                                </div>
                            </div>
                        
                    </div>
                </section>
    
    
    </>
}

export default TimePage;