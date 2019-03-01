sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.odata.controller.S0", {
		onInit: function () {
			window.modeloGlobal = this.getOwnerComponent().getModel();
		},

		outro: function () {
			window.modeloGlobal = this.getView().getModel();
		},

		onPressRead: function (oEvent) {
			var oModel = this.getView().getModel(); // ODataModel

			var mParameters = {
				success: function (oResult) {
					console.log(oResult);
				},
				error: function (oError) {

				}
			};
			oModel.read("/Categories", mParameters);
		}
	});
});