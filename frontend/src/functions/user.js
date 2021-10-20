import axios from 'axios';

export const listUsers = async () =>{
    return await axios.get("http://localhost:8000/api/orders")
}

export const createUser= async ({neworder,authToken} )=>{
    console.log("INSIDE CREATE ORDER")
    return await axios.post("http://localhost:8000/api/user", {neworder}, {headers:{authToken}})
}

export const readUser = async (id) => {
    console.log("GOT IN SOMEHOW")
    return await axios.get("http://localhost:8000/api/user/"+id)
}

export const updateUser = async (values, authToken) => {
    return await axios.put("http://localhost:8000/api/user", values, {headers:{authToken}})
}

export const deleteUser = async (id, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post("http://localhost:8000/api/userd", {id}, {headers:{authToken}})
}
