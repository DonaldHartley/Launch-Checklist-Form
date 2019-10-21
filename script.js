// Write your JavaScript code here!

/**
 * This function takes 2 arguments max and min (default 0) and returns a semi random integer from min to max-1
 */
function randomIntiger (max, min = 0) {
  return Math.trunc(Math.random() * ((max) - min)) + min;
}

window.addEventListener("load", function(){
  let subButton = document.getElementById("formSubmit");
  let pilotName = document.getElementById("pilotName");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotName = document.getElementById("copilotName");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelLevel = document.getElementById("fuelLevel");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoWeight = document.getElementById("cargoWeight");
  let cargoStatus = document.getElementById("cargoStatus");
  let faultyItems = document.getElementById("faultyItems");
  let launchStatus = document.getElementById("launchStatus");

  function updatePilot(){
    pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
  }
  
  function updateCopilot(){
    copilotStatus.innerHTML = `Pilot ${copilotName.value} Ready`;
  }
  
  function updateFuel (){
    if (Number(fuelLevel.value)<10000){
      fuelStatus.innerHTML = "There is not enough fuel for the journey.";
      return true;
    }
  }

  function updateCargo(){
    if (Number(cargoWeight.value)>10000) {
      cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
      return true;
    }
    
  }

  subButton.addEventListener("click", function(event){

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
      updatePilot();
      updateCopilot();
      let fuelCheck = updateFuel();
      let cargoCheck = updateCargo();

      if (fuelCheck || cargoCheck){
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = "red";
        event.preventDefault();
      } else {
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.color = "green";
        event.preventDefault();
        window.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json){
          let i = randomIntiger(json.length);
          let missionTarget = document.getElementById("missionTarget");
          missionTarget.innerHTML = `
          <h2>Mission Destination</h2>
            <ol>
              <li>Name: ${json[i].name}</li>
              <li>Diameter: ${json[i].diameter}</li>
              <li>Star: ${json[i].star}</li>
              <li>Distance from Earth: ${json[i].distance}</li>
              <li>Number of Moons: ${json[i].moons}</li>
            </ol>
            <img src="${json[i].image}">
            `;
          });
        });
      }
    }
  });
});
