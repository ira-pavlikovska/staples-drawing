import React from "react";

import IconButton from '@mui/material/IconButton';
import {TextSnippet, Photo} from '@mui/icons-material';


export default function Shapes() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <IconButton color="primary" aria-label="Text" component="label">
                <TextSnippet />
            </IconButton>
            <IconButton color="primary" aria-label="Image" component="label">
                <Photo />
            </IconButton>
        </div>
    )
}
