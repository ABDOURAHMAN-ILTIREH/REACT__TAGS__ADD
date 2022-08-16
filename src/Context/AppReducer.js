export default (state, action)=>{
    switch(action.type){
    case 'DELETE_TRANSACTIONS':return{
           ...state,
           Transaction: state.Transaction.filter(transaction => transaction.id !== action.payload)
      };
    case 'ADD_TRANSACTIONS':
        return{
            ...state,
            Transaction : [action.payload, ...state.Transaction]
        }
        default:
            return state;
        
    }
}