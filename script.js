// Write your JavaScript code here!
window.addEventListener("load", function(){
  let subButton = document.getElementById("formSubmit");
  subButton.addEventListener("click", function(event){
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.getElementById("copilotName");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoWeight = document.getElementById("cargoWeight");

    let pilotValid = (pilotName.value !== "" && typeof(pilotName.value)==="string");
    let copilotValid = (copilotName.value !== "" && typeof(copilotName.value)==="string");
    let fuelValid = (fuelLevel.value !== "" && !isNaN(Number(fuelLevel.value)));
    let cargoValid = (cargoWeight.value !== "" && !isNaN(Number(cargoWeight.value)));
    
    if (!pilotValid) {
      alert("Please enter a pilot name to launch.");
      event.preventDefault();
    } else if (!copilotValid) {
      alert("Please enter a copilot name to launch.");
      event.preventDefault();
    } else if (!fuelValid) {
      alert("Please enter a number for fuel level to launch.");
      event.preventDefault();
    } else if (!cargoValid) {
      alert("Please enter a number for cargo weight to launch.");
      event.preventDefault();
    } else {
      console.log("Launch!")// do the things
    }
  });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
  <li>Name: ${}</li>
  <li>Diameter: ${}</li>
  <li>Star: ${}</li>
  <li>Distance from Earth: ${}</li>
  <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
