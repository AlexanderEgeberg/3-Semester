import { output } from "../../webpack.config";

let collectWords: string[] = [];

let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");
let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("outputField");
let saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("saveButton");
let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("showButton");
let clearButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clearButton");


function showWords(): void {
    if (collectWords === undefined || collectWords.length == 0) {
        outputElement.style.fontStyle = "italic";
        outputElement.innerHTML = "Empty";
    }
    else {
        outputElement.style.fontStyle = "normal";
        outputElement.innerHTML = collectWords.toString();
    }
}

function saveWords(): void {
    let word: string = inputElement.value;
    collectWords.push(word);
    inputElement.value = "";
    console.log(word + " pushed to array");

    
}
function clearWords(): void {
    collectWords = [];    
    showWords();
}

saveButton.addEventListener("click", saveWords);
showButton.addEventListener("click", showWords);
clearButton.addEventListener("click",clearWords);
inputElement.addEventListener("keypress", (keyEvent: KeyboardEvent) => {
    if (keyEvent.keyCode === 13) // "Enter" key
    {
        saveWords();
    }
})