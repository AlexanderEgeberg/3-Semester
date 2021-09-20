new Vue({
    el: "#app",
    data: {
        message: ""
    },
    methods: {
        clicked(ev: MouseEvent) {
            this.message = "Button clicked x=" + ev.x + " y=" + ev.y
        },
        keyPressed(ev: KeyboardEvent) { this.message = "key pressed " + ev.key },
        keyDown(ev: KeyboardEvent) { console.log("Key down: " + ev.key) },
        keyUp(ev: KeyboardEvent) { console.log("Key up: " + ev.key) },
        focusGained() { console.log("focus") },
        focusLost() { console.log("focus lost") },
        mouseOver(ev: MouseEvent) { 
            console.log("mouse over")
        },
        mouseOut(ev: MouseEvent) {
            console.log("mouse out")
        }
    }
}) 