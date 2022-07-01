import * as React from "react"
import "./Nutrition.css"
import { useNavigate, Link, Navigate } from "react-router-dom"
import NutritionOverview from "components/NutritionOverview/NutritionOverview"

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
        <div className="btnRec">
          <button className="nBtn"><Link className="nLink" to="/nutrition/create">Record Nutrition</Link></button>
        </div>
        <NutritionOverview nutritionItems={props.nutritionItems}/>
        
        
        
    </div>
  )
}
