new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        message: "",
        result: [],
        notEmpty: false,
    },
    methods: {
        collectwords() {
          //  console.log("test");
            this.result.push(this.message);
            this.message = "";
            this.notEmpty = true;
        },
        clearwords() {
            this.notEmpty = false;
            this.result = [];
           // console.log("??");
        },
    }
})