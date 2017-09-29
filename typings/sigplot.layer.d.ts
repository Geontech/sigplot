

import { bluefile } from './bluefile';
import { Plot } from './sigplot';

export declare module layer {
    export interface ILayer {
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
        color?: number;
        line?: number; // 0=none, 1-vertical, 2-horizontal, 3-connecting
        thick?: number; // negative for dashed
        symbol?: number;
        radius?: number;

        skip?: number; // number of elements between ord values
        xsub?: number;
        ysub?: number;
        xdata?: boolean; // true if X data is data from file
        modified?: boolean;
        opacity?: number;
        preferred_origin?: number;

        options?: object;

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
