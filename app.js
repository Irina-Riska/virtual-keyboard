const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        //Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        //Setup main elements
        this.elements.main.classList.add("keyboard", "1keyboard-hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");

        //Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "del",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "shift", "", "z", "x", "c", "v", "b", "n", "m", ".", ",", " ", "up", "shift",
            "ctrl", "win", "alt", "space", "alt", "ctrl", "left", "down", "right"
        ];

    },

    _triggerEvent(handlerName) {
        console.log("Event Triggered! Event Name: " + handlerName);
    },

    _toggleCapsLock() {
        console.log("Caps Lock Toggled!");
    },

    open(initialValue, oninput,onclose) {

    },

    close() {

    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});