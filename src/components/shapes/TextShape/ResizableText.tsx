// @ts-nocheck
import React, { useRef, useEffect } from "react";
import { Text, Transformer } from "react-konva";

export function ResizableText({
                                  shapeProps,
                                  text,
                                  isSelected,
                                  onClick,
                                  onDoubleClick,
                                  onChange
                              }) {
    const textRef = useRef(null);
    const transformerRef = useRef(null);

    useEffect(() => {
        if (isSelected && transformerRef.current !== null) {
            transformerRef.current.nodes([textRef.current]);
            transformerRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    const transformer = isSelected ? (
        <Transformer
            ref={transformerRef}
            boundBoxFunc={(oldBox, newBox) => {
                newBox.width = Math.max(30, newBox.width);
                return newBox;
            }}
        />
    ) : null;

    return (
        <>
            <Text
                ref={textRef}
                text={text}
                fill="black"
                fontFamily="sans-serif"
                fontSize={24}
                perfectDrawEnabled={false}
                onClick={onClick}
                onTap={onClick}
                onDblClick={onDoubleClick}
                onDblTap={onDoubleClick}
                {...shapeProps}
                draggable

                onDragEnd={(e) => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
                onTransformEnd={(e) => {
                    // transformer is changing scale of the node
                    // and NOT its width or height
                    // but in the store we have only width and height
                    // to match the data better we will reset scale on transform end
                    const node = textRef.current;
                    if (!node) return;

                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();

                    // we will reset it back
                    node.scaleX(1);
                    node.scaleY(1);
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        // set minimal value
                        width: Math.max(5, node.width() * scaleX),
                        height: Math.max(node.height() * scaleY),
                    });
                }}
            />
            {transformer}
        </>
    );
}
