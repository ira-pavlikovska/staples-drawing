export type TDrawingDocument = {
    shapes: TShapeRect[] | TShapeCircle[] | TShapeText[] | TShapeImage[];
};

export enum ShapeTypeEnum {
    rect = 'rect',
    circle = 'circle',
    text = 'text',
    image = 'image'
}

export type TShape = {
    type: ShapeTypeEnum;
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
};

export interface TShapeRect extends TShape {
    fill: string;
}

export interface TShapeCircle extends TShape {
}

export interface TShapeText extends TShape {
    text: string;
};

export interface TShapeImage extends TShape {
    imageId: string;
}
