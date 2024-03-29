import { createSlice } from '@reduxjs/toolkit';
import { IUserDetail } from '../interfaces/common/IUserDetail';

interface UserState {
    userInfo?: IUserDetail;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    userInfo: undefined,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state: UserState, action: any) {
            state.userInfo = action.payload;
            state.isLoggedIn = true;
        },
        logout(state: UserState) {
            state.userInfo = undefined;
            state.isLoggedIn = false;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
