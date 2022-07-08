import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from '../services/apiClient'
const AuthContext = createContext(null)
export const AuthContextProvider = ({ children }) => {
  const [appState, setAppState] = useState([])
  const [error, setError] = useState({ appState: '' })
  const [initialized,setInitialized]= useState(false)
  useEffect(() => {
    const fetchUserFromToken = async () => {
      const { data, error } = await apiClient.fetchUserFromToken()
      console.log('From Authcontext', data)
      if (data) {
        setAppState(data)
        setInitialized(true)
      }
      if (error) {
        setError(error)
      }
    }
    const token = localStorage.getItem('lifetracker_token')
    if (token) {
      apiClient.setToken(token)
      fetchUserFromToken()
    }
    else {
      setInitialized(true)
    }
  },[])
  const userValue = {
    appState,
    setAppState,
    error,
    setError,
    initialized
  }
  return (
    <AuthContext.Provider value={userValue}>
      <>{children}</>
    </AuthContext.Provider>
  )
}
export const useAuthContext = () => useContext(AuthContext)