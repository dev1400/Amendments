jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");

sap.ui.controller("sap.ui.demo.myFiori.tableview.Table", {

	onInit : function() {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("model/products.json");
		this.getView().setModel(oModel);
	},
	onExit : function() {
		if (this._oPopover) {
			this._oPopover.destroy();			
		}
	},

	handlePopoverPress : function(oEvent) {
		
		var local = oEvent.getParameters();
		var lastChar = local.id;
		lastChar = lastChar.substr(lastChar.length - 1);	

		// create popover
		//if (!this._oPopover) {
			this._oPopover = sap.ui.xmlfragment("sap.ui.demo.myFiori.tableview.Popover",
					this);
			this.getView().addDependent(this._oPopover);
			this._oPopover.bindElement("/ProductCollection/"+lastChar);
			//}

		// delay because addDependent will do a async rerendering and the
		// actionSheet will immediately close without it.
		var oButton = oEvent.getSource();
		jQuery.sap.delayedCall(0, this, function() {
			this._oPopover.openBy(oButton);
		});
	},
	handleWorkFlowPress : function (evt) {
		/*var context = evt.getSource().getBindingContext();
		this.nav.to("AmendmentDetails", context);*/
		
	}

});