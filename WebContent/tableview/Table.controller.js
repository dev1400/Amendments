

sap.ui.controller("sap.ui.demo.myFiori.tableview.Table", {

	onInit: function () {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("model/products.json");
		this.getView().setModel(oModel);
		}
});