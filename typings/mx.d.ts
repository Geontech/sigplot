export declare module mx {
    export const XW_INIT: number;
    export const XW_DRAW: number;
    export const XW_EVENT: number;
    export const XW_UPDATE: number;
    export const XW_COMMAND: number;
    export const SB_EXPAND: number;
    export const SB_SHRINK: number;
    export const SB_FULL: number;
    export const SB_STEPINC: number;
    export const SB_STEPDEC: number;
    export const SB_PAGEINC: number;
    export const SB_PAGEDEC: number;
    export const SB_DRAG: number;
    export const SB_WHEELUP: number;
    export const SB_WHEELDOWN: number;

    // Grayscale colors:
    // "15%,15%,10%" - very dark gray
    // "25%,25%,20%" - dark gray
    // "35%,35%,30%" - medium gray
    // "40%,40%,35%" - light medium gray
    // "60%,60%,55%" - light gray
    // "70%,70%,65%" - very light gray
    // "80%,80%,75%" - very very light gray

    export const L_ArrowLeft: number;
    export const L_ArrowRight: number;
    export const L_ArrowUp: number;
    export const L_ArrowDown: number;
    export const L_dashed: number;
    export const GBorde: number;
    export const L_RModeOff: number;
    export const L_RModeOn: number;
    export const L_PixelSymbol: number;
    export const L_CircleSymbol: number;
    export const L_SquareSymbol: number;
    export const L_PlusSymbol: number;
    export const L_XSymbol: number;
    export const L_TriangleSymbol: number;
    export const L_ITriangleSymbol: number;
    export const L_HLineSymbol: number;
    export const L_VLineSymbol: number;

    /**
     * Set to True for a retro look that would make hipsters proud
     */
    export const LEGACY_RENDER: boolean;

    /**
     * The zoom stack structure object
     * @private
     */
    export class STKSTRUCT {
        xmin: number; // real world val at x1(origin=1,4) or x2(origin=2,4)
        xmax: number; // real world val at x2(origin=1,4) or x1(origin=2,4)
        ymin: number; // real world val at y2(origin=1,2) or y1(origin=3,4)
        ymax: number; // real world val at y1(origin=1,2) or y2(origin=3,4)
        xscl: number; // ratio of X real world units to pixel units
        yscl: number; // ratio of Y real world units to pixel units
        x1: number; // left edge relative to window (pixels)
        y1: number; // top edge relative to window (pixels)
        x2: number; // right edge relative to window (pixels)
        y2: number; // bottom edge relative to window (pixels)
    }

    /** FIXME: Incomplete declaration.  Stopped at line 105, mx.js */
}
