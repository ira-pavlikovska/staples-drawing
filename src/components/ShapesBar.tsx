import React from "react";

import IconButton from '@mui/material/IconButton';
import {TextSnippet, Photo, Rectangle} from '@mui/icons-material';
import {useDispatch} from 'react-redux';
import {addShape} from "../reducer/drawingReducer";
import {ShapeTypeEnum, TShapeImage, TShapeRect, TShapeText} from "../types";
import { v4 as uuidv4 } from 'uuid';

export default function ShapesBar() {
    const dispatch = useDispatch()
    const newRect: TShapeRect = {
        type: ShapeTypeEnum.rect,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        fill: 'red',
        id: 'rect',
    }

    const newText: TShapeText = {
        type: ShapeTypeEnum.text,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        text: 'new text - click to resize, double-click to edit',
        fill: 'red',
        id: 'text',
    }
    const newImage: TShapeImage = {
        type: ShapeTypeEnum.image,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        fill: 'white',
        id: 'image',
        imageURL: 'https://konvajs.org/assets/lion.png',
    }


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <IconButton
                onClick={() => dispatch(addShape({...newText, id: 'text' + uuidv4()}))}
                color="primary" aria-label="Text" component="label">
                <TextSnippet/>
            </IconButton>
            <IconButton
                onClick={() => dispatch(addShape({...newImage, id: 'image' + uuidv4()}))}
                color="primary" aria-label="Image" component="label">
                <Photo/>
            </IconButton>
            <IconButton
                onClick={() => dispatch(addShape({...newRect, id: 'rect' + uuidv4()}))}
                color="primary" aria-label="Rectangle" component="label">
                <Rectangle/>
            </IconButton>
        </div>
    )
}
