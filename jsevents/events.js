const light = document.getElementById("light");
const lightSwitch = document.getElementById("switch");
const alertText = document.getElementById("alert_text");
const alertBtn = document.getElementById("alert_btn")

//event handler
const lightToggle = () => {
    light.innerHTML = "On";
}
const alertHandler = () => {
    alert(alertText.value);
}

// event listener
const eventType = "click";

// lightSwitch.addEventListener("click"), () => {}):
lightSwitch.addEventListener(eventType, lightToggle);
alertBtn.addEventListener(eventType, alertHandler);