import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    username: null
  },
  reducers: {
    contact :(state,action) => {
        state.username = action.payload;
    },
    getBack :(state) => {
    state.username =null;
   }
  },
})

// Action creators are generated for each case reducer function
export const {contact,getBack} = userSlice.actions;
export const selectUser= (state) => state.username.username;  //a const that represent the value of the state user inside theuser reducer
export default userSlice.reducer;