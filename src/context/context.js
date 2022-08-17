import { createContext,useState } from "react";


export const ExpenseContext = createContext({
    currentExpense:null,
    setCurrentExpense : () => null,
})

export const ExpenseProvider = ({children}) =>{
    const [currentExpense,setCurrentExpense] = useState(null);
    const value = {currentExpense,setCurrentExpense};

    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}