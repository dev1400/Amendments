sap.ui.controller("dia.cmc.contractsinamendment.view.App", {
	
	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 */
	to : function (pageId, context) {
		
		var app = this.getView().app;
		
		// load page on demand
		var master = ("Master" === pageId);
		if (app.getPage(pageId, master) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "dia.cmc.contractsinamendment.view." + pageId,
				type : "XML"
			});
			page.getController().nav = this;
			app.addPage(page, master);
			jQuery.sap.log.info("app controller > loaded page: " + pageId);
		}		
		// show the page
		app.to(pageId);
		
		// set data context on the page
		if (context) {
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
	},
	
	/**
	 * Navigates back to a previous page
	 * @param {string} pageId The id of the next page
	 */
	back : function (pageId) {
		this.getView().app.backToPage(pageId);
	},
	 onInit : function() {
	        
		 var view = this.getView();
		/* console.log(view);
		 console.log( sap.ui.getCore().getElementById("theApp"));
	     this.app = sap.ui.getCore().getElementById("theApp");  
	     console.log(this.app);*/
	},
	navToHandler : function(channelId, eventId, data) {
		console.log("navToHandler");
		// remember the App Control
		/*var view = this.getView();
		console.log(view);
        this.app = view.byId("theApp");*/

       /* subscribe to event bus
        var bus = sap.ui.getCore().getEventBus();
        bus.subscribe("nav", "to", this.navToHandler, this);
        bus.subscribe("nav", "back", this.navBackHandler, this);*/
        if (data && data.id) {
            // lazy load view
            if (sap.ui.getCore().getElementById("theApp").getPage(data.id) === null) {
               jQuery.sap.log.info("now loading page '" + data.id + "'");
               sap.ui.getCore().getElementById("theApp").addPage(sap.ui.xmlview(data.id, "dia.cmc.contractsinamendment.view." + data.id));
            }
            // Navigate to given page (include bindingContext)
            sap.ui.getCore().getElementById("theApp").to(data.id, data.data.context);
        } else {
            jQuery.sap.log.error("nav-to event cannot be processed. Invalid data: " + data);
        }
    },
});