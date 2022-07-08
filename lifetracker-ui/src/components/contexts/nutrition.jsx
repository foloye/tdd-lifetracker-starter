import {createContext, useState, useContext, useEffect} from 'react'
import apiClient from "../services/apiClient";
const NutritionContext = createContext(null);
export const NutritionContextProvider = ({children}) => {
    const [nutritions, setNutritions] = useState([]);
    const [initialized, setInitialized] = useState();
    const [isProcessing, setIsProcessing] = useState();
    const [error, setError] = useState({nutrition: ""});
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        // console.log("useEffect nutrition")
        //check if user is logged in
        const fetchUser = async () => {
            const {data, err} = await apiClient.fetchUserFromToken()
            if (data) setLoggedIn(true);
            if (err) setError(err);
        }
        const fetchNutr = async () => {
            const {data, err} = await apiClient.fetchNutrition();
            // console.log(loggedIn, data);
            if (data) setNutritions(data.nutrition);
            if (err) setError(err);
        }
          const token = localStorage.getItem("lifetracker_token");
          if(token) {
            apiClient.setToken(token)
            fetchUser()
          }
          if (loggedIn){
              setIsProcessing(true);
              fetchNutr();
          }
          setIsProcessing(false)
          setInitialized(true)
    }, [loggedIn, initialized])
    
    const nutritionValue = {nutritions,
        setNutritions,
        initialized,
        setInitialized,
        isProcessing,
        setIsProcessing,
        error,
        setError
        // newNutrition
    }
    return (
        <NutritionContext.Provider value={nutritionValue}>
            <>{children}</>
        </NutritionContext.Provider>
    )
}
//  export const useNutritionContext = () => useContext(NutritionContext)
export function useNutritionContext() {
    const context = useContext(NutritionContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    // console.log("context", context)
    return context;
    
}