import React from 'react';
import { useSelector } from 'react-redux';
import UserNav from '../../components/nav/UserNav'
const Suscriber = (props) => {
    const user = useSelector(state=>state.user)

    useEffect(() => {
        if (user.Activated){}
        props.history.push("/")
      return () => {
        
      };
    }, [])
    return <div className="container">
        <div className={"row"}>
            <div className={"col-md-3"}>
                <UserNav/>
                </div>
    
            </div> 
    <h1>This is the suscribers page!</h1></div>
}

export default Suscriber;