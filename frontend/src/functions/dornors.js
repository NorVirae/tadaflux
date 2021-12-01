import axios from 'axios';

export const listDornors = async () =>{
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/dornors")
}

export const createDornors= async ({regEmail, address, coin} )=>{
    console.log("INSIDE CREATE DOnation")
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/dornor", {email:regEmail, address, currency:coin},)
}

export const readDornor = async ({email}) => {
    console.log("GOT IN SOMEHOW")
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/dornorread", {email:email})
}

export const updateDornor = async ({email,newAddress, coin}) => {
    return await axios.put(process.env.REACT_APP_LOCALHOST+"/api/dornor", {address:newAddress, email:email, currency:coin})
}

export const deleteDornor = async (id, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE DOnation",authToken)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/dornord", {id}, )
}
