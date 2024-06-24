'use client'
import { createContext, useContext, useState } from 'react'

// create a new context
const GlobalContext = createContext()

// create a provider
export const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  )
}

// Create custom hook to access context

export const useGlobalContext = () => useContext(GlobalContext)
