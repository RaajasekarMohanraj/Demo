sap.ui.controller("root.controller.App", {
   
   navToSlaveView: function(oEvent){
      var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("Slave");
   },
   navToMasterView: function(oEvent){
      var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("Master");
   }
 });