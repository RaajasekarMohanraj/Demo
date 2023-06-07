sap.ui.jsview("root.view.Master", {

    getControllerName: function() {
        return "root.controller.App";
    },
  
    createContent : function(oController) {
      return new sap.m.Button({text: "Master View", press: ()=>{oController.navToSlaveView()}})
      
    }
  
  });