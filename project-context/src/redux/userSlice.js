import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: JSON.parse(localStorage.getItem("users")) || [],
        loading: false,
        error: null,
        user: null,
        isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) ||  false
    },
    reducers: {
        registerUser: (state, action) => {
            state.users.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        userLogin: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(state.user));
            localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
        },

        userLogout: (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');

        }
    }

});
export const { registerUser, userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;