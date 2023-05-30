import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk('subreddits/getSubreddits', async () => {
    const response = await fetch('https://www.reddit.com/subreddits.json');
    const json = await response.json();
    return json.data.children.map(subreddit => subreddit.data)
});

const subredditSlice = createSlice({
    name: 'subreddits',

    initialState: {
        subreddits: [],
        isLoading: false,
        hadError: false
    },
    
    reducers: {},

    extraReducers: {
        [getSubreddit.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },

        [getSubreddit.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
        },

        [getSubreddit.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
})

export default subredditSlice.reducers;
