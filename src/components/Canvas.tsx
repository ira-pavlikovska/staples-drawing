import React, {useRef, useEffect} from 'react'

type TCanvasProps = {
    draw: (ctx: CanvasRenderingContext2D) => void;
}

const Canvas = (props: TCanvasProps) => {

    const {draw} = props
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        // @ts-ignore
        const context = canvas.getContext('2d')
        const render = () => {
            draw(context)
        }
        render()
    }, [draw])

    return <canvas ref={canvasRef}/>
}

export default Canvas
