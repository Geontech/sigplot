import { Plot } from './sigplot';

export interface IAccordionStyle {
    lineWidth?:   number;
    opacity?:     number;
    fillStyle?:   string;
    lineCap?:     string;
    strokeStyle?: string;
}

export interface IAccordionOptions {
    display?:           boolean;

    center_line_style?: object;
    edge_line_style?:   object;
    fill_style?:        object;

    direction?:         string; // 'vertical', 'horizontal', ...?

    mode?:              string; // 'absolute', 'relative', ...?

    prevent_drag?:      boolean;

    discrete_widths?:   number[];

    min_width?:         number;
    max_width?:         number;
}

export declare class AccordionPlugin {
    options:         IAccordionOptions;
    center:          number;  // in real units
    width:           number;  // in real units
    center_location: number;  // in pixels
    loc_1:           number;
    loc_2:           number;
    dragging:        boolean;
    edge_dragging:   boolean;
    visible:         boolean;

    constructor (options?: IAccordionOptions);

    init(plot: Plot);

    addListener(what: any, callback: (...args: any[]) => void);
    removeListener(what: any, callback: (...args: any[]) => void);

    set_highlight(ishighlight: boolean);
    set_edge_highlight(ishighlight: boolean);

    set_center(center: number);
    set_width(width: number);

    get_center(): number;
    get_width(): number;

    refresh(canvas: HTMLCanvasElement);

    set_visible(isVisible: boolean);

    set_mode(mode: string);

    dispose();
}
