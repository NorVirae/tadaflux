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

export const deleteUser = async (id, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/userd", {id}, {headers:{authToken}})
}
