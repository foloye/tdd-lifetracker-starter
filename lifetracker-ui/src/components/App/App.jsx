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


import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import axios from "axios";

export default function App() {
  const [appState, setAppState] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [redirectInfo, setRedirectInfo] = useState("")
  const [exer, setExer] = useState(false)

  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Navbar user={appState.user} loggedIn={loggedIn} setLoggedIn ={setLoggedIn}/>
            <Routes>
              <Route path ="/" element = {<LandingPage/>}/>
              <Route path ="/activity" element = {<Activity exer={exer} setExer={setExer} loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo}/>}/>
              <Route path ="/exercise" element = {<Exercise loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo}/>}/>
              <Route path ="/nutrition" element = {<Nutrition loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo}/>}/>
              <Route path ="/sleep" element = {<Sleep loggedIn={loggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo}/>}/>
              <Route path="*" element={<NotFound/>}></Route>
              <Route path="/login" element={<Login setAppState={setAppState} redirect={redirect} redirectInfo={redirectInfo} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setRedirect={setRedirect} setRedirectInfo={setRedirectInfo}/>} />
              <Route path="/register" element={<Register setRedirect={setRedirect} setRedirectInfo={setRedirectInfo} setAppState={setAppState} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />

              
            </Routes>
            
            


          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}


