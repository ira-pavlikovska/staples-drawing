import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TDrawingDocument, TShape} from "../types";

interface drawingState {
    drawingDocument: TDrawingDocument,
    history: TDrawingDocument[],
    historyIndex: number,
    selectedId: string
}

const cloneDoc = (doc: TDrawingDocument) => JSON.parse(JSON.stringify(doc))

const initialDoc: TDrawingDocument = {
    shapes: [
    ]
}

const initialState = {
    drawingDocument: initialDoc,
    history: [cloneDoc(initialDoc)],
    historyIndex: 0,
    selectedId: ''
} as drawingState


export const drawingSlice = createSlice({
    name: 'drawing',
    initialState,
    reducers: {
        newDrawingDocument: (state, action: PayloadAction<void>): void => {
            const newDoc: TDrawingDocument = {shapes: []}
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
            newShape.width = 200
            newShape.height = 200

            state.drawingDocument.shapes = [...state.drawingDocument.shapes, newShape]
            state.history = [cloneDoc(state.drawingDocument), ...state.history]
        },

        deleteSelectedShape: (state, action: PayloadAction<void>): void => {

            if (!state.selectedId) return;

            state.drawingDocument.shapes = state.drawingDocument.shapes
                .filter(shape => shape.id !== state.selectedId)

            state.selectedId = '' // deselect
        },

        updateShapes: (state, action: PayloadAction<TShape[]>): void => {
            state.drawingDocument.shapes = action.payload
            state.history = [cloneDoc(state.drawingDocument), ...state.history]
        },

        selectShape: (state, action: PayloadAction<string>): void => {
            state.selectedId = action.payload
        },

    },
});

export const {
    newDrawingDocument,
    undo,
    redo,
    addShape,
    deleteSelectedShape,
    updateShapes,
    selectShape,
} = drawingSlice.actions;

export default drawingSlice.reducer;
