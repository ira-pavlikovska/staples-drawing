import {configureStore} from '@reduxjs/toolkit';
import drawingReducer from './reducer/drawingReducer';

export const store = configureStore({
    reducer: {
        drawingReducer: drawingReducer,
        // users: usersReducer
    }

})

export type AppDispatch = typeof store.dispatch
