sap.ui.jsview("root.view.Slave", {

    getControllerName: function() {
        return "root.controller.App";
    },

    createContent : function(oController) {
      return new sap.m.Button({text: "Slave View", press: ()=>{oController.navToMasterView()}})
      
    }
  
  });