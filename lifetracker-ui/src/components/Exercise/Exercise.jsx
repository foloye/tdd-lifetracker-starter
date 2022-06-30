import * as React from "react"
import "./Exercise.css"
import { useNavigate, Link, Navigate } from "react-router-dom"

export default function Exercise(props) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.loggedIn) {
    navigate("/login")
    props.setRedirect(true)
    props.setRedirectInfo("exercise")
  }
},[])

  return (
    <div className="exercise">
        <h2>Exercise</h2>
        
        
    </div>
  )
}
