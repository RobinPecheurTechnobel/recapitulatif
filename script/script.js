/*Section styleCss*/
let styleCssTextExpérimentation = "font-size : 15px;\nfont-weight : bold;\nfont-style : italic;\ntext-align : left;\ntext-transform : none;\ntext-decoration : none";

function resetStyleCss(){
    document.getElementById("testerVosClasses").value = styleCssTextExpérimentation;

    
    let button = document.getElementById("btnAppliquerStyleCss");
    button.style.backgroundColor = "";
}
function appliquerStyleCss(){

    let exempleTexte = document.getElementsByClassName("example")[0];
    let button = document.getElementById("btnAppliquerStyleCss");

    exempleTexte.style =  document.getElementById("testerVosClasses").value;
    button.style.backgroundColor = "rgb(220,255,220)";
}
function changeTexteStyleStyleCss(){
    let button = document.getElementById("btnFontSizeStyleCss");
    let regrex = /(font-size *: *(\w)+.*(\w)*%*;+)/;
    if(button){
        if(button.innerHTML == "Absolu"){
            button.innerHTML = "Relatif";
            styleCssTextExpérimentation = styleCssTextExpérimentation.replace("font-size : 15px;","font-size : 0.9em;");
            if(document.getElementById("testerVosClasses").value.includes("font-size")){
                document.getElementById("testerVosClasses").value = document.getElementById("testerVosClasses").value.replace(regrex,"font-size : 0.9em;");
            
                let button = document.getElementById("btnAppliquerStyleCss");
                button.style.backgroundColor = "";
            }
        }
        else{
            button.innerHTML = "Absolu";
            styleCssTextExpérimentation = styleCssTextExpérimentation.replace("font-size : 0.9em;","font-size : 15px;");
            if(document.getElementById("testerVosClasses").value.includes("font-size")){
            document.getElementById("testerVosClasses").value = document.getElementById("testerVosClasses").value.replace(regrex,"font-size : 15px;");
            
            let button = document.getElementById("btnAppliquerStyleCss");
            button.style.backgroundColor = "";
            }
        }
    }
    else{
        console.log("wtf");
    }
}
function texteAreaChangeStyleStyleCss(){
    let button = document.getElementById("btnAppliquerStyleCss");
    button.style.backgroundColor = "";
}

resetStyleCss();
appliquerStyleCss();