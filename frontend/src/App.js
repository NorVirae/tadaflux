import React, {Component, useRef,useState, useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import "./App.css"
// import Login from '../src/views/auth/Login'
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import RegisterComplete from './pages/auth/RegisterComplete';

import { ToastContainer } from 'react-toastify';
import AdminLayout from "./layouts/Admin.js";

// Views 
import Home from './views/Home';
import TermsAndCondition from './pages/termsandcondition';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import "react-toastify/dist/ReactToastify.css";
import ForgottenPassword from './pages/auth/ForgottenPassword';
import CryptoPayPage from './pages/auth/CryptoPayPage';
import {currentUser} from './functions/currentUser';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import ActRoute from './utils/ActRoute';
import UserDashboard from './pages/user/UserDash';
import InfoPage from './pages/auth/InfoPage';
import Features from './pages/Features';
import RouteHF from './utils/RouteHF';



// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();
  const [mountedT, setMountedT] = useState(false)
  const dispatch = useDispatch()
  

  
  
  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);


    const unsuscribe = auth.onAuthStateChanged(async (user)=>{
      console.log(user)
      if(user){
      const idTokenResult = await user.getIdTokenResult()
          currentUser(idTokenResult.token).then((res)=>{
              console.log('FROM THE APP JS SPECTRUM',res)
              dispatch({
                  type:"LOGGED_IN_USER", payload:{email:user.email,
                    activated:res.data.activated,
                     token:idTokenResult.token, 
                      name: res.data.name,
                      picture: res.data.picture}
              })
          }).catch((err)=>{
              console.log(err)
          })
          
      }
      
  })


    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => unsuscribe()

  }, [location]);

 

  return (<>
          <ToastContainer/>
          <ActRoute exact path="/terms" component={TermsAndCondition} />
          <Route exact path="/activate/account" component={CryptoPayPage} />
          <Route exact path="/user/d" component={UserDashboard} />
          <Route exact path="/info" component={InfoPage} />
          <RouteHF exact path="/features" component={Features} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          

          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path={"/register/complete"} component={RegisterComplete} exact={true} />

          <Route exact path="/forgotten/password" component={ForgottenPassword} />

          {/* <AppRoute exact path="/terms" component={TermsAndCondition} layout={LayoutDefault} /> */}

    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          

          {/* <AppRoute exact path="/" component={Login} layout={LayoutDefault} />
          <AppRoute exact path="/" component={Register} layout={LayoutDefault} />
          <AppRoute exact path="/" component={ForgottenPassword} layout={LayoutDefault} /> */}

        </Switch>
      )} /></>
  );
}

export default App;