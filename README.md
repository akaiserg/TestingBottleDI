# Testing BottleJs DI micro container

[BottleJS](https://github.com/young-steveo/bottlejs) has many features  that can be used to make complex modules. For instance:


 * Lazy loading
 * Service Factory
 * Decorators
 * Middleware


Unlike the  [di-lite](https://github.com/NickQiZhu/di.js#di-litecoffee--),  BottleJS passes  the dependencies through  the constructor of each module and it doesn't have a special attribute  to  define the list of dependencies, therefore,  each  module  definition is much cleaner.

```javascript
var AppModule= function(htmlIdModule,languageModule){.......

 // Factory  to  generate  the instance of   the english app
    bottleDi.factory('appModuleEnglish', function(container) {
        var englishTxtModule = container.englishTxtModule;
        var htmlId = new HtmlIdModule("btn2_id","txt2_id");
        return new AppModule(htmlId,englishTxtModule);
    });


});
```
