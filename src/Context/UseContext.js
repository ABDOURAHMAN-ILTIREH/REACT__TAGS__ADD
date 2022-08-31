import { createContext,useReducer } from "react"
import AppReducer from './AppReducer'

const IntialState = {
    Transaction :[
        {id:1, Text: 'react js', Description :'react js is one of the most famoust framwork', complete: false},
        {id:2, Text: 'javascript', Description :'javascript is one of the most famoust programming language', complete: false},
        {id:3, Text: 'python', Description :'pyton is one of the most easias programming language', complete: false},
        {id:4, Text: 'c++', Description :'C++ is the mater of language', complete: false},
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