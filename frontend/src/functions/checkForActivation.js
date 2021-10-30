import { useSelector } from "react-redux"
import { toast } from "react-toastify"


const checkAct = (props, user)=>{
    // const user = useSelector(state=>state.user)
    if (user){
            if (!user.activated){

                // props.history.push("/admin/dashboard")
                // toast.success("Welcome!")
                props.history.push("/activate/account")


            }
    }else {
        props.history.push("/login")
    }
}
export default checkAct