import { createSlice } from '@reduxjs/toolkit';


const initalState = {
    isloading: false,
    loggedin: false,
    user: null,
}

export  const authSlice = createSlice({
    name: 'auth',
    initalState,
    reduserc : {
        loginUserStart: state => {
            state.isloading = true
        },
        loginUserSuccess: state =>{},
        loginUserFailure: state => {},
        registerUserStart:state => {
            state.isloading = true
        },
        registerUserSuccess: state => {
            state.logidin = true
            state.isloading = false
        },
        registerUserFailure: state =>{
            state.isloading =false
            state.error = 'error'
        }
    }
})

export const {loginUserStart, registerUserStart, registerUserSuccess, registerUserFailure} =authSlice.actions
export default authSlice.reducer