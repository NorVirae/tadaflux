import React from 'react';
import UseRedirectToHttps from '../../utils/useRedirectHttps';


const InfoPage = ()=>{
  UseRedirectToHttps()

    return <div className="container">
        <div classname="row justify-content-center mb-5">
            <div className={"col-lg-4 alert-info m-5 p-2 border"}>
                you have been sent and email visit your mailer to Verify email address
            </div>
            </div>

    </div>
}

export default InfoPage;