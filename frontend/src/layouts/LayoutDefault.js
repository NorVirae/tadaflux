import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';


const LayoutDefault = ({ children, props }) =>{
  const history = useHistory()
  const user = useSelector(state=>state.user)

  console.log(children , "IN LAYOUT")
  useEffect(()=>{
    console.log("THIS IS FROM Layout")
    console.log(user)
    if (user){
      children.props.history.push("/admin/plans")
    }
    return ()=>{}
  }, [user])


  
   

  return(
  <>
    <Header navPosition="right" className="sticky-top reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
)};

export default LayoutDefault;  