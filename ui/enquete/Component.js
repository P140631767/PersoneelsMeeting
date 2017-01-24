jQuery.sap.declare("PersoneelsMeeting.enquete.Component");

sap.ui.core.UIComponent.extend("PersoneelsMeeting.enquete.Component", {
	metadata: {
		name: "PersoneelsMeeting.enquete",
		version: "1.0",
		includes: [],
		dependencies: {
			libs: ["sap.m", "sap.ui.layout"],
			components: []
		},

		rootView: "PersoneelsMeeting.enquete.view.Detail",

		init: function() {
			sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

			// Set device model
			var oDeviceModel = new sap.ui.model.json.JSONModel({
				isTouch: sap.ui.Device.support.touch,
				isNoTouch: !sap.ui.Device.support.touch,
				isPhone: sap.ui.Device.system.phone,
				isNoPhone: !sap.ui.Device.system.phone,
				listMode: sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
				listItemType: sap.ui.Device.system.phone ? "Active" : "Inactive"
			});
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
		}
	}
});