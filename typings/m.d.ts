import { bluefile } from './bluefile';

export declare module m {
    export interface PointArray {}

    /**
     * The m.UNITS structure is a numerically indexed object like an
     * enumeration where each value is a 4-tuple.  This is a declaration
     * of that structure, hence the length of the enumeration is not
     * also seen here since it is defined in m.js.
     */
    export type IUNITS_TUPLE = [string, string, boolean, boolean];
    export interface IUNITS {
        [index:number]: IUNITS_TUPLE;
    }
    export const UNITS: IUNITS;

    /**
     * Mc color map interface(s)
     */
    export interface IColor {
        pos:   number;
        red:   number;
        green: number;
        blue:  number;
    }

    export interface IColorMap {
        name?:   string;
        colors: IColor[];
    }

    export interface IColorMaps {
        colormap: IColorMap[];
    }

    /** Common structure
     * Colormaps are stored as 7 element tables which are then
     * interpolated to the number of colors actually used in a graphics routine
     * call to MX$COLORMAP.
     *
     * There are 4 colormap tables stored in the environment: A GREYSCALE,
     * COLORRAMP, COLORWHEEL, COLORSPECTRUM, or SUNSET.  The specific values that
     * are listed here are from xcolordef.prm (use the XCOLORMAP widget).
     *
     * The actual values are a result of tribal knowledge and years of experience
     */
    export const Mc: IColorMaps;

    /** Pipe Size
     * @private
     */
    export const PIPESIZE: number;

    /**
     * Converts unit strings to number code
     * @param    {string}    unitInput    User unit input
     */
    export function unit_lookup(unitInput: string): number | string;

    /**
     * Creates new file with header initialized to type-1000 defaults
     * and data appended. (tbd)
     * @param    {string} filename    Name of File to Create
     * @param    {array}  data        Input data buffer
     * @param    {array}  overrides   List of fields/values to be overridden in the bluefile header
     * @return   {header} hcb         Return <hcb> type-1000 bluefile header, filename=null
     */
    export function initialize(
        data:      ArrayBuffer,
        overrides: object
        ): bluefile.BlueHeader;

    /**
     * Convert type-2000 header internals to force GRAB and FILAD routines to treat file as a 1000-type file.
     * @param    {header}    hcb        Bluefile header control block
     */
    export function force1000(hcb: bluefile.BlueHeader): void;

    /**
     * Get data from file at specified start location.
     * @param    {header}    hcb        Bluefile header control block
     * @param    {array}        bufview        Data buffer to receive data
     * @param    {number}    start        Start location
     * @param    {number}    nget        Number of requested data
     * @return    {number}    ngot        Number of received data
     */
    export function grab(
        hcb:     bluefile.BlueHeader,
        bufview: ArrayBuffer,
        start:   number,
        nget:    number
        ): number;

    /**
     * Append data buffer to file specified in the bluefile header control block.
     * @param    {header}    hcb        Bluefile header control block
     * @param    {array}        data        Data buffer
     * @param   {boolean}       [sync=false]    dispatch onpipewrite syncronously
     */
    export function filad(
        hcb:     bluefile.BlueHeader,
        data:    ArrayBuffer,
        sync:    boolean
        ): void;

    /**
     * @param    {header}    hcb        Bluefile header control block
     * @return    {number}    elements available
     * @private
     */
    export function pavail(hcb: bluefile.BlueHeader): number;

    /**
     * Get data from file in dataflow fashion.
     * @param    {array}        hcb    Bluefile header control block
     * @param     {array}        dview    Data buffer to receive data
     * @param    {number}    nget    Input variable name of parameter to receive data
     * @param    {number}    offset    Offset into file
     * @return    {number}    ngot    Number of data values gotten
     */
    // WARNING - nget is number of scalars...which differs from the normal API
    export function grabx(
        hcb:     bluefile.BlueHeader,
        dview:   ArrayBuffer, // TODO: Check this, may be DataView based on the name
        nget:    number,
        offset?: number
        ): number;

    /**
     * @param    {header}    hcb        Bluefile header control block
     * @param    {number}    onwrite        -
     * @private
     */
    export function addPipeWriteListener(
        hcb:     bluefile.BlueHeader,
        onwrite: number
        ): void;

    /**
     * Returns ASCII description of units code
     * @param     {number}    UNITS array index (see global UNITS)
     * @return     {string}    ASCII code pair
     */
    // ~= M$UNITS_NAME
    export function units_name(units: number): string;

    /**
     * Extract filename from full path
     * @param     {string}    pathfilename    Full path, including filename
     * @return    {string}    filename        Trimmed filename
     */
    export function trim_name(pathfilename: string): string;

    /**
     * Takes an integer code for units and a multiplier and returns the string representation of the two.
     * Example: l = m.label(1,1.0e3) ==> l =  Time (Ksec)
     * @param     {number}    units    Integer code for Unit (see global UNITS)
     * @param     {number}     mult    Units multiplier (i.e 1.0e3 ==> 'K')
     * @return {string} representation of units and multiplier
     */
    // ~= M$LABEL
    export function label(
        units: number,
        mult: number
        ): string;

    /**
     * @method bound
     * @param a
     * @param b
     * @param c
     */
    export function bound(a: number, b: number, c: number): boolean;


    export interface IPageCoordinates {
        pageX: number;
        pageY: number;
    }
    export function touch_distance(
        touchA: IPageCoordinates,
        touchB: IPageCoordinates
        ): number;

    export function mult_prefix(mult: number): string;

    /**
     * Sets data type for all subsequent calls to vector libraries.  Remains in effect until another call to this routine.
     * @param ctype
     */
    // ~= VSTYPE - not really necessary
    export function vstype(ctype: string);

    export function log10(v: number, lo_thresh?: number): number;


    /**
     * For each vector element in <src>, determine the max of <src> element and <lo_thresh>, returns the log(base10) of that value in <dst>
     * @param    {array}        src        Input vector.
     * @param     {number}     lo_thresh    User-set minimum log threshold (if not defined, set default=1.0e-20). Prevent computing log of 0 or negative values.
     * @param     {array}        dst        Ouput vector.  If undefined, <src> elements will be overwritten.
     */
    // ~= M$VLOG10- not really necessary
    export function vlog10(
        src: number[],
        lo_thresh?: number,
        dst?: number[]
        ): void;


    /**
     * Same as vlog10 but multiply each output value by a scale factor <dbscale>.
     * @param     {array}        src        Input vector.
     * @param     {number}    lo_thresh    User-set minimum log threshold.
     *                                              If undefined, defaults to 1.0e-20. Prevent computing log of 0 or negative values.
     * @param     {number}    dbscale        Output scale factor. If undefined, defaults to 1.
     * @param     {array}        dst        Output vector. If undefined, <src> elements will be overwritten.
     * @private
     */
    export function vlogscale(
        src:       number[],
        lo_thresh: number,
        dbscale:   number,
        dst:       number[]
        ): void;

    /** FIXME: Incomplete declaration.  Stopped at vlogscale, line 927 of m.js */
}
