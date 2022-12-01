import App from "sap/m/App";
sap.ui.jsview("com.demo.view.App",{
    getControllerName : function(){
        return "com.demo.controller.App"
    },
    createContent : function():App{
        
        let oApp = new App("app",{});
        return oApp;
    }
})