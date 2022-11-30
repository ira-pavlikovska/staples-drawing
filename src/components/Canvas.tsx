import React, {useRef, useEffect} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {TShape} from "../types";

const Canvas = () => {

    const canvasRef = useRef(null)

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

    useEffect(() => {
        const canvas = canvasRef.current
        // @ts-ignore
        const context = canvas.getContext('2d')
        draw(context)
    }, [drawingDocument])

    return <canvas width={500} height={700} ref={canvasRef}/>
}

export default Canvas
