

import { bluefile } from './bluefile';
import { Plot } from './sigplot';

export declare module layer {
<<<<<<< HEAD
    export interface ILayerSettings {
=======
    export interface ILayer {
>>>>>>> Moved typings to 'typings' subdirectory and adjusted package.json accordingly.  Then filled out most of remaining public interfaces and other guesses at these interfaces.
        plot?: Plot;

        offset?: number;
        xstart?: number;
        xdelta?: number;
        imin?: number;
        xmin?: number;
        xmax?: number;
        name?: string;
        cx?: boolean;
        hcb?: bluefile.BlueHeader; // index in Gx.HCB
        // xbufn = xbuf.byteLength
        // ybufn = ybuf.byteLength
        size?: number;

        display?: boolean;
<<<<<<< HEAD
        color?:   number | string;
        line?:    number; // 0=none, 1-vertical, 2-horizontal, 3-connecting
        thick?:   number; // negative for dashed
        symbol?:  number;
        radius?:  number;
=======
        color?: number;
        line?: number; // 0=none, 1-vertical, 2-horizontal, 3-connecting
        thick?: number; // negative for dashed
        symbol?: number;
        radius?: number;
>>>>>>> Moved typings to 'typings' subdirectory and adjusted package.json accordingly.  Then filled out most of remaining public interfaces and other guesses at these interfaces.

        skip?: number; // number of elements between ord values
        xsub?: number;
        ysub?: number;
        xdata?: boolean; // true if X data is data from file
        modified?: boolean;
        opacity?: number;
        preferred_origin?: number;

        options?: object;
<<<<<<< HEAD
    }

    export interface ILayer extends ILayerSettings {
=======

>>>>>>> Moved typings to 'typings' subdirectory and adjusted package.json accordingly.  Then filled out most of remaining public interfaces and other guesses at these interfaces.
        // Common methods
        init: (hcb: bluefile.BlueHeader, ...args: any[]) => void;
        _onpipewrite: () => void;
        get_data: (...args: any[]) => void;
        change_settings: (settings: object) => void;
        reload: (data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions) => void;
        push: (data: ArrayBuffer, hdrmod?: bluefile.IBlueHeaderOptions, sync?: boolean) => boolean;
        prep: (xmin: number, xmax: number) => any;
        draw: () => void;
    }
}
