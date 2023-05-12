import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState={
    counter:0,   //state  name, can declare no of states//
    
}
 export const counterSlice= createSlice({
    name:'counters',  //name of counter slice//
    initialState,
    reducers:{
        inc :(state)=>{            //state and functions are called inside a reducer
            state.counter +=1
        },
        dec : (state)=>{
            state.counter -=1
        },
        incrementbyamount:(state,actions)=>{
            state.counter = Number (actions.payload)
        },
    },
 })
 export const{ inc,dec,incrementbyamount}= counterSlice.actions
 export default counterSlice.reducer
