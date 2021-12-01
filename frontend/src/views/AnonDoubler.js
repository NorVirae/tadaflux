import React, { useEffect } from 'react';
import logo from '../assets/images/logo.png';
import doubler1 from '../assets/images/doubler.jpg';
import doubler2 from '../assets/images/mining.jpg';
import doubler3 from '../assets/images/coins.jpg';
import LTC from '../assets/images/LTCs.svg';
import BTC from '../assets/images/BTC.svg';
import ETH from '../assets/images/ETH.svg';
import XRP from '../assets/images/XRP.svg';
import afghan1 from '../assets/images/afghan.jpg';
import afghan2 from '../assets/images/afghan2.jpeg';
import anonMask from '../assets/images/anonMask.jpg';
import {scroller} from 'react-scroll';



const AnonDoubler = (props) => {
    const scrollToSection = (sec) => {
        scroller.scrollTo((sec), {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };

      useEffect(()=>{
        scrollToSection("navbar")

        return () => {

        }
      })

    return <>
                <div className="navbar">
                    <div className="container flex">
                        <div className="nav-brand flex">
                            <img className="logo" src={logo}/>
                            <h3>TadaFlux</h3>
                        </div>
                        <nav>
                            <ul>
                                <li></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <section className="purpose">
                    <div className="anon h1 text-light">The Anon Doubler Bot</div>
                    <p>Brought to you by anonymous</p>
                    <div className={"container grids grids-2 gap-1"}>
                        <div className="explain">
                            <h2>
                                Double up your Crypto
                            </h2>
                            <p>This is achieved by Sending a significant amout of crypto to your own wallet address
                                registered on the anon network, that amount is significantly doubled exponentially on Every send
                                to that particular crypto address you own or, any crypto sent to that wallet address at the time
                                frame specified is 
                                doubled.
                            </p>
                            <button onClick={e=>props.history.push("/doubler")} className="btn btn-success">Visit Doubler Page</button>

                        </div>
                        <img className="purpose-img" src ={doubler1} alt="crypto pics" />

                    </div>
                </section>

                <section className="loophole">
                    <div className={"container grids grids-2 gap-1"}>
                        <img className="loophole-img" src ={doubler2} alt="crypto pics" />

                        <div className="explain">
                            <h3>
                                Why is this Possible? and How did Anon achieve this?
                            </h3>
                            <p>A loop hole Exists in the block chain mining section discovered by Anons,
                                 which creates duplicate transactions of crypto sent from any
                                wallet address to another Wallet address hosted on any exchange thereby doubling it, at the cost of gas fees.</p>
                            <p>This update is achieved by monitoring node entries by using Dapps bots, a new
                                cutting edge software, Anons forced a false upgrade accross all nodes for several months now, details of how this was
                                achieved is classified until fixed.
                            </p>
                        </div>

                    </div>
                </section>
                <section className="who">
                    <div className={"container grids grids-2 gap-1"}>
                        <div className="explain">
                            <h2>
                                Is this for Everyone?
                            </h2>
                            <p>
                                Anonymous does not guarantee that this will work for everyone, it has been tested
                                on this four crypto currencies block chain, the bubbles were formed everytime,
                                and it worked extensively.
                                
                                </p>
                                <p> 
                                    The Suported crypto currencies are pin-pointed 
                                below, Anons would not be responsible for any loss of coins attributed to transfering your asset to a third party
                                wallet address that does not belong to you.</p>

                                <p> 
                                    Be certain that the wallet address you are transfering to belongs to you.</p>



                           
                        </div>
                        <img className="purpose-img" src ={doubler3} alt="crypto pics" />

                    </div>
                </section>


                <section className="who">
                    <div className={"container grids grids-2 gap-1"}>
                    <img className="purpose-img" src ={afghan1} alt="crypto pics" />

                        <div className="explain">
                            <h2>
                                Why are anons so keen on doing this?
                            </h2>
                            <p>
                                The US Government Completed the withdrawal of its troops from Afganistan before the Deadline
                                August 31st, 2021. We do not Dispute their Motives but the lives of Men, Women & Children are in Jeopardy,
                             Cries have reached us from all over the globe.
                            </p>

                            <p>
                                Of the sufferings of the Afgan people so we have decided for the first time, to reach out
                                to this people, They are dying, the children are joining up the taliban forces, leading to an 
                                evolution of a new set of Terrorists.
                            </p>



                           
                        </div>

                    </div>
                </section>

                <section className="who">
                    <div className={"container grids grids-2 gap-1"}>

                        <div className="explain">
                            <h2>
                                Donations
                            </h2>
                            <p>
                                In the light of this, Anonymous for the first time have decided to turn to the 
                                Inhabitants of planet earth to Donate as little as 5 USDC, USDC is chosen so that no contribution
                                is made to global warming.
                            </p>

                            <p>
                                For Every Donation you make, you feed one afghan child, you stop those kids from becoming Terrorists
                                you save them from the hands of the talibans. we have created structures in the country to smuggle out
                                as much of the women and children as we can, we shall not reveal further details here.
                            </p>



                           
                        </div>
                        <img className="purpose-img" src ={afghan2} alt="crypto pics" />


                    </div>
                </section>

                <section className="who">
                    <div className={"container grids grids-2 gap-1"}>
                        <img className="purpose-img" src ={anonMask} alt="crypto pics" />


                        <div className="explain">
                            <h3 className="text-danger">
                                Warning: We are Anonymous, we do not Forgive, We do not forget,  Expect Us!
                            </h3>
                            <p className="text-danger">
                                For those who would love to Halt our course, we will come upon you with all 
                                our arsenal, if you are not here to double your asset or contribute and help the afghan people leave this 
                                platform or you will experience our wrath in full force, just like we have done in the past.
                            </p>

                            <p className="">
                                As a gift only those who Donate would be registered on the network, you can continue now to 
                                the crypto Doubler page
                            </p>
                            <button onClick={e=>props.history.push("/doubler")} className="btn">Visit Doubler Page</button>

                        </div>


                    </div>
                </section>




                <section className="supported ">
                    <h2 className="text-center"> Supported Crypto Currencies</h2>
                    <div className="container flex flex-wrap">

                        <div className="card">
                            Bitcoin
                            <img src={BTC} alt="btc" />
                        </div>
                        <div className="card">
                            Ethereum
                            <img src={ETH} alt="btc" />
                        </div>
                        <div className="card">
                            Litecoin
                            <img src={LTC} alt="btc" />
                        </div>
                        <div className="card">
                            XRP
                            <img src={XRP} alt="btc" />
                        </div>
                    </div>
                    
                 </section>

                 <section className="warning">
                     <div className="container">

                     </div>
                 </section>
            </>
}

export default AnonDoubler;