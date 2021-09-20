import { output } from "../../webpack.config";

let input1Element: HTMLInputElement = <HTMLInputElement>document.getElementById("input1");
let input2Element: HTMLInputElement = <HTMLInputElement>document.getElementById("input2");
let operatorElement: HTMLInputElement = <HTMLInputElement>document.getElementById("operator");
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("calculate");
let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("output");

function calculate(): void {

    let result: number;

    switch (operatorElement.value) {
        case "+":
            result = parseInt(input1Element.value) + parseInt(input2Element.value);
            break;
        case "-":
            result = parseInt(input1Element.value) - parseInt(input2Element.value);
            break;
        case "*":
            result = parseInt(input1Element.value) * parseInt(input2Element.value);
            break;
        case "/":
            result = parseInt(input1Element.value) / parseInt(input2Element.value);
            break;
        default:
            break;
    }
    outputElement.innerHTML = result.toString();
}

buttonElement.addEventListener("click",calculate);