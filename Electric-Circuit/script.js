const pi = 3.14159265358979;

let ohmForm = document.querySelector("#ohm-form");
let ohmV = document.querySelector("#ohm-v");
let ohmI = document.querySelector("#ohm-i");
let ohmR = document.querySelector("#ohm-r");
let ohmResult = document.querySelector("#ohm-result");

ohmForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let v = ohmV.value;
    let i = ohmI.value;
    let r = ohmR.value;

    let empty = 0;
    if (v === ""){
        empty++;
    }
    if (i === ""){
        empty++;
    }
    if (r === ""){
        empty++;
    }

    if (empty !== 1) {
        ohmResult.innerText = "Leave exactly one field empty";
        return;
    }

    if (v === "") {
        v = i * r;
    } else if (i === "") {
        if (r === "0") {
            ohmResult.innerText = "R can't be zero";
            return;
        }else{
            i = v / r;
        }
    } else {
        if (i === "0") {
            ohmResult.innerText = "I can't be zero";
            return;
        }else{
            r = v / i;
        }
    }

    let p = v * i;
    ohmResult.innerText = 
        "V = " + v + " V\n" +
        "I = " + i + " A\n" +
        "R = " + r + " Ω\n" +
        "P = " + p + " W";
});


let rlcForm = document.querySelector("#rlc-form");
let rlcR = document.querySelector("#rlc-r");
let rlcL = document.querySelector("#rlc-l");
let rlcC = document.querySelector("#rlc-c");
let rlcF = document.querySelector("#rlc-f");
let rlcV = document.querySelector("#rlc-v");
let rlcResult = document.querySelector("#rlc-result");

rlcForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let r = rlcR.value;
    let l = rlcL.value;
    let c = rlcC.value;
    let f = rlcF.value;
    let v = rlcV.value;

    let empty = 0;
    if (r === ""){
        empty++;
    }
    if (l === ""){
        empty++;
    }
    if (c === ""){
        empty++;
    }
    if (f === ""){
        empty++;
    }
    if (v === ""){
        empty++;
    }

    if (empty > 0) {
        rlcResult.innerText = "Fill in all fields";
        return;
    }

    let henry = l / 1000;       
    let farad = c / 1000000;    

    let xl = 2 * pi * f * henry;
    let xc = 1 / (2 * pi * f * farad);

    rlcResult.innerText =
        "XL = " + xl + " Ω\n" +
        "XC = " + xc + " Ω\n" ;
});


let eqForm = document.querySelector("#equivalent-form");
let eqConnection = document.querySelector("#resistance-connection");
let eqValues = document.querySelector("#values");
let eqResult = document.querySelector("#equivalent-result");

eqForm.addEventListener("submit", (e) => {

    e.preventDefault();

    if (eqValues.value === "") {
        eqResult.innerText = "Enter the resistor values";
        return;
    }

    let list = eqValues.value.split(",");

    let sum = 0;           
    let suminverse = 0;    
    let valid = true;

    for (let k = 0; k < list.length; k++) {

        let r = Number(list[k])

        if (r > 0) {
            sum = sum + r;
            suminverse = suminverse + 1 / r;
        } else {
            valid = false;
        }
    }

    if (valid === false) {
        eqResult.innerText = "Enter positive numbers only, separated by commas";
        return;
    }

    if (eqConnection.value === "series") {
        eqResult.innerText = "Req = " + sum + " Ω";
    } else {
        eqResult.innerText = "Req = " + 1 / suminverse + " Ω";
    }
});