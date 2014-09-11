

sap.ui.controller("sap.ui.demo.myFiori.tableview.Table", {

	onInit: function () {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("model/products.json");
		this.getView().setModel(oModel);
		
		this.getView().setModel(new sap.ui.model.json.JSONModel({
		      width: (sap.ui.Device.system.phone) ? "50em" : "100em"
		    }));
		},
		handleWorkFlowPress : function(evt) {
			var context = evt.getSource().getBindingContext();
			this.nav.to("AmendmentDetails", context);
		},
		handlePopoverPress : function(oEvent) {

			var local = oEvent.getParameters();
			var lastChar = local.id;
			lastChar = lastChar.substr(lastChar.length - 1);
			
			console.log(lastChar);

			// create popover
			// if (!this._oPopover) {
			this._oPopover = sap.ui.xmlfragment(
					"sap.ui.demo.myFiori.view.AmendmentDescription", this);
			this.getView().addDependent(this._oPopover);
			this._oPopover.bindElement("/AmendmentsCollection/" + lastChar);
			// }

			// delay because addDependent will do a async rerendering and the
			// actionSheet will immediately close without it.
			var oButton = oEvent.getSource();
			jQuery.sap.delayedCall(0, this, function() {
				this._oPopover.openBy(oButton);
			});
		}
		
});