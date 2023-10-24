import { toastError, toastSuccess } from '../components/ToastHelper/toastHelper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    infoLogin: {},
};
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // login
        fetchLogin(state, params) {
            state.infoLogin = null;
        },
        fetchLoginSuccess: (state, action) => {
            const { data, message } = action.payload;
            toastSuccess(message);
            state.infoLogin = data;
        },
        fetchLoginFailed: (state, action) => {
            const { message } = action.payload;
            toastError({
                message,
            });
        },
    },
});
export const {
    fetchLogin, fetchLoginSuccess, fetchLoginFailed,
} = loginSlice.actions;

export default loginSlice.reducer;
