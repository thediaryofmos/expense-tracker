import React, { Children, createContext, useReducer} from 'react';

//create initial state
const initialSatte = {
    transactions: [
        {id: 1, description: 'Income 1', transactionAmount: 1000},
        {id: 2, description: 'Income 2', transactionAmount: -500},
        {id: 3, description: 'Expense 1', transactionAmount: 5000},
        {id: 4, description: 'Expense 2', transactionAmount: -1000},
    ]
}

//create global context
export const GlobalContext = createContext(initialSatte);

//create a provider for global context
export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer[AppReducer, initialState]
    return(
        <GlobalContext.Provider value = {
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}