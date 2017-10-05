import { layer } from './sigplot.layer';
import { Plot } from './sigplot';
import { bluefile } from './bluefile';

<<<<<<< HEAD
<<<<<<< HEAD
export declare class Layer2D implements layer.ILayer {
    plot: Plot;

    offset: number;
    xstart: number;
    xdelta: number;
    ystart: number;
    ydelta: number;
    imin: number;
    xmin: number;
    xmax: number;
    name: string;
    cx: boolean;
    hcb: bluefile.BlueHeader; // index in Gx.HCB

    display: boolean;
    color: number;
    line: number; // 0=none, 1-vertical, 2-horizontal, 3-connecting
    thick: number; // negative for dashed
    symbol: number;
    radius: number;

    skip: number; // number of elements between ord values
    xsub: number;
    ysub: number;
    xdata: boolean; // true if X data is data from file
    modified: boolean;

    preferred_origin: number;
    opacity: number;

    lpb: object; // FIXME: Determine what this object is.

    yc: number; // y-compression factor...not yet used

    options: object;

    constructor(plot: Plot);

    init(hcb: bluefile.BlueHeader): void;

    _onpipewrite(): void;

    get_data(): void;

    get_z(x: number, y: number): number;

    change_settings(settings: object): void;

    reload(data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions): void;

    push(data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions, sync?: boolean): boolean;

    prep(xmin: number, xmax: number): number;

    draw(): void;

    static overlay(plot: Plot, hcb: bluefile.BlueHeader, options: object);
=======
export declare module layer2d {
    export class Layer2D implements layer.ILayer {
        plot: Plot;
=======
export declare class Layer2D implements layer.ILayer {
    plot: Plot;
>>>>>>> Refactored each definition so that the exported member is not within a module.  This was causing a lookup error at runtime, making the exported interfaces be treated as undefined by webpack, etc., which would kill Angular UIs.

    offset: number;
    xstart: number;
    xdelta: number;
    ystart: number;
    ydelta: number;
    imin: number;
    xmin: number;
    xmax: number;
    name: string;
    cx: boolean;
    hcb: bluefile.BlueHeader; // index in Gx.HCB

    display: boolean;
    color: number;
    line: number; // 0=none, 1-vertical, 2-horizontal, 3-connecting
    thick: number; // negative for dashed
    symbol: number;
    radius: number;

    skip: number; // number of elements between ord values
    xsub: number;
    ysub: number;
    xdata: boolean; // true if X data is data from file
    modified: boolean;

    preferred_origin: number;
    opacity: number;

    lpb: object; // FIXME: Determine what this object is.

    yc: number; // y-compression factor...not yet used

    options: object;

    constructor(plot: Plot);

    init(hcb: bluefile.BlueHeader): void;

    _onpipewrite(): void;

    get_data(): void;

    get_z(x: number, y: number): number;

    change_settings(settings: object): void;

    reload(data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions): void;

    push(data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions, sync?: boolean): boolean;

    prep(xmin: number, xmax: number): number;

<<<<<<< HEAD
        draw(): void;
    }
>>>>>>> Moved typings to 'typings' subdirectory and adjusted package.json accordingly.  Then filled out most of remaining public interfaces and other guesses at these interfaces.
=======
    draw(): void;
>>>>>>> Refactored each definition so that the exported member is not within a module.  This was causing a lookup error at runtime, making the exported interfaces be treated as undefined by webpack, etc., which would kill Angular UIs.
}
