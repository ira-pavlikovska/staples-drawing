import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TDrawingDocument, TShape} from "../types";

interface drawingState {
    drawingDocument: TDrawingDocument,
    test: string

}

const initialState = {
    drawingDocument: {
        shapes: [
            {
                type: 'rect',
                x: 10,
                y: 10,
                width: 200,
                height: 100
            },
            {
                type: 'rect',
                x: 110,
                y: 150,
                width: 50,
                height: 100
            },
        ]
    },
    test: 'hi Mister !!! :)'
} as drawingState


export const drawingSlice = createSlice({
    name: 'drawing',
    initialState,
    reducers: {
        newDrawingDocument: (state, action: PayloadAction<TDrawingDocument>): void => {
        },

        addShape: (state, action: PayloadAction<TShape>): void => {
        },

    },
});

export const {
    newDrawingDocument,
    addShape
} = drawingSlice.actions;

export default drawingSlice.reducer;
