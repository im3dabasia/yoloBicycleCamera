import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameReducer";

const store = configureStore({
    reducer: {
        nameReducer: nameSlice.reducer,

    }
})

export default store