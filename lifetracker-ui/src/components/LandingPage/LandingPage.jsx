import * as React from "react"
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <div className="landing-page">
        <h2>Landing Page</h2>
        <div className="center-land">
            <img src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg" alt="image of smart watch"/>
            <h1 className="title-center">Life Tracker</h1>
            <h4 className="text-center">Everywhere around us is data waiting to be collected and utilized. In recent years we've seen the rise of applications and services that exist to quantify concepts that were previously hard to capture. FitBit, Apple Health, and Woop are all $1 billion dollar services to offer tracking statistics about how we live our lives. The LifeTracker app you'll be building will do exactly that - track your life by quantifying your activity.</h4>   
      
        </div>
        
    </div>
  )
}
