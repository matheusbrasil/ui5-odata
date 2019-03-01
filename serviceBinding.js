function initModel() {
	var sUrl = "/ODATA_SAMPLE/V2/(S(zwtpsfn4lslk5e5thjxlbto0))/OData/OData.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}