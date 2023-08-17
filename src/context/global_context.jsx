import React, { useContext, useEffect, useState } from 'react'

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  const [changePage, setChangePage] = useState(false)

  useEffect(() => {
    if (changePage) {
      document.body.classList.add('bg-body')
    } else {
      document.body.classList.remove('bg-body')
    }
  }, [changePage])
  return (
    <GlobalContext.Provider value={{ changePage, setChangePage }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
