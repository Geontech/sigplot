import {
    AccordionPlugin   as _AccordionPlugin,
    IAccordionOptions as _IAccordionOptions,
    IAccordionStyle   as _IAccordionStyle
} from './sigplot.accordion';

import {
    AnnotationPlugin   as _AnnotationPlugin,
    IAnnotationOptions as _IAnnotationOptions,
    AnnotationValue    as _AnnotationValue,
    IAnnotation        as _IAnnotation,
    Annotations        as _Annotations
} from './sigplot.annotations';

import {
    BoxesPlugin   as _BoxesPlugin,
    IBoxesOptions as _IBoxesOptions,
    IBox          as _IBox
} from './sigplot.boxes';

// Re-export all plugins and interfaces under the 'plugins' module name.
export declare module plugins {
    // Accordion
    export class     AccordionPlugin   extends _AccordionPlugin {}
    export interface IAccordionOptions extends _IAccordionOptions {}
    export interface IAccordionStyle   extends _IAccordionStyle {}

    // Annotation
    export class     AnnotationPlugin   extends _AnnotationPlugin {}
    export interface IAnnotationOptions extends _IAnnotationOptions {}
    export interface IAnnotation        extends _IAnnotation {}
    export type      Annotations        =       _Annotations;
<<<<<<< HEAD
    export type      AnnotationValue    =       _AnnotationValue;
=======
>>>>>>> Added reference to plugins module from sigplot, as now in the js.

    // Boxes
    export class     BoxesPlugin   extends _BoxesPlugin {}
    export interface IBoxesOptions extends _IBoxesOptions {}
    export interface IBox          extends _IBox {}

    // Playback (TBD)

    // Slider (TBD)
}
