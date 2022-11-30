export type TDrawingDocument = {
    shapes: TShape[];
};

export type TShape = {
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
};
