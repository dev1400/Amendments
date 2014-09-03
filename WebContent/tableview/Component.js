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
					"Formatter.js"
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
	return this._rootView;
};

