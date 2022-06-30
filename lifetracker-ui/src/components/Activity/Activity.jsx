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
      <div className="button">
        <button className="eBtn" onClick={handleEClick}>Add Exercise</button>
        <button className="sBtn">Log Sleep</button>
        <button className="nBtn">Record Nutrition</button>
      </div>
      <br/>
      <div className="stats">
        <div className="exercise-div">
          <h2>Total Exercise Minutes</h2>
        </div>
        <div className="sleep-div">
          <h2>Avg Sleep Hours</h2>
        </div>
        <div className="nutrition-div">
          <h2>Average Daily Calories</h2>
        </div>
      </div>
      <br/>
      <h2>More Stats</h2>
      <br/>
      <div class="more-stats">
        <div className="calories-div">
          <h2>Maximum Hourly Calories</h2>
        </div>
        <div className="intensity-div">
          <h2>Avg Exercise Intensity</h2>
        </div>
        <div className="hours-div">
          <h2>Total Hours Slept</h2>
        </div>
      </div>
        
        
        
    </div>
  )
}
