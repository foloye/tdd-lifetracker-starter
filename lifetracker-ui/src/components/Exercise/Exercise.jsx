import * as React from "react"
import "./Exercise.css"
import { useNavigate, Link, Navigate } from "react-router-dom"

export default function Exercise(props) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.loggedIn) {
    navigate("/login")
    props.setRedirect(true)
    props.setRedirectInfo("exercise")
  }
},[])

  return (
    <div className="exercise">
        <h1>Exercise</h1>
        <div className="tbdE">
          <h2>Nothing to show yet.</h2>
        </div>
        
        
    </div>
  )
}


// <Route path ="/" element = {<LandingPage/>}/>
//               <Route path ="/activity" element ={<ProtectedRoute element={<Activity nutritionItems={nutritionItems} setNutritionItems={setNutritionItems} exer={exer} setExer={setExer} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>} /> 
//               <Route path ="/exercise" element ={<ProtectedRoute element={<Exercise loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>} /> 
//               <Route path ="/nutrition" element ={<ProtectedRoute element={<Nutrition nutritionItems={nutritionItems} setNutritionItems={setNutritionItems} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>} /> 
//               <Route path ="/nutrition/create" element ={<ProtectedRoute element={<CreateNutrition nutritionItems={nutritionItems} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>} /> 
//               <Route path ="/sleep" element ={<ProtectedRoute element={<Sleep loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>} />
//               <Route path="*" element={<NotFound/>}></Route>
//               <Route path="/login" element={<Login setAppState={setAppState} redirect={redirect} redirectInfo={redirectInfo} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>} />
//               <Route path="/register" element={<Register setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} setAppState={setAppState} loggedIn={loggedIn} setLoggedIn={setLoggedIn} appState={appState}/>} />
