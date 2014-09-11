sap.ui.controller("sap.ui.demo.myFiori.view.IconTabBar", {
	onInit : function() {

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		this.getView().setModel(i18nModel, "i18n");

		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("model/products.json");
		this.getView().setModel(oModel);
		
		
		var oComp = sap.ui.getCore().createComponent({
		      name : 'sap.ui.demo.myFiori.tableview'
		    });
		oComp.setModel(this.getView().getModel());
		this._oTable = oComp.getTable();
		this.getView().byId("idIconTabBar").insertContent(this._oTable);

	},

	handleIconTabBarSelect : function(oEvent) {
		//console.dir(oEvent);
		console.log(oEvent.getParameter("selectedKey"));
		  var oBinding = this._oTable.getBinding("items"), sKey = oEvent.getParameter("selectedKey"), oFilter;
		  console.log(sKey);
		  if (sKey === "Created") { 
			  oFilter = new sap.ui.model.Filter("AmendmentStatus", "EQ", "Created");
			  oBinding.filter([oFilter]); } 
		  else if (sKey === "Released") { 
			  oFilter = new sap.ui.model.Filter("AmendmentStatus", "EQ", "Released");
			  oBinding.filter([oFilter]); } 
		  else if (sKey === "Executed") { 
			  oFilter = new sap.ui.model.Filter("AmendmentStatus", "EQ", "Executed");
			  oBinding.filter([oFilter]); } 
		  else { oBinding.filter([]); }
		 
	},
	handleLineItemPress : function(evt) {
		console.log("This will navigate to details page");
		
	},
	handleWorkFlowPress : function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("AmendmentDetails", context);
	},
	handlePopoverPress : function(oEvent) {

		var local = oEvent.getParameters();
		var lastChar = local.id;
		lastChar = lastChar.substr(lastChar.length - 1);

		// create popover
		// if (!this._oPopover) {
		this._oPopover = sap.ui.xmlfragment(
				"sap.ui.demo.myFiori.view.Popover", this);
		this.getView().addDependent(this._oPopover);
		this._oPopover.bindElement("/ProductCollection/" + lastChar);
		// }

		// delay because addDependent will do a async rerendering and the
		// actionSheet will immediately close without it.
		var oButton = oEvent.getSource();
		jQuery.sap.delayedCall(0, this, function() {
			this._oPopover.openBy(oButton);
		});
	}

});