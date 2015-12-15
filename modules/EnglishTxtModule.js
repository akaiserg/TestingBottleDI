/**
 * Module  which  returns texts in English
 */
var EnglishTxtModule= function(){

    /**
     * First text
     * @property __fText
     * @type {String}
     * @private
     */
    var __fText="Press the button";
    /**
     * Second text
     * @property __sText
     * @type {String}
     * @private
     */
    var __sText="Hello!";

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
