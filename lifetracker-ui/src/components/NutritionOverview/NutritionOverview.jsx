import * as React from "react"
import "./NutritionOverview.css"
import { useNavigate, Link, Navigate } from "react-router-dom"
import NutritionCard from "components/NutritionCard/NutritionCard"

export default function NutritionOverview(props) {

  return (
    <div className="nutrition-overview">
        <h2 className="overview">Overview</h2>
        <div className="nCards">
            {props.nutritionItems.map((item) => (
                <NutritionCard name={item.name} key={item.id} category={item.category} calories={item.calories} image_url={item.image_url}/>
            ))}
        </div>
        
        
        
        
        
    </div>
  )
}
