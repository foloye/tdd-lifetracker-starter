import * as React from "react"
import "./Activity.css"
import { useState } from "react"
import { useNavigate, Link, Navigate } from "react-router-dom"
// import { useNutritionContext } from "../contexts/nutrition";
import { useAuthContext } from "../contexts/auth";
import { NutritionContextProvider, useNutritionContext } from "../contexts/nutrition";
export default function NutritionContainer(props){
  
    return(
        <NutritionContextProvider>
            <Activity nutritionItems={props.nutritionItems} setNutritionItems={props.setNutritionItems} loggedIn={props.loggedIn} setRedirect={props.setRedirect} setRedirectInfo={props.setRedirectInfo} appState={props.appState} />
        </NutritionContextProvider>
    )
}

 function Activity(props) {
  const [avgCal, setAvgCal] = useState(0);
  const data = useNutritionContext();
  const notdata = useAuthContext()
  console.log(notdata, "not data")
  // let dataArr = data.nutritions
  
   console.log("this is authcontext in activity", data.nutritions)
  // console.log("this is the appstate", props.appState)
 

  function calcAvg(arr){
    let avg = 0;
    for(let i =0; i<arr.length; i++) {
      avg += parseInt(arr[i].calories)
    }
    return avg/arr.length
  }


  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.loggedIn) {
    navigate("/login")
    props.setRedirect(true)
    props.setRedirectInfo("activity")
  } 
  
    setAvgCal(Math.round(calcAvg(data.nutritions)))
    console.log("average calories", avgCal)
    props.setNutritionItems(data.nutritions)
  
  
  
  
  
  },[data])
  

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
          <h1>N/A</h1>
        </div>
        <div className="sleep-div">
          <h2>Avg Sleep Hours</h2>
          <h1>N/A</h1>
        </div>
        <div className="nutrition-div">
          <h2>Average Daily Calories</h2>
          <h1>{avgCal}</h1>
        </div>
      </div>
      <br/>
      <h1 className="more">More Stats</h1>
      <br/>
      <div className="more-stats">
        
        <div className="calories-div">
          <h2>Maximum Hourly Calories</h2>
          <h2>{avgCal}</h2>
        </div>
        <div className="intensity-div">
          <h2>Avg Exercise Intensity</h2>
          <h2>N/A</h2>
        </div>
        <div className="hours-div">
          <h2>Total Hours Slept</h2>
          <h2>N/A</h2>
        </div>
      </div>
      <div className="space">
        <h4></h4>
      </div>
        
        
        
    </div>
  )
}
