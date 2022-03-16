const lightSwitch = document.querySelector("#lightSwitch");

console.log(lightSwitch.value);

lightSwitch.addEventListener("change", function () {
  if (lightSwitch.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});
