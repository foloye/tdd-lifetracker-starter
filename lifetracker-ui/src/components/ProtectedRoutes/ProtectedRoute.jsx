import { useAuthContext } from "components/contexts/auth";
import Login from "../Login/Login"

export default function ProtectedRoute({ element }){
    const {user, intialized } = useAuthContext()
    const data = useAuthContext()
    console.log(data, "this is data")
    if (!data.intialized) {
        return null
    }

    if(data.intialized && data.appState.length == 0){
     element = <Login message="You must be logged in to access that page"/>
    }
    return (
        {element}
    )
}
    