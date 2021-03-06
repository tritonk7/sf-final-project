({
    doInit : function(component, event, helper) {
        let queryString = window.location.search;        
        let urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        component.set("v.touristId", id);
        helper.fetchFlights(component);
        helper.fetchWeather(component);
        helper.fetchTrips(component);
        helper.fetchTourist(component);
        let today = $A.localizationService.formatDate(new Date(), "YYYY-MM-DD");
        component.set("v.today", today);
    },
    
    handleSelect : function(component, event, helper) {
        helper.fetchTripSelectedRows(component, event);
        helper.validationTrip(component);
    },
    
    onChange : function(component, event, helper) {
        helper.validationSubmit(component);
    },
    
    handleConfirmDialog : function(component, event) {
        component.set("v.showConfirmDialog", true);
    },
    
    handleConfirmDialogYes : function(component, event, helper) {
        helper.handleCreateFlight(component, event);
        component.set("v.showConfirmDialog", false);
    },
    
    handleConfirmDialogNo : function(component, event, helper) {
        component.set("v.showConfirmDialog", false);
    },
    
    handleOpenPrice : function(component, event, helper) {
        let touristId = component.get('v.touristId');
        let url = $A.get("$Label.c.urlPricePDF");
        window.open(url + touristId,'_blank');
    }
})
