jQuery.sap.declare("dia.cmc.contractsinamendment.Component");

sap.ui.core.UIComponent.extend("dia.cmc.contractsinamendment.Component", {
	
	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "dia.cmc.contractsinamendment.view.App",
			type : "JS",
			viewData : { component : this }
		});

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");		

		return oView;
	
	}
	
});

