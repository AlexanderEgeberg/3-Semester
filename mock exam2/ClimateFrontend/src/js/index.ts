import Axios, { AxiosError, AxiosResponse } from "../../node_modules/axios/index";

interface IRecord {
    //https://examrestservice20201217114901.azurewebsites.net/api/typescript
    id: Number,
    pressure: Number,
    humidity: Number,
    temperature: Number,
    timeStamp: Date
}

let baseUrl: string = "https://examrestservice20201217114901.azurewebsites.net/api/typescript";



new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.


    el: "#app",
    data: {
        recordID: undefined,
        recordDatas: [],
        recordData: [],
        deleteResponse: [],
        singleData: undefined,
        errorMessage: "",
        postFormData: {id: undefined, pressure: 0, humidity: 0, temperature: 0, timeStamp: 0},
    },
    methods: {

        //Calls a HTTP get method and returns as HTTP Response
        async getAllAsync() {
            try { return Axios.get<IRecord[]>(baseUrl) }
            catch (error: any) {
                this.errorMessage = error.message;
                alert(error.message)
            }
        },

        //creates response variable and assigns values to data.
        async getAll() {
            let response = await this.getAllAsync();
            this.recordData = response.data;
        },

        //Calls a HTTP get method by specific ID 
        getById(id: number) {
            let url: string = baseUrl + "/" + id
            Axios.get<IRecord>(url)
                .then((response: AxiosResponse<IRecord>) => {
                    this.singleData = response.data
                })
                .catch((error: AxiosError) => {
                    this.errorMessage = error.message
                    alert(error.message) // https://www.w3schools.com/js/js_popup.asp
                })
        },
        async postAsync() {
            try {
                return Axios.post<IRecord>(baseUrl, this.postFormData)
            }
            catch (error: any) {
                this.errorMessage = error.message
                console.log("message" + error.message);
                alert(error.message)
            }
        },

        async HTTPPost(){
          let response = await this.postAsync();
          this.addStatus = "Status: " + response.status + ' ' + response.statusText;
          this.addMessage = "Response data: " + JSON.stringify(response.data);  
        },

        HTTPDelete(id: number) {
            let url: string = baseUrl + "/" + id
            Axios.delete<IRecord>(url)
                .then((response: AxiosResponse<IRecord>) => {
                    this.deleteResponse = response.data
                })
                .catch((error: AxiosError) => {
                    this.errorMessage = error.message
                    alert(error.message) // https://www.w3schools.com/js/js_popup.asp
                })
        },
    }
})