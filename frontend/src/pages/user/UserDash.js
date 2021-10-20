import useSelection from 'antd/lib/table/hooks/useSelection';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';






const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}




const UserDashboard = (props) => {

    const user = useSelector(state => state.user)

    useEffect(()=>{
        console.log(user, "INSIDE USERDASH")
        if (user && user.Activated === true){
            props.history.push("/activate/account")
        }
        return ()=>{}

    },[])
    
    return <div className="container-fluid">
               This is the User d
           </div>
}

export default UserDashboard;