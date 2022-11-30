import React from "react";
import IconButton from '@mui/material/IconButton';
import {NoteAdd, Undo, Redo, Delete} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {newDrawingDocument, undo, redo, deleteSelectedShape} from "../reducer/drawingReducer";

export default function Toolbar() {
    const dispatch = useDispatch()

    return (
        <div>
            <IconButton onClick={() => dispatch(newDrawingDocument())} color="primary" aria-label="New Document" component="label">
                <NoteAdd/>
            </IconButton>

            <IconButton onClick={() => dispatch(undo())} color="primary" aria-label="Undo" component="label">
                <Undo/>
            </IconButton>
            <IconButton onClick={() => dispatch(redo())} color="primary" aria-label="Redo" component="label">
                <Redo/>
            </IconButton>
            <IconButton onClick={() => dispatch(deleteSelectedShape())} color="primary" aria-label="Delete selected shape" component="label">
                <Delete/>
            </IconButton>
        </div>
    )
}
