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
            // grab all the mission destination required fields & image
        })
    })
// })

let form = document.querySelector("form");
form.addEventListener("submit",function(){
  event.preventDefault();
  let pilot = document.querySelector("input[name=pilotName]").value;
  let copilot = document.querySelector("input[name=copilotName").value;
  let fuel = document.querySelector("input[name=fuelLevel]").value;
  let cargo = document.querySelector("input[name=cargoMass]").value;
  let checkOne;
  let checkTwo;
  //set up form by declaring required inputs  

if (pilot == "" || !isNaN(pilot)) {
    // verify user doesn't leave field blank
    alert("Please Enter a Pilot Name");  
    event.preventDefault();
  } else if (copilot == "" || !isNaN(copilot)) {
      // verify user doesn't leave field blank
    alert("Please Enter a Copilot Name");
    event.preventDefault();
  } else if (isNaN(fuel) || fuel == "") {
      // verify user doesn't leave field blank and that the value is a number
    alert("Please make sure that Fuel is entered as a number");
    event.preventDefault();
  } else if (isNaN(cargo) || cargo == "") {
    // verify user doesn't leave field blank and that the value is a number
    alert("Please make sure that Cargo is entered as a number");
    event.preventDefault();
  } else {
    document.getElementById(
      "pilotStatus"
    ).innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById(
      "copilotStatus"
    ).innerHTML = `Copilot ${copilot} is ready for launch`;
    //if the fuel is under limit, make list visible, header goes red, and alert user that all is not well.
    if (Number(fuel) < 10000) {
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
    //if the cargo mass is over limit, make list visible, header goes red, and alert user that all is not well.
    if (Number(cargo) > 10000) {
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
  //if all checks pass, hid the list, header goes green, and alert user all is GOOD!
  if (checkOne == true && checkTwo == true) {
    document.getElementById("faultyItems").style.visibility = "hidden";
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById(
      "launchStatus"
    ).innerHTML = `Shuttle Ready for Launch`;
  }
});
});