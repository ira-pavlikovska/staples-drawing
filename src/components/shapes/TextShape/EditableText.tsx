// @ts-nocheck
import React from "react";
import { ResizableText } from "./ResizableText";
import { EditableTextInput } from "./EditableTextInput";

const RETURN_KEY = 13;
const ESCAPE_KEY = 27;

export function EditableText({
                                 isEditing,
                                 isTransforming,
                                 onToggleEdit,
                                 onToggleTransform,
                                 onChange,
                                 text,
                                 shapeProps,
                             }) {
    function handleEscapeKeys(e) {
        if ((e.keyCode === RETURN_KEY && !e.shiftKey) || e.keyCode === ESCAPE_KEY) {
            onToggleEdit(e);
        }
    }

    function handleTextChange(e) {
        onChange({...shapeProps, text: e.currentTarget.value} );
    }

    if (isEditing) {
        return (
            <EditableTextInput
                {...shapeProps}
                value={text}
                onChange={handleTextChange}
                onKeyDown={handleEscapeKeys}
            />
        );
    }
    return (
        <ResizableText
            isSelected={isTransforming}
            onClick={onToggleTransform}
            onDoubleClick={onToggleEdit}
            onChange={onChange}
            text={text}
            shapeProps={shapeProps}
        />
    );
}
