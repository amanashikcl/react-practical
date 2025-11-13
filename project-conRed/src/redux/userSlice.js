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

        },
        changeUserStatus:(state, action)=>{
            const userIndex = state.users.findIndex((u)=> u.id ===  action.payload)
            if(userIndex !==-1){
                state.users[userIndex].status = !state.users[userIndex].status
                localStorage.setItem('users', JSON.stringify(state.users))
            }
            if(state.user?.id === action.payload){
                state.user.status = !state.user.status;
                localStorage.setItem('user', JSON.stringify(state.user));
            }
        },
        changeUserRole:(state, action)=>{
            const userIndex = state.users.findIndex((u)=>u.id=== action.payload.userId);

            if(userIndex !== -1){
                state.users[userIndex].role = action.payload.role;
                localStorage.setItem("users", JSON.stringify(state.users));

            }
            if(action.payload.userId === state.user.id){
                state.user.role = role;
                localStorage.setItem("users", JSON.stringify(state.user))

            }
        },
        

        
        
    }

});
export const { registerUser, userLogin, userLogout, changeUserStatus } = userSlice.actions;
export default userSlice.reducer;