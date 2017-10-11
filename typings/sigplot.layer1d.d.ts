import { layer } from './sigplot.layer';
import { Plot } from './sigplot';
import { bluefile } from './bluefile';
import { m } from './m';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Refactored each definition so that the exported member is not within a module.  This was causing a lookup error at runtime, making the exported interfaces be treated as undefined by webpack, etc., which would kill Angular UIs.
export interface IPrep {
    num:   number;
    start: number;
    end:   number;
}

export interface IHighlight {
    xstart: number;
    xend:   number;
    color:  string;
    id:     string;
}

export declare class Layer1D implements layer.ILayer {
    plot: Plot;

    xbuf: ArrayBuffer; // raw (ArrayBuffer) of ABSC data
    ybuf: ArrayBuffer; // raw (ArrayBuffer) of ORD data

    offset: number;
    xstart: number;
    xdelta: number;
    imin: number;
    xmin: number;
    xmax: number;
    name: string;
    cx: boolean;
    hcb: bluefile.BlueHeader; // index in Gx.HCB
    // xbufn = xbuf.byteLength
    // ybufn = ybuf.byteLength
    size: number;

    display: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Split basic layer interface of 'settings' off of the now derived interface that also defines required methods that are common between Layer1D and Layer2D's definitions.  Also corrected member declaration for color to include string as an allowed type.
    color:   number | string;
    line:    number; // 0=none, 1-vertical, 2-horizontal, 3-connecting
    thick:   number; // negative for dashed
    symbol:  number;
    radius:  number;
<<<<<<< HEAD
=======
    color: number;
    line: number; // 0=none, 1-vertical, 2-horizontal, 3-connecting
    thick: number; // negative for dashed
    symbol: number;
    radius: number;
>>>>>>> Refactored each definition so that the exported member is not within a module.  This was causing a lookup error at runtime, making the exported interfaces be treated as undefined by webpack, etc., which would kill Angular UIs.
=======
>>>>>>> Split basic layer interface of 'settings' off of the now derived interface that also defines required methods that are common between Layer1D and Layer2D's definitions.  Also corrected member declaration for color to include string as an allowed type.

    skip: number; // number of elements between ord values
    xsub: number;
    ysub: number;
    xdata: boolean; // true if X data is data from file
    modified: boolean;
    opacity: number;
    preferred_origin: number;

    pointbufsize: number;
    xptr: ArrayBuffer;
    yptr: ArrayBuffer;
    xpoint: m.PointArray; // m.PointArray backed by memory in xptr
    ypoint: m.PointArray; // m.PointArray backed by memory in yptr

    options: object;

    constructor(plot: Plot);

    init(hcb: bluefile.BlueHeader, options: object): void;

    _onpipewrite(): void;

    get_data(xmin: number, xmax: number): void;

    change_settings(settings: object): void;

    reload(data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions): void;

    push(data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions, sync?: boolean): boolean;

    prep(xmin: number, xmax: number): IPrep;

    draw(): void;

    /**
     * Add a highlight to a specific layer.
     *
     * @param {Number}
     *            n the layer to add the highlight to
     * @param highlight
     *            the highlight to add
     * @param {Number}
     *            highlight.xstart x value to start the highlight
     *            at
     * @param {Number}
     *            highlight.xend the maximum x value to end the highlight
     *            at
     * @param {String}
     *            hightlight.color the color to use for the highlight
     *
     * @param {String}
     *            hightlight.id the id for the highlight
     */
    add_highlight(highlight: IHighlight): void;

    /**
     * Remove a highlight from the layer.
     *
     * @param {String} {Object}
     *             the id of the highlight to remove
     *             or the highlight object itself
     */
    remove_highlight(highlight: IHighlight): void;

    get_highlights(): IHighlight[];

    clear_highlights(): void;
<<<<<<< HEAD
<<<<<<< HEAD

    static overlay(plot: Plot, hcb: bluefile.BlueHeader, options: object);
}
=======
export declare module layer1d {
    export interface IPrep {
        num:   number;
        start: number;
        end:   number;
    }

    export interface IHighlight {
        xstart: number;
        xend:   number;
        color:  string;
        id:     string;
    }

    export class Layer1D implements layer.ILayer {
        plot: Plot;

        xbuf: ArrayBuffer; // raw (ArrayBuffer) of ABSC data
        ybuf: ArrayBuffer; // raw (ArrayBuffer) of ORD data

        offset: number;
        xstart: number;
        xdelta: number;
        imin: number;
        xmin: number;
        xmax: number;
        name: string;
        cx: boolean;
        hcb: bluefile.BlueHeader; // index in Gx.HCB
        // xbufn = xbuf.byteLength
        // ybufn = ybuf.byteLength
        size: number;

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
        opacity: number;
        preferred_origin: number;

        pointbufsize: number;
        xptr: ArrayBuffer;
        yptr: ArrayBuffer;
        xpoint: m.PointArray; // m.PointArray backed by memory in xptr
        ypoint: m.PointArray; // m.PointArray backed by memory in yptr

        options: object;

        constructor(plot: Plot);

        init(hcb: bluefile.BlueHeader, options: object): void;

        _onpipewrite(): void;

        get_data(xmin: number, xmax: number): void;

        change_settings(settings: object): void;

        reload(data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions): void;

        push(data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions, sync?: boolean): boolean;

        prep(xmin: number, xmax: number): IPrep;

        draw(): void;

        /**
         * Add a highlight to a specific layer.
         *
         * @param {Number}
         *            n the layer to add the highlight to
         * @param highlight
         *            the highlight to add
         * @param {Number}
         *            highlight.xstart x value to start the highlight
         *            at
         * @param {Number}
         *            highlight.xend the maximum x value to end the highlight
         *            at
         * @param {String}
         *            hightlight.color the color to use for the highlight
         *
         * @param {String}
         *            hightlight.id the id for the highlight
         */
        add_highlight(highlight: IHighlight): void;

        /**
         * Remove a highlight from the layer.
         *
         * @param {String} {Object}
         *             the id of the highlight to remove
         *             or the highlight object itself
         */
        remove_highlight(highlight: IHighlight): void;

        get_highlights(): IHighlight[];

        clear_highlights(): void;
    }
}
>>>>>>> Moved typings to 'typings' subdirectory and adjusted package.json accordingly.  Then filled out most of remaining public interfaces and other guesses at these interfaces.
=======
=======

    static overlay(plot: Plot, hcb: bluefile.BlueHeader, options: object);
>>>>>>> Added static 'overlay' methods
}
>>>>>>> Refactored each definition so that the exported member is not within a module.  This was causing a lookup error at runtime, making the exported interfaces be treated as undefined by webpack, etc., which would kill Angular UIs.
