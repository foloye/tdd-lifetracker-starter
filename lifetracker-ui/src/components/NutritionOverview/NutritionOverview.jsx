import * as React from "react"
import "./NutritionOverview.css"
import { useNavigate, Link, Navigate } from "react-router-dom"
import NutritionCard from "components/NutritionCard/NutritionCard"
import { useNutritionContext } from "../contexts/nutrition";

export default function NutritionOverview(props) {
  let data = useNutritionContext()
  
  data = data.nutritions

  let none = "closeN"
  if (data.length != 0) {
    none = "openN"
  }

  return (
    <div className="nutrition-overview">
      <div className="overview-title">
        <h1 className="overview">Overview</h1> 
        <div className="btnRec">
          <button className="nBtn"><Link className="nLink" to="/nutrition/create">Record Nutrition</Link></button>
        </div>
      </div>
        
        <div className={none}>
          <h2>Nothing to show yet.</h2>
        </div>
        <div className="nCards">
            {data.map((item) => (
                <NutritionCard name={item.name} key={item.id} category={item.category} calories={item.calories} image_url={item.image_url}/>
            ))}
        </div>
        
        
        
        
        
    </div>
  )
}
