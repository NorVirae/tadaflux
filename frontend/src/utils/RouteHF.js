import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import Header from '../components/layout/Header'

const RouteHF = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
    const user = useSelector(state=>state.user)
    console.log(user, "THIS IS FROM ACTIVATION")
    const history = useHistory()
//   Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;
    // if(user){
    //     history.push("/activate/account")
    // }
  return (
    <Route
      {...rest}
      render={props => {
          return (
              <>
                  <Header className={"sticky-top"} />
                  <Component {...props} />
                  <Footer />
              </>

          );
      }} />
  );
  
}

export default RouteHF;