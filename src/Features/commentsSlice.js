import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchComments = createAsyncThunk('comments/getComments',
    async() => {
        const response = await fetch(`https://www.reddit.com/comments.json`);
        const json = await response.json();
        return json;
    } 
);

console.log(fetchComments())

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        
        comments: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},

    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.error = false;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
        }
    }

});

export default commentsSlice.reducer;