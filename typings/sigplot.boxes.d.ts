import { Plot } from './sigplot';

export interface IBoxesOptions {
    display?: boolean;
}

export interface IBox {
    x: number;
    y: number;
    absolute_placement?: boolean;
    strokeStyle?:        string;
    lineWidth?:          number;
    fillStyle?:          string;
    fill?:               boolean;
    alpha?:              number;
    font?:               string;
    text?:               string;
}

export declare class BoxesPlugin {
    plot: Plot;
    boxes: IBox[];

    constructor(options?: IBoxesOptions);

    init(plot: Plot);

    menu(): object;

    add_box(box: IBox): number;

    clear_boxes();

    refresh(HTMLCanvasElement);

    dispose();
}
