/*Section BaseCss*/


/*Section styleCss*/
let styleCssTextExpérimentation = "font-size : 15px;\nfont-weight : bold;\nfont-style : italic;\ntext-align : left;\ntext-transform : none;\ntext-decoration : none;";
styleCssTextExpérimentation += "\noverflow-wrap : normal;\noverflow : hidden;\nwhite-space : pre-line;\ntext-overflow : ellipis;"

function resetStyleCss(){
    document.getElementById("testerVosClasses").value = styleCssTextExpérimentation;

    
    let button = document.getElementById("btnAppliquerStyleCss");
    button.style.backgroundColor = "";
}
function appliquerStyleCss(){

    let exempleTexte = document.getElementById("labo2Example");
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

function applicationFondVert(idCheckbox, selecteurCss){
    let fondVert = "backgroundColor : rgb(220,255,220)";
    let aperçu = document.getElementById("labo1AperçuParagraphe");
    let declencheur = document.getElementById(idCheckbox);
    let zoneExample = document.getElementById("labo1Example");

    if(declencheur.checked){
        aperçu.innerHTML += selecteurCss +"{<br>\t"+fondVert+";<br>}<br>";

        zoneExample.querySelectorAll(selecteurCss).forEach((node) => {
            node.style.backgroundColor = "rgb(220,255,220)";});
    }
    else{
        let aRetirer = "{<br>\t"+fondVert+";<br>}<br>"
        aperçu.innerHTML = aperçu.innerHTML.replace(selecteurCss + aRetirer,'');
        // aperçu.innerHTML = aperçu.innerHTML.replace(,'');

        zoneExample.querySelectorAll(selecteurCss).forEach(
            (node) => { node.style.backgroundColor = "";}
        );
        //vérification en rerait "abusif"
        zoneExample.querySelectorAll(selecteurCss).forEach(
            (node) => { node.style.backgroundColor = "";}
        );
        let checkboxes =  document.getElementById("mesCheckBox").getElementsByTagName("input");
        let index = 0;
        while( checkboxes.item(index)){
            let checkbox = checkboxes.item(index);
            if(checkbox.checked){
                selecteurCss = checkbox.getAttribute("onchange").split("'")[3];
                zoneExample.querySelectorAll(selecteurCss).forEach(
                    (node) => { node.style.backgroundColor = "rgb(220,255,220)";}
                );
            }

            index++;
        }
    }

}

resetStyleCss();
appliquerStyleCss();