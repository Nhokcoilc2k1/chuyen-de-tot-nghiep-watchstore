import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions';

export const loginSlice = createSlice({
    name: 'userLogin',
    initialState: {
        userInfo: null,
        isLoading: false,
        errorMessage: null,
        success: false
    },
    extraReducers: (builder) => {
        builder.addCase(actions.loginRedux.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(actions.loginRedux.fulfilled, (state, action) => {
          state.isLoading = false;
          state.success = true;
          state.userInfo = action.payload
        });
        builder.addCase(actions.loginRedux.rejected, (state, action) => {
          state.isLoading = false;
          state.errorMessage = action.payload;
          state.success = false;
        });
      },
})


// export const {} = appSlice.actions
export default loginSlice.reducer