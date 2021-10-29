import React , {useState, useEffect} from "react";
import { Modal  } from 'antd';


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import checkAct from "../functions/checkForActivation";


function Withdrawal(props) {
const [visible, setVisible] = useState(false)
const user = useSelector(state=>state.user)

  useEffect(()=>{
    
    checkAct(props, user)
  return ()=>{}
}, [])
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">No KYC Needed</Card.Title>
                
              </Card.Header>
              <Card.Body>
                {/* <div className="typography-line">
                  <h1>
                    <span></span>
                    The Life of Light Bootstrap Dashboard React
                  </h1>
                </div> */}
                {/* <div className="typography-line">
                  <h2>
                    <span>Convert your Crypto to Fiat(Dollars, Euros, pounds) and get it sent directly to your account</span>
                    The Life of Light Bootstrap Dashboard React
                  </h2>
                </div> */}
                <div className="typography-line">
                  <h3>
                    <span>Address</span>
                    Copy and paste your Preferred BTC wallet address
                  </h3>

                  <fieldset className="form-group">
                  <input className={"form-control"}/></fieldset>
                </div>
                <div className="typography-line">
                  <h4>
                    <span>Bank Transfer</span>
                    Convert your Crypto to Fiat(Dollars, Euros, pounds etc) and get it sent directly to your account
                    
                  </h4>

                  <>
      
      <Modal
        title="Success!!"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={400}
      >
        <p>Your Wallet Address has been saved</p>
        
      </Modal>
    </>

                    <button onClick={() => setVisible(true)} className="btn btn-outline-success">Submit</button>

                </div>
                
                {/* <div className="typography-line">
                  <h5>
                    <span>Header 5</span>
                    The Life of Light Bootstrap Dashboard React
                  </h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>
                    The Life of Light Bootstrap Dashboard React
                  </h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>I will be the leader of a company that
                    ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think
                    that’s a responsibility that I have, to push possibilities,
                    to show people, this is the level that things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>Muted Text</span>
                  <p className="text-muted">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Primary Text</span>
                  <p className="text-primary">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Info Text</span>
                  <p className="text-info">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Success Text</span>
                  <p className="text-success">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Warning Text</span>
                  <p className="text-warning">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Danger Text</span>
                  <p className="text-danger">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle <br></br>
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Withdrawal;
