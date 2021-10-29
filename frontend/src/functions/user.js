import axios from 'axios';

export const listUsers = async () =>{
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/orders")
}

export const createUser= async ({neworder,authToken} )=>{
    console.log("INSIDE CREATE ORDER")
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/user", {neworder}, {headers:{authToken}})
}

export const readUser = async (id) => {
    console.log("GOT IN SOMEHOW")
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/user/"+id)
}

export const updateUser = async (values, authToken) => {
    return await axios.put(process.env.REACT_APP_LOCALHOST+"/api/user", values, {headers:{authToken}})
}

export const activateUser = async (values, authToken) => {
    console.log("FroM ACTIVATE USER", values)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/activate", {email:values}, {headers:{authToken}})

}

export const activatePlan = async ({plans, email, authToken}) => {
    console.log("FroM ACTIVATE PLAN", plans, email)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/activateplan", {email, plans}, {headers:{authToken}})

}

export const fetchPlans = async ({plans, email, authToken}) => {
    console.log("FroM ACTIVATE PLAN", plans, email)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/activateplan", {email, plans}, {headers:{authToken}})

}

export const deletePlans = async ({plans, email, authToken}) => {
    console.log("FroM ACTIVATE PLAN", plans, email)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/activateplan", {email, plans}, {headers:{authToken}})

}



export const deleteUser = async (id, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/userd", {id}, {headers:{authToken}})
}
