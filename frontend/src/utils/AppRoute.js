import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router';
const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  // const history = useHistory()
  // const user = useSelector(state=>state.user)
  // console.log(children)
  
  
  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;

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

export default AppRoute;