import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
}
const nameSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        }
    }

})

// To export actions
export const nameAction = nameSlice.actions;

// To export slice
export default nameSlice;