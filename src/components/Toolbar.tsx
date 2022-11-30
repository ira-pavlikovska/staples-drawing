import React from "react";
import IconButton from '@mui/material/IconButton';
import {NoteAdd, Undo, Redo, Delete} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {newDrawingDocument, undo, redo, deleteSelectedShape} from "../reducer/drawingReducer";
import Grid from "@mui/system/Unstable_Grid";

export default function Toolbar() {
    const dispatch = useDispatch()

    return (
        <Grid container spacing={1}>
            <Grid xs={1}>
                <IconButton onClick={() => dispatch(newDrawingDocument())} color="primary" aria-label="New Document" component="label">
                    <NoteAdd/>
                </IconButton>
            </Grid>
            <Grid xs={10}>
                <IconButton onClick={() => dispatch(undo())} color="primary" aria-label="Undo" component="label">
                    <Undo/>
                </IconButton>
                <IconButton onClick={() => dispatch(redo())} color="primary" aria-label="Redo" component="label">
                    <Redo/>
                </IconButton>
            </Grid>
            <Grid xs={1}>
                <IconButton onClick={() => dispatch(deleteSelectedShape())} color="primary" aria-label="Delete selected shape" component="label">
                    <Delete/>
                </IconButton>
            </Grid>
        </Grid>
    )
}
