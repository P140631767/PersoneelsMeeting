sap.ui.controller("PersoneelsMeeting.enquete.view.Detail", {

	onInit: function() {

		var oTableModel = new sap.ui.model.odata.ODataModel("/PersoneelsMeeting/services/enquete.xsodata", true);
		this.getView().setModel(oTableModel, "Table");

		var oUser = new sap.ui.model.json.JSONModel("/services/userapi/currentUser");
		this.getView().setModel(oUser, "User");

		var oRecordModel = {
			"ENQUETE_ID": "3",
			"BNAME": "JEI03834",
			"ANSWER": ""
		};
		this.oRecordModel = new sap.ui.model.json.JSONModel(oRecordModel);
		this.getView().setModel(this.oRecordModel, "Record");
	},

	onRadiobuttonSelect: function(oEvent) {
		var oTable = this.getView().getModel("Table");
		var oEntry = this.getView().getModel("Record").getData();
		var iIndex = oEvent.getParameter("selectedIndex");
		var oUser = this.getView().getModel("User");
		oEntry.BNAME = oUser.getProperty("/name");
		oEntry.ANSWER = JSON.stringify(iIndex);

		oTable.setHeaders({
			"content-type": "application/json;charset=utf-8"
		});

		oTable.create('/EnqueteItm', oEntry, null, function() {
			alert("Create successful");
		}, function() {
			oTable.update("/EnqueteItm(ENQUETE_ID='3',BNAME='" + oEntry.BNAME + "')", oEntry, null, function() {
			alert("Update successful");
			}, function() {
				
				alert("Update failed");
			});
		});
	}
});