import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollRecoverySchema } from '../types/ScrollRecoverySchema';

const initialState: ScrollRecoverySchema = {
    scroll: {},
};

export const scrollRecoverySlice = createSlice({
    name: 'scrollRecovery',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollRecoveryActions } = scrollRecoverySlice;
export const { reducer: scrollRecoveryReducer } = scrollRecoverySlice;
