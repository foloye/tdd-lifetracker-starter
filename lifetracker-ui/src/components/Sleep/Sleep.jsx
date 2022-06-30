import * as React from "react"
import "./Sleep.css"
import { useNavigate, Link, Navigate } from "react-router-dom"

export default function Sleep(props) {

  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.loggedIn) {
    navigate("/login")
    props.setRedirect(true)
    props.setRedirectInfo("sleep")
  }
  },[])

  return (
    <div className="sleep">
        <h2>Sleep</h2>
        
        
    </div>
  )
}
