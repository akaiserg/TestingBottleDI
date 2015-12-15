/**
 * Module  which  has the html ids.
 * These can be set  by  using the constructor  or  the set methods
 */
var HtmlIdModule= function(buttonId,labelId){

    //setting the attributes
    __buttonId = buttonId || "";
    __labelId  = labelId  || "";

    /**
     * Button ID
     * @property __buttonId
     * @type {String}
     * @private
     */
    var __buttonId;
    /**
     *  Label id
     * @property __labelId
     * @type {String}
     * @private
     */
    var __labelId;

    /**
     * Returns the  id of the button
     * @method getIdHtmlButton
     * @public
     * @return {String}
     */
    this.getIdHtmlButton=function(){

        return __buttonId;

    }

    /**
     * Sets the id of the button
     * @method setIdHtmlButton
     * @param buttonId{String} Id of  the button
     * @public
     */
    this.setIdHtmlButton=function(buttonId){

        __buttonId=buttonId;

    }

    /**
     * Returns the id of the  html label
     * @method getIdHtmlLabel
     * @public
     * @return {String}
     */
    this.getIdHtmlLabel=function(){

        return __labelId;

    }

    /**
     * Sets the id of the html label
     * @method setIdHtmlLabel
     * @param labelId{String} Id of the html label
     * @public
     */
    this.setIdHtmlLabel=function(labelId){

        __labelId=labelId;

    }

}
