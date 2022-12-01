import Button from "sap/m/Button";
import Text from "sap/m/Text";
import Controller from "com/demo/controller/Main.controller";

sap.ui.jsview("com.demo.view.Main",{
    getControllerName : function(){
        return "com.demo.controller.Main"
    },
    createContent : function(oController : Controller){
        console.log(oController);
        let oButton = new Button({
            text : "abcdef",
            press : function(){
                oController.sayHello();
            }
        });
        return oButton;
    }
})