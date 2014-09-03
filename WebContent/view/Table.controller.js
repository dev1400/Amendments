jQuery.sap.require("sap.ui.demo.myFiori.view.Formatter");

sap.ui.controller("sap.ui.demo.myFiori.view.Table", {

	onInit: function () {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("model/products.json");
		this.getView().setModel(oModel);
	}
});