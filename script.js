const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
        appendToDisplay(key);
    } 
    // Enter key for equals
    else if (key === "Enter") {
        event.preventDefault(); 
        calculate();
    } 
    else if (key.toLowerCase() === "c" || key === "Escape") {
        clearDisplay();
    } 

    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});