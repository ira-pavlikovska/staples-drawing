// @ts-nocheck
import React from 'react';
import {Box} from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Toolbar from "../components/Toolbar";
import ShapesBar from "../components/ShapesBar";
import {Stage, Layer} from 'react-konva';
import Rectangle from '../components/shapes/Rectangle'
import {ShapeTypeEnum, TShapeImage, TShapeRect, TShapeText} from "../types";
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

    const dispatch = useDispatch()
    const {drawingDocument, selectedId} = useSelector((state: RootState) => state.drawingReducer);

    const checkDeselect = (e: Konva.KonvaEventObject<MouseEvent>) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            dispatch(selectShape(''));
        }
    };

    const renderRectangle = (shape: TShapeRect, idx: number) => {
        return (
            <Rectangle
                key={shape.id}
                shapeProps={shape}
                isSelected={shape.id === selectedId}
                onSelect={() => {
                    dispatch(selectShape(shape.id));
                }}
                onChange={(newAttrs: TShapeRect) => {
                    const shapes = drawingDocument.shapes.slice();
                    shapes[idx] = newAttrs;
                    dispatch(updateShapes(shapes))
                }}
            />
        );
    }

    const renderText = (shape: TShapeText, idx: number) => {
        return (
            <TextShape
                key={shape.id}
                colour="#FFDAE1"
                selected={shape.id === selectedId}
                onSelect={() => {
                    dispatch(selectShape(shape.id));
                }}
                shapeProps={shape}
                onClick={() => {
                    dispatch(selectShape(shape.id));
                }}
                onChange={(newAttrs: TShapeText) => {
                    const shapes = drawingDocument.shapes.slice();
                    shapes[idx] = newAttrs;
                    dispatch(updateShapes(shapes))
                }}
            />
        )
    }

    const renderImage = (shape: TShapeImage, idx: number) => {
        return (
            <ImageShape
                key={shape.id}
                shapeProps={shape}
                isSelected={shape.id === selectedId}
                onSelect={() => {
                    dispatch(selectShape(shape.id));
                }}
                onChange={(newAttrs: TShapeRect) => {
                    const shapes = drawingDocument.shapes.slice();
                    shapes[idx] = newAttrs;
                    dispatch(updateShapes(shapes))
                }}
            />
        );
    }


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
                                            return renderRectangle(shape as TShapeRect, i)

                                        case ShapeTypeEnum.text:
                                            return renderText(shape as TShapeText, i)

                                        case ShapeTypeEnum.image:
                                            return renderImage(shape as TShapeImage, i)
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
