import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TDrawingDocument, TShape} from "../types";

interface drawingState {
    drawingDocument: TDrawingDocument,
    history: TDrawingDocument[],
    historyIndex: number
}
const cloneDoc = (doc: TDrawingDocument) => JSON.parse(JSON.stringify(doc))

const initialDoc : TDrawingDocument = {
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
}

const initialState = {
    drawingDocument: initialDoc,
    history: [cloneDoc(initialDoc)],
    historyIndex: 0
} as drawingState


export const drawingSlice = createSlice({
    name: 'drawing',
    initialState,
    reducers: {
        newDrawingDocument: (state, action: PayloadAction<void>): void => {
            const newDoc : TDrawingDocument = {shapes: []}
            state.drawingDocument = newDoc
            state.history = [cloneDoc(newDoc)]
            state.historyIndex = 0
        },

        undo: (state, action: PayloadAction<void>): void => {
            const {history, historyIndex} = state
            if (history.length - 1 > historyIndex) {
                state.historyIndex = historyIndex + 1
                state.drawingDocument = history[state.historyIndex]
            }
        },

        redo: (state, action: PayloadAction<void>): void => {
            const {history, historyIndex} = state
            if (historyIndex > 0) {
                state.historyIndex = historyIndex - 1
                state.drawingDocument = history[state.historyIndex]
            }
        },

        addShape: (state, action: PayloadAction<TShape>): void => {
            const newShape = action.payload
            // set default position and size
            newShape.x = 200
            newShape.y = 200
            newShape.width = 100
            newShape.height = 100

            state.drawingDocument.shapes = [...state.drawingDocument.shapes, newShape]
            state.history = [cloneDoc(state.drawingDocument), ...state.history]
        },

        deleteSelectedShape: (state, action: PayloadAction<void>): void => {
        },

    },
});

export const {
    newDrawingDocument,
    undo,
    redo,
    addShape,
    deleteSelectedShape
} = drawingSlice.actions;

export default drawingSlice.reducer;
