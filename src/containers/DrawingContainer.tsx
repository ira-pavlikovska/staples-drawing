// @ts-nocheck
import React, {useState} from 'react';
import {Box} from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Toolbar from "../components/Toolbar";
import ShapesBar from "../components/ShapesBar";
import { Stage, Layer, Rect, Text, Transformer } from 'react-konva';
import Rectangle from '../components/shapes/Rectangle'
import {ShapeTypeEnum, TShape, TShapeImage, TShapeRect, TShapeText} from "../types";
import Konva from 'konva';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {selectShape, updateShapes} from "../reducer/drawingReducer";
import ImageShape from "../components/shapes/ImageShape";
import {TextShape} from "../components/shapes/TextShape/TextShape";


const Item = styled('div')(({theme}) => ({
    backgroundColor: '#ffffff',
    border: '1px solid',
    borderColor: '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
}));

export default function DrawingContainer() {

    // const [text, setText] = useState("Click to resize. Double click to edit.");
    // const [width, setWidth] = useState(200);
    // const [height, setHeight] = useState(200);
    // const [selected, setSelected] = useState(false);

    const dispatch = useDispatch()
    const {drawingDocument, selectedId} = useSelector((state: RootState) => state.drawingReducer);

    const checkDeselect = (e: Konva.KonvaEventObject<MouseEvent>) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            dispatch(selectShape(''));
        }
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1}>
                <Grid xs={12}>
                    <Item>
                        <Toolbar/>
                    </Item>
                </Grid>
                <Grid xs={1}>
                    <Item style={{height: '704px'}}>
                        <ShapesBar/>
                    </Item>
                </Grid>
                <Grid xs={11}>
                    <Item style={{backgroundColor: '#ced7e0'}}>
                        <Stage width={window.innerWidth} height={window.innerHeight}
                               onMouseDown={checkDeselect}
                        >
                            <Layer>
                                {drawingDocument.shapes.map((shape, i) => {
                                    switch (shape.type) {
                                        case ShapeTypeEnum.rect:
                                            return (
                                                <Rectangle
                                                    key={i}
                                                    shapeProps={shape}
                                                    isSelected={shape.id === selectedId}
                                                    onSelect={() => {
                                                        dispatch(selectShape(shape.id));
                                                    }}
                                                    onChange={(newAttrs: TShapeRect) => {
                                                        const rects = drawingDocument.shapes.slice();
                                                        rects[i] = newAttrs;
                                                        dispatch(updateShapes(rects))
                                                    }}
                                                />
                                            );

                                        case ShapeTypeEnum.text:
                                            return (
                                                <TextShape
                                                    key={i}
                                                    // x={50}
                                                    // y={50}
                                                    // text={shape.text}
                                                    colour="#FFDAE1"
                                                    // onTextChange={(value) => setText(value)}
                                                    // width={width}
                                                    // height={height}
                                                    selected={shape.id === selectedId}
                                                    // isSelected={shape.id === selectedId}
                                                    onSelect={() => {
                                                        dispatch(selectShape(shape.id));
                                                    }}
                                                    // onTextResize={(newWidth, newHeight) => {
                                                    //     setWidth(newWidth);
                                                    //     setHeight(newHeight);
                                                    // }}
                                                    shapeProps={shape}
                                                    // isSelected={shape.id === selectedId}

                                                    onClick={() => {
                                                        dispatch(selectShape(shape.id));
                                                    }}
                                                    // onTextClick={(newSelected) => {
                                                    //     // setSelected(newSelected);
                                                    //     dispatch(selectShape(shape.id));
                                                    // }}
                                                    onChange={(newAttrs: TShapeText) => {
                                                        const rects = drawingDocument.shapes.slice();
                                                        rects[i] = newAttrs;
                                                        dispatch(updateShapes(rects))
                                                    }}

                                                />
                                            )

                                        case ShapeTypeEnum.image:
                                            return (
                                                <ImageShape
                                                    key={i}
                                                    shapeProps={shape}
                                                    isSelected={shape.id === selectedId}
                                                    onSelect={() => {
                                                        dispatch(selectShape(shape.id));
                                                    }}
                                                    onChange={(newAttrs: TShapeRect) => {
                                                        const rects = drawingDocument.shapes.slice();
                                                        rects[i] = newAttrs;
                                                        dispatch(updateShapes(rects))
                                                    }}
                                                />
                                            );
                                    }


                                })}
                            </Layer>
                        </Stage>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}
