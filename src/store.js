import subredditsReducer from "./Features/subredditSlice";
import searchReducer from "./Features/searchSlice";
import commentsReducer from './Features/commentsSlice';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        search: searchReducer,
        comments: commentsReducer
    }
})

export default store;