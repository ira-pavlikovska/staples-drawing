import React from "react";

import IconButton from '@mui/material/IconButton';
import {TextSnippet, Photo} from '@mui/icons-material';
import {useDispatch} from 'react-redux';
import {addShape} from "../reducer/drawingReducer";
import {ShapeTypeEnum, TShapeCircle, TShapeRect, TShapeText} from "../types";


export default function ShapesBar() {
    const dispatch = useDispatch()
    const newRect: TShapeRect = {
        type: ShapeTypeEnum.rect,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }
    const newCircle: TShapeCircle = {
        type: ShapeTypeEnum.circle,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }

    const newText: TShapeText = {
        type: ShapeTypeEnum.text,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        text: 'new text'
    }


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <IconButton
                onClick={() => dispatch(addShape(newText))}
                color="primary" aria-label="Text" component="label">
                <TextSnippet/>
            </IconButton>
            <IconButton
                onClick={() => dispatch(addShape(newRect))}
                color="primary" aria-label="Image" component="label">
                <Photo/>
            </IconButton>
        </div>
    )
}
