import * as React from "react"
import "./NutritionCard.css"
import { useNavigate, Link, Navigate } from "react-router-dom"

export default function NutritionCard(props) {
//<NutritionCard name={item.name} key={item.id} category={item.category} 
//calories={item.calories} image_url={item.image_url}
  return (
    <div className="nutrition-card">
        <h2>{props.name}</h2>
        <img className="nPhoto" src={props.image_url} />
        <h4>Category: {props.category}</h4>
        <h4>Calories: {props.calories}</h4>
        
        
        
    </div>
  )
}
