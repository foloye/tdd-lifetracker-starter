import * as React from "react"
import "./Nutrition.css"
import { useNavigate, Link, Navigate } from "react-router-dom"
import NutritionOverview from "components/NutritionOverview/NutritionOverview"
import { NutritionContextProvider, useNutritionContext } from "../contexts/nutrition";
export default function NutritionContainer(props){
  
    return(
        <NutritionContextProvider>
            <Nutrition nutritionItems={props.nutritionItems} setNutritionItems={props.setNutritionItems} loggedIn={props.loggedIn} setRedirect={props.setRedirect} setRedirectInfo={props.setRedirectInfo} appState={props.appState} />
        </NutritionContextProvider>
    )
}

function Nutrition(props) {
  
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.loggedIn) {
    navigate("/login")
    props.setRedirect(true)
    props.setRedirectInfo("nutrition")
  }
},[])
  // console.log("nutrition page arr", props.nutritionItems)
  return (
    <div className="nutrition">
        <h1>Nutrition</h1>
        {/* <div className="btnRec">
          <button className="nBtn"><Link className="nLink" to="/nutrition/create">Record Nutrition</Link></button>
        </div> */}
        <NutritionOverview nutrition={props.nutritionItems} />
        
        
        
    </div>
  )
}

// import { useState, useEffect } from "react"
// import { useNavigate, Link } from "react-router-dom"
// import axios from "axios"
// import "./Nutrition.css"
// import NutritionOverview from "components/NutritionOverview/NutritionOverview"

// export default function Nutrition({ setAppState, loggedIn, setRedirect, setRedirectInfo, appState}){
//     console.log(appState)
//     const navigate = useNavigate()
//   useEffect(() => {
//     if (!loggedIn) {
//     // navigate("/login")
//     // setRedirect(true)
//     // setRedirectInfo("nutrition")
//   }
// },[])
//     return (
//       <div className="nutrition">
//           <h2>Nutrition</h2>
//           <div className="btnRec">
//             <button className="nBtn"><Link className="nLink" to="/nutrition/create">Record Nutrition</Link></button>
//           </div>
//           <NutritionOverview />
          
          
          
//       </div>
//     )
// }