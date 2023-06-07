sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
 ], function (UIComponent, JSONModel,) {
    "use strict";
    return UIComponent.extend("root.Component", {
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
       metadata : {
          "interfaces": ["sap.ui.core.IAsyncContentCreation"],
          "rootView": {
             "viewName": "root.view.App",
             "type": "JS",
             /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
             "id": "app"
          }
       },
       init : function () {
          UIComponent.prototype.init.apply(this, arguments);
          this.getRouter().initialize();
       }
    });
 });