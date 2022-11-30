import React, {useEffect, useRef} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {ShapeTypeEnum, TShape, TShapeRect, TShapeText} from "../types";

const drawRect = (ctx: CanvasRenderingContext2D, shape: TShapeRect) => {
    ctx.fillStyle = 'green'
    ctx.fillRect(shape.x, shape.y, shape.width, shape.height)
}

const drawText = (ctx: CanvasRenderingContext2D, shape: TShapeText) => {
    ctx.fillStyle = 'red'
    ctx.font = 'Italic 20px "Fira Sans", serif';
    ctx.fillText(shape.text, shape.x, shape.y);
}

const Canvas = () => {

    const canvasRef = useRef(null)

    const {drawingDocument} = useSelector((state: RootState) => state.drawingReducer);

    const draw = (ctx: CanvasRenderingContext2D) => {
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        drawingDocument.shapes.forEach((shape: TShape) => {
            switch (shape.type) {
                case ShapeTypeEnum.circle:
                    break

                case ShapeTypeEnum.rect:
                    drawRect(ctx, shape as TShapeRect)
                    break

                case ShapeTypeEnum.text:
                    drawText(ctx, shape as TShapeText)
                    break

                case ShapeTypeEnum.image:
                    break
            }
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
