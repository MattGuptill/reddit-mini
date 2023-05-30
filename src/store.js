import subredditsReducer from "./Features/subredditSlice";
import searchReducer from "./Features/searchSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        search: searchReducer
    }
})

export default store;