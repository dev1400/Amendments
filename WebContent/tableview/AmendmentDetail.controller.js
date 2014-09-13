

sap.ui.controller("dia.cmc.contractsinamendment.tableview.AmendmentDetail", {

	onInit: function () {
		// using explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("model/products.json");
		this.getView().setModel(oModel);		
		
		},
		handleWorkFlowPress : function(evt) {
			
			var context = evt.getSource().getBindingContext();
			sap.ui.controller("dia.cmc.contractsinamendment.view.App").to("AmendmentFlow", context);
			//this.nav.to("AmendmentFlow", context);
		},
		handlePopoverPress : function(oEvent) {

			var local = oEvent.getParameters();
			var lastChar = local.id;
			lastChar = lastChar.substr(lastChar.length - 1);
			
			// create popover
			// if (!this._oPopover) {
			this._oPopover = sap.ui.xmlfragment(
					"dia.cmc.contractsinamendment.view.AmendmentDescription", this);
			this.getView().addDependent(this._oPopover);
			this._oPopover.bindElement("/AmendmentsCollection/" + lastChar);
			// }
			
			var oButton = oEvent.getSource();
			jQuery.sap.delayedCall(0, this, function() {
				this._oPopover.openBy(oButton);
			});
		}
		
});