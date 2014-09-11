

sap.ui.controller("sap.ui.demo.myFiori.tableview.Table", {

	onInit: function () {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("model/products.json");
		this.getView().setModel(oModel);
		
		this.getView().setModel(new sap.ui.model.json.JSONModel({
		      width: (sap.ui.Device.system.phone) ? "50em" : "100em"
		    }));
		}
		
});