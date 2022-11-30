import React, {useState} from 'react';
import {Box} from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Toolbar from "../components/Toolbar";
import ShapesBar from "../components/ShapesBar";
import Canvas from "../components/Canvas";
import { Stage, Layer, Rect, Text, Transformer } from 'react-konva';
import Rectangle from '../components/shapes/Rectangle'
import {ShapeTypeEnum, TShape, TShapeRect} from "../types";
import Konva from 'konva';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {selectShape, updateShapes} from "../reducer/drawingReducer";


const Item = styled('div')(({theme}) => ({
    backgroundColor: '#ffffff',
    border: '1px solid',
    borderColor: '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
}));

export default function DrawingContainer() {

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
                        <Stage width={500} height={700}
                               onMouseDown={checkDeselect}
                        >
                            <Layer>
                                {drawingDocument.shapes.map((rect, i) => {
                                    return (
                                        <Rectangle
                                            key={i}
                                            shapeProps={rect}
                                            isSelected={rect.id === selectedId}
                                            onSelect={() => {
                                                dispatch(selectShape(rect.id));
                                            }}
                                            onChange={(newAttrs: TShapeRect) => {
                                                const rects = drawingDocument.shapes.slice();
                                                rects[i] = newAttrs;
                                                dispatch(updateShapes(rects))
                                            }}
                                        />
                                    );
                                })}
                            </Layer>
                        </Stage>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}
