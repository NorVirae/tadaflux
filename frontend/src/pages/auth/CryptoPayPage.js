import React, {useEffect, useState} from 'react';
import {auth, googleAuthProvider} from '../../firebase';
import {toast}  from 'react-toastify';
import { Button,Modal  } from 'antd';
import  {Link} from 'react-router-dom';
// import {Modal} from 'react-bootstrap'
// import { PaymentMethods } from 'react-payment';


import {MailOutlined, LoadingOutlined , GoogleOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { createOrUpdateUser } from '../../functions/createUpdate';
import Logo from '../../components/layout/partials/Logo';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
// import PasswordStrengthBar from 'react-password-strength-bar';





const CryptoPayPage = (props)=>{
    const [visible, setVisible] = useState(false);

    const [modalShow, setModalShow] = useState(false);
    // console.log(props)
    if (typeof props.location.state != 'undefined'){
        toast.success(props.location.state.msg)
    }
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    console.log("THIS IS FROM THE CRYPTO PAG", user)

    // const createOrUpdateUser = async (authToken) => {
    //     console.log(process.env.REACT_APP_API)
    //     return await axios.post("http://localhost:8000/api/createupdateuser", {},
    //         {headers:{authToken}})
    // }
    const properRedirect = (res) =>{
        console.log('INSIDE PROPER REDIRECT')
        console.log(res)

        if (user.Activated === false){
            props.history.push("/activate/account")
            console.log("ACTIVATED JUST GOT EXECUTED")

        }

        else if( typeof props.location.state != 'indefined'){
            console.log("STATE JUST GOT EXECUTED")

            if(props.location.state.role == 'suscriber'){
                console.log("IN-------STATE JUST GOT EXECUTED")
                
            props.history.push("/activate/account")
                }

        }else if(res.data.role == "admin"){
            console.log("ADMIN JUST GOT EXECUTED")
            
            props.history.push("/admin/dashboard")

        }else{
        console.log("ELSE EXECUTED")
        props.history.push("/")

        }
        
       

    }
    
    


    const [email, setEmail] = useState('norbertmbafrank@gmail.com')
    const [password, setPassword] = useState('calister')
    const [loading, setLoading] = useState(false)

    
    // function MyVerticallyCenteredModal(props) {
        
    //     return (
    //       <Modal
    //         {...props}
    //         size="lg"
    //         aria-labelledby="contained-modal-title-vcenter"
    //         centered
    //       >
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             Modal heading
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //           <h4>Centered Modal</h4>
    //           <p>
    //             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    //             consectetur ac, vestibulum at eros.
    //           </p>
    //         </Modal.Body>
    //         <Modal.Footer>
    //           <Button onClick={props.onHide}>Close</Button>
    //         </Modal.Footer>
    //       </Modal>
    //     );
    //   }
      
    const handleSubmuit = async (res) =>{
        console.log(res)
        
    }

    
    return (
    <div className={"container p-5"}>
        <Logo/>

        <div className={"row justify-content-center"}>
            <div className={"shadow col-lg-8 border p-2 offset-md-3"}>
                <center><h3>Activation Token!!</h3></center>
                <h5 className={"text-success"}>
               <p> Your Account have not been activated You need to Buy an Activation Token, 
                    This Token will Enable you to access The TadaFlux bot, this Token is acquired once, you need this to proceed to your account.
                    </p> </h5>
                   
                    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                        Launch vertically centered modal
                    </Button> */}

                    

      {/* <PaymentMethods
  showCards={true}
  showBanks={false}
  cards={[{ id: '1', last4: '1234', brand: 'visa' }]}
  onAddCard={this.showCardFormDialog}
  onRemoveCard={this.removeCard}
  /> */}


                    {/* <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                            /> */}

                    <img className={"img-fluid w-50"} src={require("../../assets/images/crypto2.png")} />

                 
                    
                    <CoinbaseCommerceButton onChargeSuccess={(res)=>{handleSubmuit(res)}} title="Activate" className="btn btn-success" checkoutId={'e2885338-401b-46c8-a7fd-1875e7967441'}/>
                    



                    <hr/>

                    Alternatively pay with your card...
                    
                    <img className={"img-fluid w-50"} src={require("../../assets/images/cardpay.jpeg")} />
                    <>
      
      <Modal
        title="Error 500"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={400}
      >
        <p>Sorry!!, We Cannot Process Bank Payments at this time</p>
        
      </Modal>
    </>

                    <button onClick={() => setVisible(true)} className="btn btn-outline-success">Buy with Card</button>
            </div>

            
        </div>
    </div>

    
    
    )
    
    }
export default CryptoPayPage;