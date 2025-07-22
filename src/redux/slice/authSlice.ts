import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface AuthInterface{
    userToken:string,
    isLoading:boolean,
    isAuthentication:boolean
}

const initialState:AuthInterface ={
    isLoading:false,
    isAuthentication:false,
    userToken:''
}

 const AuthSlice = createSlice({
    name:'Authentication',
    initialState,
    reducers:{
        storeToken:(state,action:PayloadAction<string>)=>{
            state.userToken=action.payload
            state.isAuthentication=false
        }
    }
 })

export const {storeToken}= AuthSlice.actions

 export default AuthSlice.reducer