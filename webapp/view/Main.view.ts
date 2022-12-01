import Button from "sap/m/Button";
import Text from "sap/m/Text";
import Page from "sap/m/Page";
import Controller from "com/demo/controller/Main.controller";
import View from "sap/ui/core/mvc/View";

sap.ui.jsview("com.demo.view.Main",{
    getControllerName : function(){
        return "com.demo.controller.Main"
    },
    createContent : async function(oController : Controller){
        //https://www.clarityincrazy.com/cbd
        let oHeaderContent = await View.create({
            viewName : "com.demo.view.Header",
            type: 'JS'
        });

        console.log(oHeaderContent)
        let oPage = new Page({
            headerContent : [
                oHeaderContent
            ],
            content : [
                oHeaderContent
            ]
        })
        
        return oPage;
    }
})