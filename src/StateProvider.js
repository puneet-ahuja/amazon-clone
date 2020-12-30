// TODO : Need to understand this pattern.
// Data Layer
// We need to track basket details from here.

import React, { createContext, useContext, useReducer } from 'react';


// This is our data layer.
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}> 
        {children}
    </StateContext.Provider>
)


// This is how we use state inside any component.
export const useStateValue = () => useContext(StateContext)