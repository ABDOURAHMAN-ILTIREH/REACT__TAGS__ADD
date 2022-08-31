import { createContext,useReducer } from "react"
import AppReducer from './AppReducer'

const IntialState = {
    Transaction :[
        {id:3, Text: 'python', Description :'Pyton Est L’un Des Langages De Programmation Les Plus facile'},
    ]
    
}


export const GlobalContext = createContext(IntialState);

// Provider compoments

export const GlobalProvider = ({children})=>{

    const [state, Dispatch] = useReducer(AppReducer, IntialState);
     
    // supprime la tags liste
    function DeleteTransaction(id){
        Dispatch({
        type:'DELETE_TRANSACTIONS',
        payload: id,
       })
    }
     
    // ajoute un tags liste
    function AddTransactions(Transaction){
        Dispatch({
            type:'ADD_TRANSACTIONS',
            payload: Transaction,
        })
    }
   
   

    return( 
    <GlobalContext.Provider value={{Transaction : state.Transaction,
     DeleteTransaction,
      AddTransactions}}>
       {children}
    </GlobalContext.Provider>)
} 