import * as React from "react"
import "./App.css"
import LandingPage from "../LandingPage/LandingPage"
import Navbar from "../Navbar/Navbar"
import NotFound from "components/NotFound/NotFound"
import Sleep from "../Sleep/Sleep"
import Register from "../Register/Register"
import Login from "../Login/Login"
import Exercise from "../Exercise/Exercise"
import Nutrition from "../Nutrition/Nutrition"
import Activity from "../Activity/Activity"
import CreateNutrition from "components/CreateNutrition/CreateNutrition"
import apiClient from "components/services/apiClient"
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import axios from "axios";
import { AuthContextProvider, useAuthContext } from "../contexts/auth";
// import ProtectedRoute from "components/ProtectedRoute/Login"
export default function AuthContainer(){
  
    return(
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    )
}




 function App() {
  const [appState, setAppState] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [redirectInfo, setRedirectInfo] = useState("")
  const [nutritionItems, setNutritionItems] = useState([])
  const [exer, setExer] = useState(false)

  const handleLogout = async () => { 
    await apiClient.logoutUser();     
    // setError(null);
    setLoggedIn(false)
    setAppState({})
  }
  // console.log("nutrition items", nutritionItems)
  // React.useEffect(() => {
  //   localStorage.clear()
  // },[])
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Navbar handleLogout={handleLogout} user={appState.user} setAppState={setAppState} loggedIn={loggedIn} setLoggedIn ={setLoggedIn}/>
            <Routes>
              <Route path ="/" element = {<LandingPage/>}/>
              <Route path ="/activity" element = {<Activity nutritionItems={nutritionItems} setNutritionItems={setNutritionItems} exer={exer} setExer={setExer} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
              <Route path ="/exercise" element = {<Exercise loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
              <Route path ="/nutrition" element = {<Nutrition nutritionItems={nutritionItems} setNutritionItems={setNutritionItems} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
              <Route path ="/nutrition/create" element = {<CreateNutrition nutritionItems={nutritionItems} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
              <Route path ="/sleep" element = {<Sleep loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>}/>
              <Route path="*" element={<NotFound/>}></Route>
              <Route path="/login" element={<Login setAppState={setAppState} redirect={redirect} redirectInfo={redirectInfo} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} appState={appState}/>} />
              <Route path="/register" element={<Register setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} setAppState={setAppState} loggedIn={loggedIn} setLoggedIn={setLoggedIn} appState={appState}/>} />

              
            </Routes>
            
            


          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}


