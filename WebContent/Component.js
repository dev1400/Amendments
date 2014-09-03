jQuery.sap.declare("sap.ui.demo.myFiori.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {
	
	metadata : {
		rootView : "sap.ui.demo.myFiori.view.IconTabBar",
		dependencies : {
			libs : [
				"sap.m",
				"sap.ui.layout"
			],
			components : [
				"sap.ui.demo.myFiori"
			]
		},
		config : {
			sample : {
				files : [
					"IconTabBar.view.xml",
					"IconTabBar.controller.js"
				]
			}
		}
	}

	/*metadata : {
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
	}*/
});

/*sap.ui.demo.myFiori.Component.prototype.createContent = function () {
	this._rootView = sap.ui.xmlview({ viewName : "sap.ui.demo.myFiori.view.IconTabBar" });
	return this._rootView;
};

*/