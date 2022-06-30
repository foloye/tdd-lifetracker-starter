import * as React from "react"
import "./Nutrition.css"
import { useNavigate, Link, Navigate } from "react-router-dom"

export default function Nutrition(props) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.loggedIn) {
    navigate("/login")
    props.setRedirect(true)
    props.setRedirectInfo("nutrition")
  }
},[])

  return (
    <div className="nutrition">
        <h2>Nutrition</h2>
        
        
    </div>
  )
}
