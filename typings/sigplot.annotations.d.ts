import { Plot } from './sigplot';

export interface IAnnotationOptions {
    display?:       boolean;
    textBaseline?:  string;  // 'alphabetic' ...?
    textAlign?:     string;  // 'left'... right, center?
    prevent_hover?: boolean;
}

export type AnnotationValue = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | string;

/**
 * Partial implementation since it looks like 'width' and 'height' are also members,
 * however they're overwritten by the state of 'value', so really it was a lazy
 * way to shorthand 'let width = annotation.value.width; ...', for example.
 *
 * Other notes: If you want a pop-up message, set popup to the text and highlight
 * to true.  Use highlight_color to set the color.
 */
export interface IAnnotation {
    value?:              AnnotationValue;

    // Only apply to text value.
    highlight?:          boolean;
    highlight_color?:    string;  // Becomes the fill style if highlight is true.
    color?:              string;  // Becomes the fill style if highlight is false.
    popup?:              string;  // Can contain multi-line text.
    popupTextColor?:     string;

    // Overrides to the configured settings of the same name.
    textBaseline?:       string;
    textAlign?:          string;

    // Legacy API
    absolute_placement?: boolean;
    x?:                  number;
    y?:                  number;

    // New API
    pxl_x?:              number;
    pxl_y?:              number;
}

export type Annotations = IAnnotation[];

export declare class AnnotationPlugin {
    plot:        Plot;
    options:     IAnnotationOptions;
    annotations: Annotations;

    constructor(options?: IAnnotationOptions);

    init(plot: Plot);

    set_highlight(state?: boolean, annotations?: Annotations, x?: number, y?: number);

    menu(): object;

    add_annotation(annotation: IAnnotation): number;

    clear_annotations();

    refresh(canvas: HTMLCanvasElement);
}
