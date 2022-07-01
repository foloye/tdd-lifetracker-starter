import * as React from "react"
import "./Activity.css"
import { useState } from "react"
import { useNavigate, Link, Navigate } from "react-router-dom"

export default function Activity(props) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.loggedIn) {
    navigate("/login")
    props.setRedirect(true)
    props.setRedirectInfo("activity")
  }
  if (props.exer) {
      console.log("exercise btn pushed:", props.exer)
      // navigate("/exercise")
      
    }
  },[])
  
  function handleEClick() {
    props.setExer(true)
  }
  function handleSClick() {
    navigate("/sleep")
  }
  function handleNClick() {
    navigate("/nutrition")
  }
  
  return (
    <div className="Activity">
      <div className="title">
        <h2>Activity Feed</h2>
      </div>
      <div className="buttons">
        <button className="eBtn" ><Link className="eLink" to="/exercise">Add Exercise</Link></button>
        <button className="sBtn"><Link className="sLink" to="/sleep">Log Sleep</Link></button>
        <button className="nBtn"><Link className="nLink" to="/nutrition/create">Record Nutrition</Link></button>
      </div>
      <br/>
      <div className="stats">
        <div className="exercise-div">
          <h2>Total Exercise Minutes</h2>
          <h1>0</h1>
        </div>
        <div className="sleep-div">
          <h2>Avg Sleep Hours</h2>
          <h1>0</h1>
        </div>
        <div className="nutrition-div">
          <h2>Average Daily Calories</h2>
          <h1>0</h1>
        </div>
      </div>
      <br/>
      <h1 className="more">More Stats</h1>
      <br/>
      <div className="more-stats">
        
        <div className="calories-div">
          <h2>Maximum Hourly Calories</h2>
          <h2>0</h2>
        </div>
        <div className="intensity-div">
          <h2>Avg Exercise Intensity</h2>
          <h2>0</h2>
        </div>
        <div className="hours-div">
          <h2>Total Hours Slept</h2>
          <h2>0</h2>
        </div>
      </div>
        
        
        
    </div>
  )
}
