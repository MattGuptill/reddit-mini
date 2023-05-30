import subredditSlice from "./Features/subredditSlice";
import searchSlice from "./Features/searchSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        search: searchReducer
    }
})