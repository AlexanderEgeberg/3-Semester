import Axios, { AxiosError, AxiosResponse } from "../../node_modules/axios/index";

interface IPost {
    planteId: number;
    planteType: string;
    planteNavn: string;
    maksHoejde: string;
    price: number;
}

let URI: string = "https://planteshopservice20201109111409.azurewebsites.net/api/plante";

let getAllButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnRequestAll");
getAllButton.addEventListener("click", performGetAllRequest);

let getByIDButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnRequestByID");
getByIDButton.addEventListener("click", performGetRequestByID);

let getByStringButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnRequestByType");
getByStringButton.addEventListener("click", performGetRequestByString);

let post: HTMLFormElement = <HTMLFormElement> document.getElementById("postForm");
post.addEventListener("submit", performPostRequest);

let deleteRequest: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnDeleteByID");
deleteRequest.addEventListener("click", performDeleteRequestByID);

let clear1: HTMLButtonElement = <HTMLButtonElement> document.getElementById("clearRequestAll");
clear1.addEventListener("click", ClearAllGet)

let clear2: HTMLButtonElement = <HTMLButtonElement> document.getElementById("clearRequestByID");
clear2.addEventListener("click", ClearGetByID)

let clear3: HTMLButtonElement = <HTMLButtonElement> document.getElementById("clearPost");
clear3.addEventListener("click", ClearPost)


function ClearAllGet() {
    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("getAllResults");
    resultElement.innerHTML = "";
}
function ClearGetByID() {
    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("getResultByID");
    resultElement.innerHTML = "";
}
function ClearPost() {
    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("postResult");
    resultElement.innerHTML = "";
}


function performGetAllRequest(){

    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("getAllResults");
    resultElement.innerHTML = "";

    Axios.get<IPost[]>(URI)
        .then((response: AxiosResponse<IPost[]>) => {

            let data: IPost[] = response.data;
            let prettyData: string = MakePretty(data);
            resultElement.innerHTML = prettyData;
            //resultElement.innerHTML = JSON.stringify(response.data);


        })
        .catch((error: AxiosError) => {
            resultElement.innerHTML = error.message;
        })
}

function performGetRequestByID(){

    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("getResultByID");
    let PlantID: HTMLInputElement = <HTMLInputElement> document.getElementById("plantID");
    let PlantIDValue = PlantID.value;
    PlantIDValue.toString();
    let test = URI + "/" + PlantIDValue;
    resultElement.innerHTML = "";

    Axios.get(test)
        .then(function (response: AxiosResponse) {
            resultElement.innerHTML = JSON.stringify(response.data);
        })
        .catch(function (error: AxiosError){
            resultElement.innerHTML = error.message;
        })
}

function performGetRequestByString(){

    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("getResultByType");
    let PlantString: HTMLInputElement = <HTMLInputElement> document.getElementById("plantType");
    let plantStringValue = PlantString.value;
    plantStringValue.toString();
    let test = URI + "/type/" + plantStringValue;
    resultElement.innerHTML = "";

    Axios.get(test)
        .then(function (response: AxiosResponse) {
            resultElement.innerHTML = JSON.stringify(response.data);
        })
        .catch(function (error: AxiosError){
            resultElement.innerHTML = error.message;
        })
}


function performPostRequest(e: Event){

    let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("postResult");

    let postPlantTypeElement: HTMLInputElement = <HTMLInputElement> document.getElementById("postPlantType");
    let postPlantNameElement: HTMLInputElement = <HTMLInputElement> document.getElementById("postPlantName");
    let postPlantMaxHeightElement: HTMLInputElement = <HTMLInputElement> document.getElementById("postMaxHeight");
    let postPlantPriceElement: HTMLInputElement = <HTMLInputElement> document.getElementById("postPrice");



    resultElement.innerHTML = "";

    Axios.post(URI, {
        planteType: postPlantTypeElement.value,
        planteNavn: postPlantNameElement.value,
        maksHoejde: parseInt(postPlantMaxHeightElement.value),
        price: parseInt(postPlantPriceElement.value)
    })
        .then(function (response: AxiosResponse) {
            resultElement.innerHTML = JSON.stringify(response.data);
        })
        .catch(function (error: AxiosError){
            resultElement.innerHTML = error.message;
        });

        console.log(postPlantTypeElement.value + postPlantNameElement.value + postPlantMaxHeightElement.value + postPlantPriceElement.value)
        e.preventDefault();       
}

function performDeleteRequestByID(){

    let plantID: HTMLInputElement = <HTMLInputElement> document.getElementById("deletePlantID");
    let plantIDValue = plantID.value;
    plantIDValue.toString();
    let test = URI + "/" + plantIDValue;

    Axios.delete(test)
        .then(function (response: AxiosResponse) {
            console.log("success");
        })
        .catch(function (error: AxiosError){
            console.log("failure");
        })
}
function MakePretty(data: IPost[]){

    let prettyData: string = "<ol>";

    data.forEach(element => {
        console.log(element.planteNavn);
        prettyData += "<li>" + element.planteNavn + " - " + element.planteType + " - " + element.maksHoejde + " cm  " + element.price + " kr" + "</li>";
    });
    prettyData += "</ol>";
    return prettyData;
}