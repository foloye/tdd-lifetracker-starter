import * as React from "react"
import "./CreateNutrition.css"
import { useNavigate, Link, Navigate } from "react-router-dom"
import NutritionForm from "components/NutritionForm/NutritionForm"

export default function CreateNutrition(props) {
    

  return (
    <div className="nutrition">
        <h2>Create Nutrition</h2>
        <NutritionForm appState={props.appState}/>
        
        
        
    </div>
  )
}
