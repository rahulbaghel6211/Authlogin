import React, { useReducer } from 'react';

const AuthContext=React.createContext();

const initState={
    isAuth:false,
    token:null
}

const authReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":{
            return{
                ...state,
                isAuth:true,
                token:action.payload
            }
        }
        case "LOGOUT_SUCCESS":{
            return{
                ...state,
                isAuth:true,
                token:null
            }
        }
        default:{
            return state
        }
    }
}
function AuthContextProvider({children}){
    const[state,dispatch]=useReducer(authReducer,initState)
    return(
        <AuthContext.Provider value={[state,dispatch]}>
        {children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthContextProvider };