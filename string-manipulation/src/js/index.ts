import { output } from "../../webpack.config";

let input1Element: HTMLInputElement = <HTMLInputElement>document.getElementById("input1");
let operatorElement: HTMLInputElement = <HTMLInputElement>document.getElementById("operator");
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("calculate");
let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("output");
let result: string;

function calculate(): void {



    switch (operatorElement.value) {
        case "lowerCase":
            result = input1Element.value;
            result = result.toLowerCase();
            break;
        case "upperCase":
            result = input1Element.value;
            result = result.toUpperCase();

            break;
        case "trim":
            result = input1Element.value;
            result = result.trim();

            break;
        case "concat":
            result = input1Element.value;
            result = result.concat(result);

            break;
        default:
            break;
    }
    outputElement.innerHTML = result;
}

buttonElement.addEventListener("click",calculate);