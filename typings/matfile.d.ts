export declare module matfile {
    export interface IMatHeaderOptions {}

    export class MatHeader {
        file:            Blob;
        file_name:       string;
        buf:             ArrayBuffer;
        headerStr:       string;
        datarep:         string;

        headerList:      string[];
        matfile:         string;
        platform:        string;
        createdOn:       string;
        subsystemOffset: string;
        version:         number;
        versionName:     string;

        dataType:        number;
        dataTypeName:    string;
        arraySize:       number;

        // Created in setData
        dview:           number[];

        /**
         * Create matfile header and attach data buffer
         * @memberof matfile
         * @param   {array}     buf         Data bffer
         */
        constructor (
            buf:     ArrayBuffer,
            options: IMatHeaderOptions
            );

        /**
         * @memberof bluefile
         * @param   buf
         * @param   dvhdr
         * @param   data_end
         * @param   littleEndian
         *
         */
        setData(
            buf:          ArrayBuffer,
            dvhdr:        DataView,
            currIndex:    number,
            littleEndian: boolean
            );
    }

    /**
     * Matfile Reader
     * @memberof    matfile
     * @param   options
     */
    export class MatFileReader {
        optons: IMatHeaderOptions;

        constructor(options: IMatHeaderOptions);

        /**
         * @memberof matfile
         * @param   theFile
         * @param   onload
         *
         */
        readheader (
            theFile: Blob,
            onload:  ((hdr: MatHeader) => void)
            );

        /**
         *
         * @memberof matfile
         * @param   theFile
         * @param   onload
         *
         */
        read(
            theFile: Blob,
            onload:  ((hdr: MatHeader) => void)
            );
        /**
         *
         * @memberof matfile
         * @param   href
         * @param   onload
         *
         */
        read_http(
            href:   string,
            onload: ((hdr: MatHeader) => void)
            ); 
    }
}
