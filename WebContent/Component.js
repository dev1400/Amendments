jQuery.sap.declare("sap.ui.demo.myFiori.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.myFiori.view.App",
			type : "JS",
			viewData : { component : this }
		});

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");
		
		/*var oModel = new sap.ui.model.odata.ODataModel("proxy/http/services.odata.org/Northwind/Northwind.svc/",true);
		oView.setModel(oModel);*/
		//sap.ui.getCore().setModel(oModel);
		

//		// Using OData model to connect against a real service
//		var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
//		oView.setModel(oModel);

		// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oView.setModel(oModel);

		// done
		return oView;
	}
});