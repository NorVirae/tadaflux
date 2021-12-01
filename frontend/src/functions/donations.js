import axios from 'axios';

export const listDonations = async () =>{
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/donations")
}

export const createDonations= async ({neworder,authToken} )=>{
    console.log("INSIDE CREATE DOnation")
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/donation", {neworder},)
}

export const readDonation = async (name) => {
    console.log("GOT IN SOMEHOW")
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/donationread", {name:"afghan"})
}

export const updateDonation = async (values) => {
    return await axios.put(process.env.REACT_APP_LOCALHOST+"/api/donation", values)
}

export const deleteDonation = async (id, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE DOnation",authToken)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/donationd", {id}, )
}
