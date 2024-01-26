'use client'
import { createContext, useState } from 'react'

export const LoadedContext = createContext()

export const LoadedProvider = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <LoadedContext.Provider value={{ isLoaded, setIsLoaded }}>
      {props.children}
    </LoadedContext.Provider>
  )
}
