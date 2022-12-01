// @ts-nocheck
import React, {useState, useEffect} from "react";
import {EditableText} from "./EditableText";

export function TextShape({
                              shapeProps,
                              onChange,
                              onClick,
                              selected,
                          }) {
    const [isEditing, setIsEditing] = useState(false);
    const [isTransforming, setIsTransforming] = useState(false);

    useEffect(() => {
        if (!selected && isEditing) {
            setIsEditing(false);
        } else if (!selected && isTransforming) {
            setIsTransforming(false);
        }
    }, [selected, isEditing, isTransforming]);

    function toggleEdit() {
        setIsEditing(!isEditing);
        onClick(!isEditing);
    }

    function toggleTransforming() {
        setIsTransforming(!isTransforming);
        onClick(!isEditing);
    }

    return (
        <>
            <EditableText
                text={shapeProps.text}
                isEditing={isEditing}
                isTransforming={isTransforming}
                onToggleEdit={toggleEdit}
                onToggleTransform={toggleTransforming}
                onChange={onChange}
                shapeProps={shapeProps}
            />
        </>
    );
}
