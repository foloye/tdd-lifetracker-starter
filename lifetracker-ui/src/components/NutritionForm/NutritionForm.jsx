import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./NutritionForm.css"
import apiClient from "components/services/apiClient"


export default function NutritionForm(props) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    calories: "",
    image_url: "",
  })
  // console.log("appstate id", props.appState.user.id)
  

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  // console.log("id number", props.appState)
  const handleOnSubmit = async () => {
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
      const {data, error} = await apiClient.createNutrition({
        name: form.name,
        category: form.category,
        calories: form.calories,
        image_url: form.image_url,
        user_id: props.appState.user.id,
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer ${props.appState.token}`,
        // },
      })
      if (error) {
        setErrors(error)
      }
      if (data) {
        navigate("/nutrition")
        setForm({
          name: "",
          category: "",
          quantity: "",
          calories: "",
          image_url: "",
        })
      }
      setIsLoading(false);
      
    //   if (res?.data?.user) {
        
        
    //   } else {
    //     setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
    //     setIsLoading(false)
    //   }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
      setIsLoading(false)
    }
  }

  return (
    <div className="nutrition-form">
      <div className="nutrition-form-card">
        <h2>Record Nutrition</h2>

        <div className="split-inputs">

            <div className="input-one">
                <label className="nLabel" htmlFor="name">Name</label><br/>
                <input
                    type="text"
                    name="name"
                    placeholder="Nutrition name"
                    value={form.name}
                    onChange={handleOnInputChange}
                />
                
            </div>
            <div className="input-two">
              <label className="nLabel" htmlFor="category">Category</label><br/>
              <input
                type="text"
                name="category"
                placeholder=" Nutrition category"
                value={form.category}
                onChange={handleOnInputChange}
              />
            </div>
            <div className="input-five">
                <label className="nLabel" htmlFor="quantity">Quantity</label><br/>
                <input
                type="text"
                name="text"
                placeholder="1"
                value={form.quantity}
                onChange={handleOnInputChange}
                />
                
            </div>
            <div className="input-three">
              <label className="nLabel" htmlFor="calories">Calories</label><br/>
              <input
                type="text"
                name="calories"
                placeholder="1"
                value={form.calories}
                onChange={handleOnInputChange}
              />
              
            </div>
            <div className="input-four">
                <label className="nLabel" htmlFor="image_url">Image Url</label><br/>
                <input
                type="text"
                name="image_url"
                placeholder="image_url.jpg"
                value={form.email}
                onChange={handleOnInputChange}
                />
           
            </div>

            

        </div>
          <button className="nSave" disabled={isLoading} onClick={handleOnSubmit}>
            Save
          </button>
          
        </div>

    
      </div>
  )
}