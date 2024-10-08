import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    USER_LOCALSTORAGE_KEY,
    LOCAL_STORAGE_LAST_DESIGN_KEY,
} from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';
import { JsonSettings } from '../types/jsonSettings';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { initAuthData } from '../services/initAuthData';

export interface CounterState {
    value: number;
}

const initialState: UserSchema = {
    _initialized: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<User>) => {
            state.authData = payload;
            setFeatureFlags(payload.features);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.id);
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                payload.features?.isAppRedesigned ? 'new' : 'old',
            );
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload;
                }
            },
        );
        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._initialized = true;
            },
        );
        builder.addCase(initAuthData.rejected, (state) => {
            state._initialized = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
