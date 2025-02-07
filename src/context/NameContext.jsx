import { createContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

export const NameContext = createContext();

const NameProvider = ({ children }) => {
  const [naames, setNaames] = useLocalStorage('naames', []);

  const value = { naames, setNaames }

  return (
    <NameContext.Provider value={value}>
      {children}
    </NameContext.Provider>
  )
}

export default NameProvider