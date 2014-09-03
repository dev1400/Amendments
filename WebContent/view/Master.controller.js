jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");

sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("AmendmentDetails", context);
	},
	 productCount : function(oValue) {
	    //return the number of products linked to Category // sync call only to get $count
	    if (oValue) {
	        var sPath = this.getBindingContext().getPath() + '/Products';
	        var oBindings = this.getModel().bindList(sPath);
	        return oBindings.getLength();
	    }
	}

	
});