import React from 'react';
import {Box} from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Toolbar from "../components/Toolbar";
import ShapesBar from "../components/ShapesBar";
import Canvas from "../components/Canvas";
import {RootState} from "../store";
import {useSelector} from 'react-redux';
import {TShape} from "../types";


const Item = styled('div')(({theme}) => ({
    backgroundColor: '#ffffff',
    border: '1px solid',
    borderColor: '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
}));


export default function DrawingContainer() {

    const {drawingDocument} = useSelector((state: RootState) => state.drawingReducer);

    const draw = (ctx: CanvasRenderingContext2D) => {
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        drawingDocument.shapes.forEach((shape: TShape) => {
            ctx.fillStyle = 'green'
            ctx.fillRect(shape.x, shape.y, shape.width, shape.height)
        })
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
                        <Canvas draw={draw}/>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}
