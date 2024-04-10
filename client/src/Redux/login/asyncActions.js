import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiLogin } from "~/apis/user";
 
export const loginRedux = createAsyncThunk(
    'userLogin/loginRedux',
    async(data, {rejectWithValue}) => {
        try {
            const response = await apiLogin(data);
            console.log(response);
        return response;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)