import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { getRandomColor } from './utilities/getRandomColor';
import { getRandomQuote } from './utilities/getRandomQuote';

const initState = {
    color: getRandomColor(),
    quote: getRandomQuote(),
};
export const Context = createContext(initState);

export const Store = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    );
};
