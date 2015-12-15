/**
 * Module  which  sets the texts on the page and loads the  button's action
 */
var AppModule= function(htmlIdModule,languageModule){

    /**
     * Contract or  the interface which the parameter  languageModule  should  implement
     * @property __languageContract
     * @type {Object}
     * @private
     */
    var  __languageContract=ILanguage;
    /**
     * Contract or  the interface which the parameter  htmlIdModule  should  implement
     * @property  __htmlAppContract
     * @type {Object}
     * @private
     */
    var  __htmlAppContract=IHtmlApp;

    /**
     *  Checks  the contracts ILanguage and  IHtmlApp
     *  If the modules  fulfill  the contracts, the flow will continue
     * @method __checkContracts
     * @param iLanguage{Object}      Contract  for ILanguage
     * @param languageModule{Object} Module that  should  fulfill the contract ILanguage
     * @param iHtmlApp{Object}       Contract  for IHtmlApp
     * @param htmlModule{Object}     Module that  should  fulfill the contract ILanguage
     * @private
     */
    var __checkContracts= function(iLanguage,languageModule, iHtmlApp, htmlModule){

        Interface.ensureImplements(languageModule,ILanguage);
        Interface.ensureImplements(htmlModule,iHtmlApp);
        __setData(languageModule,htmlModule);

    };

    /**
     *   Sets  the  text and  the action of the module
     * @method __setData
     * @param languageModule{Object} Module which has  the texts
     * @param htmlModule{String}     Module which has  the html ids
     * @private
     */
    var __setData= function(languageModule,htmlModule){

        __setTxtButton(htmlModule.getIdHtmlButton(),languageModule.getFirstText());
        __setActionButton(htmlModule.getIdHtmlButton(),languageModule.getSecondText(),htmlModule.getIdHtmlLabel());

    };

    /**
     *  Sets the value of the button
     * @method __setTxtButton
     * @param idBtn{String} Id button
     * @param txt{String}   Text to show on the button
     * @private
     */
    var  __setTxtButton=function(idBtn,txt){

        var btn=document.getElementById(idBtn);
        btn.value=txt;

    };

    /**
     *  Sets the action of the button, this button   triggers   change of the a text
     * @method __setActionButton
     * @param idBtn{String} Id button
     * @param txt{String}   Text to show  where the button is clicked
     * @param idDiv{String} Div where the text will be changed
     * @private
     */
    var __setActionButton=function(idBtn,txt,idDiv){

        var btn= document.getElementById(idBtn);
        btn.onclick=function(){
            var div= document.getElementById(idDiv);
            div.innerHTML=txt;
        }

    };

    // checks the contracts
    __checkContracts( __languageContract,languageModule,__htmlAppContract,htmlIdModule);



}
