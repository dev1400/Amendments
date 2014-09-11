jQuery.sap.declare("sap.ui.demo.myFiori.tableview.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.tableview.Component", {

	metadata : {
		publicMethods : [
			"getTable"
		],
		dependencies : {
			libs : [
				"sap.m",
				"sap.ui.layout"
			]
		},
		config : {
			sample : {
				files : [
					"Table.view.xml",
					"Table.controller.js",
					
				]
			}
		}
	},
	
	getTable : function () {
		return this._rootView.getContent()[0];
	}
});

sap.ui.demo.myFiori.tableview.Component.prototype.createContent = function () {
	this._rootView = sap.ui.xmlview({ viewName : "sap.ui.demo.myFiori.tableview.Table" });
	// set i18n model
	var i18nModel = new sap.ui.model.resource.ResourceModel({
		bundleUrl : "i18n/messageBundle.properties"
	});
	this._rootView.setModel(i18nModel, "i18n");
	var oModel = new sap.ui.model.json.JSONModel("model/products.json");
	this._rootView.setModel(oModel);
	
	return this._rootView;
};