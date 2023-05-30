import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchResults = createAsyncThunk('search/getSubredditResults', 
    async (term) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${term}`);
        const json = response.json();
        return json.data.children.map(post => post.data)
    }
);


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        term: '',
        results: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        searchTerm: (state, action) => {
            state.term = action.payload;
        },
        clearTerm: (state, action) => {
            state.term = '';
        }
    },
    extraReducers: {
        [getSubredditResults.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getSubredditResults.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
        },
        [getSubredditResults.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default searchSlice.reducer;
export const {searchTerm, clearTerm} = search.actions