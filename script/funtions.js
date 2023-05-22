import utilities from "./utlities.js";

const {
    labelToggle,
    errorText, 
    code, 
    writeSvgPath, 
    noTextMascota, 
    noTextTitle, 
    textPTrue
} = utilities;

export const validatorMayusAccent = e => {
    const data = e.data ?? "";
    const regex = /[a-zñ\s,.;:]/g;
    let found = data.match(regex);
    return found;
}

export const errorTextStyle = () => {
    errorText.classList.add("error");
    writeSvgPath.classList.add("write_svg--error");
    
    setTimeout(() => {      
        errorText.classList.remove("error");
        writeSvgPath.classList.remove("write_svg--error");
    }, 1600)
}

export const deleteErrorTextStyle = () => {
    errorText.classList.remove("error");
    writeSvgPath?.classList.remove("write_svg--error");
}

export const encriptar = phrase => {
    const arrayCode = Object.keys(code);

    let textResult = "";

    for (let i = 0; i < phrase.length; i++) {
        if (arrayCode.includes(phrase[i]) ) {
            textResult += code[phrase[i]];
        } else {
            textResult += phrase[i];
        }
    }  

    return textResult;
}

export const desencriptar = phrase => {
    let result = phrase;
    for (const key in code) {
        if (result.includes(code[key])) {
            result = result.replace(new RegExp(`\\${code[key]}`, "g"), key);
        }
    }
    return result;
};

export const switchElements = (onElem, offElem) => {
    offElem.style.display = "none";
    onElem.style.display = "flex";
}

export const sacudir = () => {
    if (textPTrue.textContent.length < 1) {
        noTextMascota.classList.add("sacudir");
        noTextTitle.classList.add("sacudir");
        
        setTimeout(() => {
            noTextMascota.classList.remove("sacudir");
            noTextTitle.classList.remove("sacudir");
        }, 800)
    }
}

export const darkTheme = (e) => {
    document.body.classList.toggle("dark")
    console.log(e.target.checked);
    if (e.target.checked) {
        // labelToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        labelToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        labelToggle.style.color = "#c28c18";
    }
    else {
        labelToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        labelToggle.style.color = "#0A3871";
    }
}