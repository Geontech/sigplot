export declare module bluefile {

    export interface IBlueHeaderOptions {
        version?:   string;
        headrep?:   string;
        datarep?:   string;
        ext_start?: number;
        ext_size?:  number;
        type?:      number;
        class?:     number;
        format?:    string;
        timecode?:  number;

        xstart?:  number;
        xdelta?:  number;
        xunits?:  number;
        ystart?:  number;
        ydelta?:  number;
        yunits?:  number;
        subsize?: number;

        data_start?: number;
        data_size?:  number;
<<<<<<< HEAD
        pipesize?:   number;
=======
>>>>>>> Moved typings to 'typings' subdirectory and adjusted package.json accordingly.  Then filled out most of remaining public interfaces and other guesses at these interfaces.
        ext_header?: object;

        spa?:   number;
        bps?:   number;
        bpa?:   number;
        ape?:   number;
        bpe?:   number;
        size?:  number;
        dview?: DataView;
    }

    /**
     * Create bluefile header and attach data buffer
     */
    export class BlueHeader implements IBlueHeaderOptions {

        // Created in the constructor
        options:   IBlueHeaderOptions;
        file:      Blob;
        file_name: string;
        offset:    number;
        buf:       ArrayBuffer; // Note: only supports valid or null in code
        version:   string;
        headrep:   string;
        datarep:   string;
        ext_start: number;
        ext_size:  number;
        type:      number;
        class:     number; // Note: options.type / 1000 in constructor
        format:    string;
        timecode:  number;

        // Class 1 & 2 check (like SRI)
        xstart:  number;
        xdelta:  number;
        xunits:  number;
        ystart:  number;
        ydelta:  number;
        yunits:  number;
        subsize: number;

        data_start: number;
        data_size:  number;
        ext_header: object;

        // Created in the setData
        spa:   number;
        bps:   number;
        bpa:   number;
        ape:   number;
        bpe:   number;
        dview: DataView;
        size:  number;

        /**
         * Create bluefile header and attach data buffer
         * @memberof bluefile
         * @param   {array}     buf         Data bffer
         */
        constructor(
            buf:     ArrayBuffer,
            options: IBlueHeaderOptions
            );

        /**
         * @memberof bluefile
         * @param   buf
         * @param   offset
         * @param   data_end
         * @param   littleEndian
         *
         */
        setData(
            buf:           ArrayBuffer,
            offset:        number,
            data_end:      boolean,
            littleEndian?: boolean
            );

        /**
         * @author Sean Sullivan https://github.com/desean1625
         * @memberof bluefile
         * @param   buf
         * @param   lbuf
         * @param   offset
         * @param   littleEndian
         *
         */
        unpack_keywords(
            buf:          ArrayBuffer,
            lbuf:         number,
            offset:       number,
            littleEndian: boolean
            );

        /**
         * Create typed array
         * @memberof bluefile
         * @param   buf
         * @param   offset
         * @param   length
         * @returns -
         */
        createArray (
            buf:        ArrayBuffer,
            offset:     number,
            length:     number
            ): object; // FIXME: TypedArray -- need to declare/find.
    }

    /**
     * Bluefile Reader
     * @memberof    bluefile
     * @param   options
     */
    export class BlueFileReader {
        /**
         * @memberof    bluefile
         * @param   options
         */
        constructor(
            options: IBlueHeaderOptions
            );

        /**
         * @memberof bluefile
         * @param   theFile
         * @param   onload
         *
         */
        readheader (
            theFile: Blob, // FIXME: find this interface
            onload:  ((hdr: BlueHeader) => void)
            );

        /**
         *
         * @memberof bluefile
         * @param   theFile
         * @param   onload
         *
         */
        read(
            theFile: Blob, // FIXME: find this interface
            onload:  ((hdr: BlueHeader) => void)
            );

        /**
         *
         * @memberof bluefile
         * @param   href
         * @param   onload
         *
         */
        read_http(
            href:   string,
            onload: ((hdr: BlueHeader) => void)
            );
    }

}
