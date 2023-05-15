import { createSlice } from "@reduxjs/toolkit";

const LoadingSlice = createSlice({
    name: "loading",
    initialState: { loading: true, error: null },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload.Loading;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload.Error;
        },
        setDefault: (state) => {
            state.loading = false;
            state.error = null;
        },
    },
});

export const LoadingActions = LoadingSlice.actions;

export default LoadingSlice;
