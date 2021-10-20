import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';


const ActRoute = ({
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
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
  );
  
}

export default ActRoute;