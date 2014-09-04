sap.ui.controller("sap.ui.demo.myFiori.view.IconTabBar", {
	onInit: function () {
		
		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		this.getView().setModel(i18nModel, "i18n");


	    // set explored app's demo model on this sample
	    var oModel = new sap.ui.model.json.JSONModel("model/products.json");
	    this.getView().setModel(oModel);

	    // reuse table sample component
	    var oComp = sap.ui.getCore().createComponent({
	      name : 'sap.ui.demo.myFiori.tableview'
	    });
	    oComp.setModel(this.getView().getModel());
	    this._oTable = oComp.getTable();
	    this.getView().byId("idIconTabBar").insertContent(this._oTable);

	    // update table
	    this._oTable.setHeaderText(null);
	    this._oTable.setShowSeparators("Inner");
	  },

	  handleIconTabBarSelect: function (oEvent) {
	    var oBinding = this._oTable.getBinding("items"),
	      sKey = oEvent.getParameter("selectedKey"),
	      oFilter;
	    if (sKey === "Ok") {
	      oFilter = new sap.ui.model.Filter("WeightMeasure", "LE", 1000);
	      oBinding.filter([oFilter]);
	    } else if (sKey === "Heavy") {
	      oFilter = new sap.ui.model.Filter("WeightMeasure", "BT", 1001, 2000);
	      oBinding.filter([oFilter]);
	    } else if (sKey === "Overweight") {
	      oFilter = new sap.ui.model.Filter("WeightMeasure", "GT", 2000);
	      oBinding.filter([oFilter]);
	    } else {
	      oBinding.filter([]);
	    }
	  }

});