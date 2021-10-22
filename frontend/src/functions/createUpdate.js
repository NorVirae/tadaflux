import axios from 'axios';


export const createOrUpdateUser = async (authToken) => {
    console.log(process.env.REACT_APP_API)
    console.log(process.env.REACT_APP_LOCALHOST, "THIS IS FROM THE CREATE UPDATE")
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/createupdateuser", {},
        {headers:{authToken}})
}

