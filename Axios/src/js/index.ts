import Axios, { AxiosError, AxiosResponse } from "../../node_modules/axios/index";

// let URI: string = "http://jsonplaceholder.typicode.com/todos";
let URI: string = "https://axiosrs.azurewebsites.net/api/localItems";

let getButton1: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnRequest1");
getButton1.addEventListener("click", performGetRequest1);

let getButton2: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnRequest2");
getButton2.addEventListener("click", performGetRequest3 );

let post: HTMLFormElement = <HTMLFormElement> document.getElementById("todoInputForm");
post.addEventListener("submit", performPostRequest);

let clear1: HTMLButtonElement = <HTMLButtonElement> document.getElementById("clearRequest1");
clear1.addEventListener("click", Clear1)

let clear2: HTMLButtonElement = <HTMLButtonElement> document.getElementById("clearRequest2");
clear2.addEventListener("click", Clear2)

let clear3: HTMLButtonElement = <HTMLButtonElement> document.getElementById("clearPost");
clear3.addEventListener("click", Clear3)


function Clear1() {
    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("getResult1");
    resultElement.innerHTML = "";
}
function Clear2() {
    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("getResult2");
    resultElement.innerHTML = "";
}
function Clear3() {
    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("postResult");
    resultElement.innerHTML = "";
}


function performGetRequest1(){

    let resultElement1: HTMLDivElement = <HTMLDivElement> document.getElementById("getResult1");
    resultElement1.innerHTML = "";

    Axios.get(URI)
        .then(function (response: AxiosResponse) {
            resultElement1.innerHTML = JSON.stringify(response.data);
        })
        .catch(function (error: AxiosError){
            resultElement1.innerHTML = error.message;
        })
}

function performGetRequest2(){

    let resultElement2: HTMLDivElement = <HTMLDivElement> document.getElementById("getResult2");
    let todoID: HTMLInputElement = <HTMLInputElement> document.getElementById("todoId");
    let todoIDValue = todoID.value;
    resultElement2.innerHTML = "";

    Axios.get(URI,{
        params: {
            id: todoIDValue
        }
        })
        .then(function (response: AxiosResponse) {
            resultElement2.innerHTML = JSON.stringify(response.data);
        })
        .catch(function (error: AxiosError){
            resultElement2.innerHTML = error.message;
        })
        console.log(todoIDValue);
}

function performGetRequest3(){

    let resultElement2: HTMLDivElement = <HTMLDivElement> document.getElementById("getResult2");
    let todoID: HTMLInputElement = <HTMLInputElement> document.getElementById("todoId");
    let todoIDValue = todoID.value;
    todoIDValue.toString();
    let test = URI + "/" + todoIDValue;
    resultElement2.innerHTML = "";

    Axios.get(test)
        .then(function (response: AxiosResponse) {
            resultElement2.innerHTML = JSON.stringify(response.data);
        })
        .catch(function (error: AxiosError){
            resultElement2.innerHTML = error.message;
        })
}

function performPostRequest(e: Event){

    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("postResult");

    let postTitle: HTMLInputElement = <HTMLInputElement> document.getElementById("todoTitle");
    let qualityElement: HTMLInputElement = <HTMLInputElement> document.getElementById("quality");
    let quantityElement: HTMLInputElement = <HTMLInputElement> document.getElementById("quantity");
    let quantityValue = quantityElement.value;
    let quantityInt = parseInt(quantityValue);

    resultElement.innerHTML = "";

    Axios.post(URI, {
        id: 1,
        name: postTitle.value,
        quality: qualityElement.value,
        quantity: quantityInt
    })
        .then(function (response: AxiosResponse) {
            resultElement.innerHTML = JSON.stringify(response.data);
        })
        .catch(function (error: AxiosError){
            resultElement.innerHTML = error.message;
        });

        console.log(postTitle.value + qualityElement.value + quantityElement.value)
        e.preventDefault();       
}