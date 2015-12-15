/**
 * Module  which  returns texts in Spanish
 */
var SpanishTxtModule= function(){

    /**
     * First text
     * @property __fText
     * @type {String}
     * @private
     */
    var __fText="Presione el botón";

    /**
     * Second text
     * @property __sText
     * @type {String}
     * @private
     */
    var __sText="Hola!";

    /**
     * Returns the first text
     * @method getFirstText
     * @private
     * @return {String}
     */
    this.getFirstText=function(){

        return __fText;
    }

    /**
     * Returns the second text
     * @method getSecondText
     * @private
     * @return {String}
     */
    this.getSecondText=function(){

        return __sText;
    }

}
