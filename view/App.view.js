sap.ui.jsview("root.view.App", {

  getControllerName: function() {
      return "root.controller.App";
  },

  createContent : function(oController) {
    return new sap.m.App("app")
  }

});