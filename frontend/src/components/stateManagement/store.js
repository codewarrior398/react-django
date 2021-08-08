import React, {createContext, useReducer} from 'react';
import {textState, textReducer, CommentTriggerReducer,commentTriggerState} from './genericReducer';

const reduceReducers = (...reducers) => (prevState, value, ...args) =>
    reducers.reduce(
        (newState, reducer) =>reducer(newState,value,...args),
        prevState
    );

const combineReducers = reduceReducers(textReducer,CommentTriggerReducer);

const initialState = {
    ...textState,
    ...commentTriggerState,
}
const store =  createContext(initialState);
const {Provider} = store

const StateProvider =({children})=>{
    const [state,dispatch] = useReducer(combineReducers,initialState);
    return <Provider value={{state,dispatch}}>{children}</Provider>
};

export { store , StateProvider };