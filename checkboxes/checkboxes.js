const androidCB = document.getElementById("androidCB");
const iodCB = document.getElementById("iodCB");
const emulatedCB = document.getElementById("emulatedCB");

const result = document.getElementById("preferences");
const result2 = document.getElementById("preferencesResult");

const btn = document.getElementById("submit");
const btn2 = document.getElementById("submit2");



btn.onclick = (e) => {
    let printTxt = "So you like ";
    const checks = document.getElementsByName("platform");
    for(check of checks) {
        if(check.checked) {
            printTxt += check.value;
        }
    }
    result.textContent = printTxt;
}

btn2.onclick = (e) => {
    let printTxt = "So you like ";
    let added = 0;
    const checks = document.getElementsByName("platformcb");
    for(check of checks) {
        if(check.checked) {
            if(added > 0 && added < checks.length-1) {
                printTxt += ", ";
            }
            if(added > 0 && added === checks.length-1) {
                printTxt += " and ";
            }
            printTxt += check.value;
            added++;
        }
    }
    result2.textContent = printTxt;
}