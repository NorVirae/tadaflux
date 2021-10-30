import React from "react";
import { Link } from "react-router-dom";
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import UseRedirectToHttps from "../utils/useRedirectHttps";
import { activatePlan } from "../functions/user";
import { useSelector } from "react-redux";


function Plans(props) {

  UseRedirectToHttps()


const user = useSelector(state=>state.user)
    const handleSubmit = (res, plans) => {
    // 
      activatePlan({plans, email:user.email, authToken:user.token }).then(res=>{
        console.log(res)
      })
  }


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Crypto Investment Plans</Card.Title>
                <p className="card-category">
                  All plans Provided by TadaFlux
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                      <tr>
                      <th className="border-0">Investment</th>
                      <th className="border-0">RoI</th>
                      <th className="border-0">Duration</th>
                      <th className="border-0">Percentage Profit</th>
                      <th className="border-0">Withdrawal Limit</th>
                      <th className="border-0">Cryto's you can invest with</th>

                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr>
                      <td>$50</td>
                      <td>400% Annually</td>
                      <td>6 - 12 months</td>
                      <td>398% of innitial investment</td>
                      <td>100$ per month, full withdrawal is in 6 - 12 months</td>
                      <td>Eth,BTC,USDC,USDT,XRP</td>
                      <td><CoinbaseCommerceButton onChargeSuccess={(res)=>{handleSubmit(res,{name:"fifty", price:50, profit:0, active:true})}} title="Activate" className="btn btn-success" checkoutId={'1a405985-9fea-4d03-96ba-3ba72b7f5c61'}/></td>
                      {/* https://commerce.coinbase.com/checkout/1a405985-9fea-4d03-96ba-3ba72b7f5c61 */}
                    </tr>
                    

                    <tr>
                      <td>$100</td>
                      <td>400% Yearly</td>
                      <td>6 - 12 months</td>
                      <td>397.5% of innitial investment</td>
                      <td>250$ per month, full withdrawal is in 6 - 12 months</td>
                      <td>Eth,BTC,USDC,USDT,XRP</td>
                      <td><CoinbaseCommerceButton onChargeSuccess={(res)=>{handleSubmit(res,{name:"hundred", price:100, profit:0, active:true})}} title="Activate" className="btn btn-success" checkoutId={'e0a93433-14bb-46ac-8553-4fb70df8e50a'}/></td>
                      {/* https://commerce.coinbase.com/checkout/e0a93433-14bb-46ac-8553-4fb70df8e50a */}
                    </tr>
                    <tr>
                      <td>$250</td>
                      <td>401% Annually, Quarterly</td>
                      <td>4 - 12 months</td>
                      <td>393.40%</td>
                      <td>$350 per month, full withdrawal is in 4 - 12 months</td>
                      <td>All Defi',Eth,BTC,USDC,USDT,XRP</td>
                     
                      <td><CoinbaseCommerceButton onChargeSuccess={(res)=>{handleSubmit(res,{name:"twofifty", price:250, profit:0, active:true})}} title="Activate" className="btn btn-success" checkoutId={'a9ed0085-2926-4cac-9855-692b9ee136fe'}/></td>
                      {/* https://commerce.coinbase.com/checkout/a9ed0085-2926-4cac-9855-692b9ee136fe */}
                    </tr>

                    <tr>
                      <td>$500</td>
                      <td>401% Annually, Bi-Annually</td>
                      <td>4 - 12 months</td>
                      <td></td>
                      <td>$670 per month, full withdrawal is in 6 - 12 months</td>
                      <td>Eth,BTC,USDC,USDT,XRP</td>
                      <td><CoinbaseCommerceButton onChargeSuccess={(res)=>{handleSubmit(res,{name:"fivehundred", price:500, profit:0, active:true})}} title="Activate" className="btn btn-success" checkoutId={'c01afe4f-b0b6-4d7f-b9df-a71489f834e7'}/></td>
                      {/* https://commerce.coinbase.com/checkout/c01afe4f-b0b6-4d7f-b9df-a71489f834e7 */}
                    </tr>
                    
                    <tr>
                      <td>$1000</td>
                      <td>401% Annually, * Months</td>
                      <td>8 - 12 months</td>
                      <td></td>
                      <td>$1000 per month, full withdrawal is in 8 - 12 months</td>
                      <td>Eth,BTC,USDC,USDT,XRP</td>
                      <td><CoinbaseCommerceButton onChargeSuccess={(res)=>{handleSubmit(res,{name:"onethousand", price:1000, profit:0, active:true})}} title="Activate" className="btn btn-success" checkoutId={'bc042746-3143-4e02-8f13-d89a5f4ee575'}/></td>
                      {/* https://commerce.coinbase.com/checkout/bc042746-3143-4e02-8f13-d89a5f4ee575 */}
                    </tr>

                    <tr>
                      <td>$5000</td>
                      <td>403% Annually, Bi-Annually</td>
                      <td>4 - 12 months</td>
                      <td></td>
                      <td>$1000 per month, full withdrawal is in 9 - 12 months</td>
                      <td>Eth,BTC,USDC,USDT,XRP</td>
                      <td><CoinbaseCommerceButton onChargeSuccess={(res)=>{handleSubmit(res,{name:"fivethousand", price:5000, profit:0, active:true})}} title="Activate" className="btn btn-success" checkoutId={'af485876-77df-4f0c-92ab-23a2608a26f6'}/></td>
                      {/* https://commerce.coinbase.com/checkout/af485876-77df-4f0c-92ab-23a2608a26f6 */}
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default Plans;
