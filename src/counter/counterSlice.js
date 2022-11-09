import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: ["saad"]
  },
  reducers: {
    updateData:(state,action)=>{
        state.data=[...state.data,action.payload]
    },
    deleteData:(state,action)=>{
      state.data.splice(action.payload,1)
    },
    clearData:(state)=>{
      state.data=[]
    },
    editData:(state,action)=>{
      state.data[action.payload.index]=action.payload.text
    }

  }
})

// Action creators are generated for each case reducer function
export const {updateData,deleteData,clearData,editData} = counterSlice.actions

export default counterSlice.reducer