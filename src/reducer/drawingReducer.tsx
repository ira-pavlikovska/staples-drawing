import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TDrawingDocument} from "../types";

interface drawingState {
    shapes: any,
    test: string

}

const initialState = {
    shapes: [],
    test: 'hi Mister !!! :)'
} as drawingState


export const drawingSlice = createSlice({
    name: 'drawing',
    initialState,
    reducers: {
        newDrawingDocument: (state, action: PayloadAction<TDrawingDocument>): void => {
        },

    },
});

export const {
    newDrawingDocument,
} = drawingSlice.actions;

export default drawingSlice.reducer;
