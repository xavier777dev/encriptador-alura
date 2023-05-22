import utilities from "./utlities.js";
import { 
    deleteErrorTextStyle,
    encriptar,
    errorTextStyle,
    validatorMayusAccent,
    switchElements,
    desencriptar,
    sacudir,
    darkTheme
} from "./funtions.js";

const {textarea, errorText, textPTrue, btnBlue, noText, textTrue, btnWhite, textInputTrue, labelToggle} = utilities;

document.addEventListener("DOMContentLoaded", () => {
    let textAcc = "";
    let dataSelect = "";
    let selectionText = "";

    toggle.addEventListener("change", (e) => {
       darkTheme(e);
    })

    textarea.addEventListener("input", e => {
        const listKeyWord = ["deleteContentBackward", "deleteWordBackward", "insertLineBreak"];

        if (e.data == validatorMayusAccent(e) && e.data != null) {

            if (selectionText != undefined && selectionText.length > 0) {
                errorText && errorText.classList.remove("error");
                dataSelect += e.data;
                textAcc.replace(/${selectionText}/g, dataSelect);
                textAcc += e.data;
                // addScroll(e);
                return;
            }

            errorText && deleteErrorTextStyle();
            textAcc += e.data;
            e.target.value = textAcc;
            // addScroll(e);
        }
        else {
            if (listKeyWord.includes(e.inputType) || e.data == null) {
                errorText && deleteErrorTextStyle();
                textAcc = e.target.value;
                e.target.value = textAcc;
                // lessScroll(e);
                return;
            }
            e.target.value = textAcc;
            errorTextStyle();
        }

        document.addEventListener('selectionchange', function() {
            let selectedText = window.getSelection().toString();
            
            (selectedText.length > 0) && (selectionText = selectedText);
        });
    })

    btnBlue.addEventListener("click", () => {
            let text = textarea.value.split("");
        if (textarea.value.length > 0 && !text.every((e)=>e == " ")) {
            switchElements(textTrue, noText);
                        
            textPTrue.textContent = encriptar(textAcc);
            textarea.value = "";
            textAcc = "";
        }
        else {            
            textarea.value = "";
            textAcc = "";
            sacudir();
        }
    });
    
    btnWhite.addEventListener("click", () => {
        let text = textarea.value.split("");
        if (textarea.value.length > 0 && !text.every((e)=>e == " ")) {
            switchElements(textTrue, noText);
            
            textPTrue.textContent = desencriptar(textarea.value);
            textarea.value = "";
            textAcc = "";
        }
        else {            
            textarea.value = "";
            textAcc = "";
            sacudir();
        }
    });

    textInputTrue.addEventListener("click", () => {
         
        navigator.clipboard.writeText(textPTrue.textContent).then(() => { 
        }, (err) => {
            console.error("error:", err);
        });

    })
});
