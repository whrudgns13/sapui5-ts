import Button from "sap/m/Button";
import Text from "sap/m/Text";
import Toolbar from "sap/m/Toolbar";
import Controller from "com/demo/controller/Main.controller";
import ToolbarSpacer from "sap/m/ToolbarSpacer";

sap.ui.jsview("com.demo.view.Header",{
    getControllerName : function(){
        return "com.demo.controller.Main"
    },
    createContent : function(oController : Controller){
        let oToolbar = new Toolbar({
            content : [
                new ToolbarSpacer(),
                new Button({
                    icon : "../image/odrainbow.webp",
                    text:"Hello"
                })
            ]
        })
        
        return oToolbar;
    }
})