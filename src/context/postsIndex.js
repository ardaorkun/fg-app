import React, { createContext, useState } from 'react'

export const IndexContext = createContext()

export const IndexProvider = ({ children }) => {
  const [index, setIndex] = useState(1)

  return (
    <IndexContext.Provider value={{ index, setIndex }}>
      {children}
    </IndexContext.Provider>
  )
}