import { useSelector } from "react-redux"


const checkAct = (props, user)=>{
    // const user = useSelector(state=>state.user)
    if (user){
            if (user.activated == "true"){
                props.history.push("/admin/dashboard")

            }else {
                props.history.push("/activate/account")
            }
    }else {
        props.history.push("/login")
    }
}
export default checkAct