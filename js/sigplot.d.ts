export as namespace sigplot;

/**
 * Purpose: Construction Options interface
 */
export interface IConstructorOptions {
    /**
     * Note: See CMode Enumeration
     * the plot rendering mode for incoming data:
     *   IN : Index
     *   AB : Abscissa
     *   MA : Magnitude
     *   PH : Phase
     *   RE : Real
     *   IM : Imaginary
     *   LO : 10*log10
     *   D1 : 10*log10
     *   L2 : 20*log10
     *   D2 : 20*log10
     *   RI : Real vs. Imaginary
     *   IR : Imaginary vs. Real
     */
    cmode? : string,

    /**
     * Note: See PHUnits Enumeration
     * the phase units to be used for plot data
     *   D : Degrees
     *   R : Radians
     *   C : Cycles 
     */
    phunits? : string,

    /**
     * enable crosshairs on plot
     */
    cross? :  boolean,

    /**
     * set to true to hide grid on plot
     */
    nogrid? : boolean,

    /** 
     * set to false to hide legend on plot
     */
    legend? : boolean,

    /**
     * set to true to hide legend on plot
     */
    no_legend? : boolean,

    /**
     * set to true to disable panning on the plot
     */
    nopan? : boolean,

    /**
     * set to true to disable the menu on middle-click
     */
    nomenu? : boolean,

        /**
    * set to true to disable the plot specification displays
    */
    nospec? : boolean,

    /**
     * set to true to disable the x-axis labels
     */
    noxaxis? : boolean,

    /**
     * set to true to disable the y-axis labels
     */
    noyaxis? : boolean,

    /**
     * set to true to hide the plot readout displays
     */
    noreadout? : boolean,

    /**
     * set to true to disable the ability to drag-drop files onto the plot
     */
    nodragdrop? : boolean,

    /**
     * TODO
     */
    scroll_time_interval? : number,

    /**
     * on the readout, show the index of the sample instead of the abscissa offset
     */
    index? : boolean,

    /**
     * Note: See AutoScale enumeration
     * auto-scaling mode for the xaxis
     *    0, "fix"  : axis is fixed to ymin and ymax
     *    1, "min"  : maximum is fixed, minimum is automatic
     *    2, "max"  : minimum is fixed, maximum is automatic
     *    3, "auto" : both minimum and maximum are automatic
     */
    autox? : string | number,

    /**
    * when auto-scaling for the x minimum is turned off, set the xmin value with this
    */
    xmin? :  number,

    /**
    * when auto-scaling for the x maximum is turned off, set the xmin value with this
    */
    xmax? : number,

    /**
    * Note: See MUnits enumeration
    * the units for the x axis (looked up using m.UNITS)
    */
    xlab? : string | number,

    /**
    * the units for the x axis
    */
    xlabel? : string | ((...args: any[]) => string), 

    /**
    * the number of divisions to use on the x axis labels
    */
    xdiv? :  number,

    /**
    * configure the behaviour of the mouse controls:
    *   0 : disable mouse events
    *   1 : (default) left-mouse clicks set "tag"
    *   2 : left-mouse movements sets "tag"
    */
    xcnt? : number,

    /**
    * the behaviour of the drawing a box with the left-mouse
    *   zoom : (default) zoom on the plot
    *   box  : send a mouse box event
    */
    rubberbox_mode? : string,


    /**
    * the behaviour of the drawing a box with the right-mouse
    *   zoom : zoom on the plot
    *   box  : (default) send a mouse box event
    */
    rightclick_rubberbox_mode? : string,

        /**
    * the type of line to draw for data-points
    *   0 : no lines, only points are displayed
    *   1 : verticals, vertical lines are displayed through each point
    *   2 : horizontals, horizontal lines are displayed through each point
    *   3 : (default) lines are drawn connecting each point
    */
    line? : number,

    /**
    * autoscaling for the y-axis
    *    0, "fix"  : axis is fixed to ymin and ymax
    *    1, "min"  : maximum is fixed, minimum is automatic
    *    2, "max"  : minimum is fixed, maximum is automatic
    *    3, "auto" : both minimum and maximum are automatic
    */
    autoy? : string | number,

    /**
    * the units for the y axis (looked up using m.UNITS)
    */
    ylab? : string | number,

    /**
    * the units for the y axis
    */
    ylabel? : string | ((...args: any[]) => string),

    /**
    * the y-axis minimum value
    */
    ymin? : number,

    /**
    * the y-axis maximum value
    */
    ymax? : number,

    /**
    * the number of divisions to use on the y-axis
    */
    ydiv? : number,

    /**
    * the z-axis minimum value
    */

    zmin? : number,

    /**
    * the z-axis maximum value
    */
    zmax? : number,

    /**
    * set to true to invert the y-axis
    */
    yinv? : boolean,

    /**
    * the colors to use for the plot area
    */
    colors? : IPlotColors,

    /**
    * set to true to use inverted foreground/background colors
    */
    xi? : boolean,

    /**
    * set to true to show all the plot data instead of just the first buffer
    */
    all? : boolean,

    /**
    * autoscale the plot based off all the data on not just the first buffer
    */
    expand? : boolean

    /**
    * set the origin for the plot
         * 1 : x1:xmin, x2:xmax, y1:ymax, y2:ymin
         * 2 : (default) x1:xmax, x2:xmin, y1:ymax, y2:ymin (x inverted)
         * 3 : x1:xmax, x2:xmin, y1:ymin, y2:ymax (x & y inverted)
         * 4 : x1:xmin, x2:xmax, y1:ymin, y2:ymax (y inverted)
    */
    origin? : number,

    /**
     * the maximum buffer size to use
     */
    bufmax? : number,

    /**
     * disable handling of keypresses on the plot
     */
    nokeypress? : boolean,

    /**
     * the font family to use for the plot
     */
    font_family? : string,
}

/**
 * Purpose: Coordinate Pair interface
 */
export interface ICoordinatePair {
    x?: number,
    y?: number
}

/**
 * Purpose: Headermod Options Interface
 * Note:    This is a guess from sigplot.js, sigplot.layer1d.js, etc. making it
 *          unclear what all the available options exist in this interface.
 */
export interface IHeadermodOptions {
    type?      : string;
    timestamp? : string;
    subsize?   : number;
    lps?       : any;
    xstart?    : number;
    xdelta?    : number;
}

/**
 * Purpose: Layer interface
 * Note:    This is inferred from SIGPLOTLAYER, sigplot.js
 */
export interface ILayer {
    xbuf: ArrayBuffer; // raw (ArrayBuffer) of ABSC data
    ybuf: ArrayBuffer; // raw (ArrayBuffer) of ORD data

    offset: number;
    xstart: number;
    xdelta: number;
    imin:   number;
    xmin:   number;
    xmax:   number;
    name:   string;
    cx:     boolean;
    hcb:    number; // index in Gx.HCB
    // xbufn = xbuf.byteLength
    // ybufn = ybuf.byteLength
    size:   number;

    display: boolean;
    color:   number;
    line:    number; // 0=none, 1-vertical, 2-horizontal, 3-connecting
    thick:   number; // negative for dashed
    symbol:  number;
    radius:  number;

    skip:    number; // number of elements between ord values
    xsub:    number;
    ysub:    number;
    xdata:   boolean; // true if X data is data from file

    options: any;
}

/**
 * Purpose: Layer Options interface (i.e., settings structure)
 * Note:    This is a guess based on:
 *          init, sigplot.layer1d.js
 *          change_settings, sigplot.layer2d.js
 */ 
export interface ILayerOptions {
    name?      : string;
    cmode?     : number;
    expand?    : boolean;
    zmin?      : number;
    zmax?      : number;
    autoz?     : number;
    drawmode?  : string;
    framesize? : number;
    opacity?   : number;
    tl?        : number;
    layerType? : string; // "1D" or "2D"
    etc?       : object; // Unclear what this can be, "varies"
}

/**
 * Purpose: "Overrides" for overlay
 */
export interface IOverlayOverrides {
    type?      : number; // 1000 = 1D, 2000 = 2D
    subsize?   : number;
}

/**
 * Purpose: Mimic Mask Options interface
 *
 * Note: This was inferred from sigplot.js mimic function body.
 */
export interface IMimicMaskOptions {
    pan?    : boolean;
    xpan?   : boolean;
    ypan?   : boolean;
    zoom?   : boolean;
    xzoom?  : boolean;
    yzoom?  : boolean;
    unzoom? : boolean;
}

/**
 * Purpose: Plot Colors interface
 */
export interface IPlotColors {
    fg? : string,
    bg? : string,
}

/**
 * Purpose: Settings Options interface
 * Note:    This settings structure is for updating an already-instantiated
 *          plot.
 */
export interface ISettingsOptions {
    grid?                        : boolean;
    index?                       : boolean;
    all?                         : boolean;
    show_x_axis?                 : boolean;
    show_y_axis?                 : boolean;
    show_readout?                : boolean;
    specs?                       : boolean;
    xcnt?                        : string;
    legend?                      : boolean;
    pan?                         : boolean;
    cross?                       : boolean;
    rubberbox_action?            : string;
    rubberbox_mode?              : string;
    rightclick_rubberbox_action? : string;
    rightclick_rubberbox_mode?   : string;
    wheelscroll_mode_natural?    : string;
    cmode?                       : string;
    phunits?                     : string;
}

/**
 * Purpose: Plot class
 */
export declare class Plot {
    constructor(
        element  : HTMLElement,
        options? : IConstructorOptions
        );

    add_plugin(
        plugin  : object,
        zorder? : number
        );

    remove_plugin(
        plugin : object,
        );

    addListener(
        what     : string,
        callback : (() => void)
        );

    removeListener(
        what     : string,
        callback : (() => void)
        );

    change_settings(
        settings : ISettingsOptions
        );

    /**
     * reread all layers (deprecated)
     * reason: only works with layer created by overlay_bluefile
     */
    reread();

    /**
     * not implemented
     */
    cleanup() : void;

    /**
     * reload data onto a layer (deprecate)
     *
     */
    reload(
        n       : number,
        data    : number[],
        hdrmod? : IHeadermodOptions
    ) : void;

    /**
     * rescale the plot axis based off the current data
     */
    rescale() : void;

    // For use with overlay_pipe
    push(
        n       : number,
        data    : number[],
        hdrmod? : IHeadermodOptions,
        sync?   : boolean,
        rsync?  : boolean,
        ) : void;

    overlay_array(
        data          : number[],
        overrides?    : IOverlayOverrides,
        layerOptions? : ILayerOptions
        ) : number;

    // See the push() method for sending data
    overlay_pipe(
        overrides?    : IOverlayOverrides,
        layerOptions? : ILayerOptions
        ) : number;

    // For websockets
    overlay_websocket(
        wsurl         : string,
        overrides?    : IOverlayOverrides,
        layerOptions? : ILayerOptions
        ) : number;

    // For reading bluefile or matfile from a URL
    overlay_href(
        wsurl         : string,
        overrides?    : IOverlayOverrides,
        layerOptions? : ILayerOptions
        ) : void;

    overlay_bluefile(
        hcb: any,
        layerOptions?: ILayerOptions
        ) : number;

    overlay_mfile(
        matfile: any,
        layerOptions?: ILayerOptions
        ): number;

    /**
     * show the loading spiner on the plot (internal)
     */
    show_spinner() : void;

    /**
     * hide the spinner on the plot (internal)
     */
    hide_spinner() : void;

    /**
     * internal
     */
    add_layer() : void;

    /**
     * get the layer object based off the layer index
     */
    get_layer(
        n : number
        ) : ILayer;


    load_files(
        files : any[],
        layerType : any // TODO (this is the comment found, TODO, may be string)
        ) : void;

    /**
     * remove layers from the plot
     */
    deoverlay(
        /**
         * the layer number to remove, if not set all layers are removed
         */
        index? : number
        ) : void;

    /**
     * remove a specific layer (internal)
     */
    remove_layer(
        /**
         * the layer number to remove
         */
        index : number
        ) : void;
   
    /**
     * zoom to a specific area using pixel coordinates
     */
    pixel_zoom(
        x1 : number,
        y1 : number,
        x2 : number,
        y2 : number, 

        /**
         * if true, the zoom will occur without creating a new zoom level
         */
        continuous? : boolean
        ) : void;

    percent_zoom(
        /**
         * the percentage of the current x-axis to zoom into
         */
        xperc : number,

        /**
         * the percentage of the current y-axis to zoom into
         */
        yperc : number,

        /**
         * if true, the zoom will occur without creating a new zoom level
         */
        continuous? : boolean
        ) : void;

    zoom(
        /**
         * the upper-left absiccia coordinates for the zoom
         */
        ul : ICoordinatePair,

        /**
         * the lower-right absiccia coordinates for the zoom
         */
        lr : ICoordinatePair,

        /**
         * if true, the zoom will occur without creating a new zoom level
         */
        continous? : boolean
        ) : void;

    /**
     * unzoom the plot
     */
    unzoom(
        /**
         * number of levels to unzoom, by default unzooms all levels
         */
        levels? : number
        ) : void;

    /**
   * setup this plot to mimic the zooming/panning of another plot
   */
    mimic(
        other : Plot,
        mask? : IMimicMaskOptions
        ) : void;

    /**
     * redraw the plot without re-rendering the data layers
     */
    redraw () : void;

    /**
     * asyncronous refresh using animation frame
     */
    refresh () : void;

    /**
     * syncronous refresh
     */
    _refresh () : void;

    /**
     * when the dom resizes, call this to have the plot check
     * if it needs to resize itself.
     */
    checkresize () : void;

    /**
     * enable all mouse and keyboard listeners on the plot
     */
    enable_listeners () : void;

    /**
     * disable all mouse and keyboard listeners on the plot
     */
    disable_listeners () : void;

    /**
     * No documentation
     */
    checkresize () : void;

    /**
     * No documentation
     */
    _refresh () : void;
}
