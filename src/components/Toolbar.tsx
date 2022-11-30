import React from "react";
import IconButton from '@mui/material/IconButton';
import {NoteAdd, Undo, Redo, Delete} from '@mui/icons-material';


export default function Toolbar() {
    return (
        <div>
            <IconButton color="primary" aria-label="New Document" component="label">
                <NoteAdd/>
            </IconButton>

            <IconButton color="primary" aria-label="Undo" component="label">
                <Undo/>
            </IconButton>
            <IconButton color="primary" aria-label="Redo" component="label">
                <Redo/>
            </IconButton>
            <IconButton color="primary" aria-label="Delete shape" component="label">
                <Delete/>
            </IconButton>
        </div>
    )
}
