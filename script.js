// Write your JavaScript code here!


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
*/
window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(
      function(response){     
    response.json().then(function(json){
            const div = document.getElementById("missionTarget");
            let planet = Math.floor(Math.random()*json.length);
                // rounding a random number between 0 and 1
            div.innerHTML  = `
                <h2>Mission Destination</h2>
                <ol>
                <li> Name: ${json[planet].name}</li>
                <li> Diameter: ${json[planet].diameter}</li>
                <li> Star: ${json[planet].star}</li>
                <li> Distance from Earth: ${json[planet].distance}</li>
                <li> Number of Moons: ${json[planet].moons}</li>
                </ol>
                <img src = "${json[planet].image}">
            `;
        })
    })
// })

let form = document.querySelector("form");
form.addEventListener("submit",function(){
  event.preventDefault();
  let pilotInput = document.querySelector("input[name=pilotName]").value;
  let copilotInput = document.querySelector("input[name=copilotName").value;
  let fuelInput = document.querySelector("input[name=fuelLevel]").value;
  let cargoInput = document.querySelector("input[name=cargoMass]").value;
  let checkOne;
  let checkTwo;

if (pilotInput == "" || !isNaN(pilotInput)) {
    alert("Please Enter a Pilot Name");
    event.preventDefault();
  } else if (copilotInput == "" || !isNaN(copilotInput)) {
    alert("Please Enter a Copilot Name");
    event.preventDefault();
  } else if (isNaN(fuelInput) || fuelInput == "") {
    alert("Please make sure that Fuel is entered as a number");
    event.preventDefault();
  } else if (isNaN(cargoInput) || cargoInput == "") {
    alert("Please make sure that Cargo is entered as a number");
    event.preventDefault();
  } else {
    document.getElementById(
      "pilotStatus"
    ).innerHTML = `Pilot ${pilotInput} is ready for launch`;
    document.getElementById(
      "copilotStatus"
    ).innerHTML = `Copilot ${copilotInput} is ready for launch`;
    if (Number(fuelInput) < 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById(
        "launchStatus"
      ).innerHTML = `Shuttle Not Ready for Launch`;
      document.getElementById(
        "fuelStatus"
      ).innerHTML = `Fuel level is too low for launch`;
    } else {
      document.getElementById("fuelStatus").innerHTML = `Fuel level is good`;
      checkOne = true;
    }
    if (Number(cargoInput) > 10000) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById(
        "launchStatus"
      ).innerHTML = `Shuttle Not Ready for Launch`;
      document.getElementById(
        "cargoStatus"
      ).innerHTML = `Cargo mass too high for launch`;
    } else {
      document.getElementById(
        "cargoStatus"
      ).innerHTML = `Cargo mass low enough for launch`;
      checkTwo = true;
    }
  }
  if (checkOne == true && checkTwo == true) {
    document.getElementById("faultyItems").style.visibility = "hidden";
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById(
      "launchStatus"
    ).innerHTML = `Shuttle Ready for Launch`;
  }
});
});