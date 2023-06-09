var cloakSpan = document.getElementById("cloakCounter");
var stoneSpan = document.getElementById("stoneCounter");
var wandSpan = document.getElementById("wandCounter");

// create connection
var connectionHouse = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Trace)
    .withUrl("/hubs/deathlyhallows").build();

// connect to methods that hub invokes aka receive notifications from hub
connectionHouse.on("updateDeathlyHallowsCount", (cloak, stone, wand) => {
    cloakSpan.innerText = cloak.toString();
    stoneSpan.innerText = stone.toString();
    wandSpan.innerText = wand.toString();
});



// start connection
function fullfilled() {
    connectionHouse.invoke("GetRaceStatus").then((raceCounter) => {
        cloakSpan.innerText = raceCounter.cloak.toString();
        stoneSpan.innerText = raceCounter.stone.toString();
        wandSpan.innerText = raceCounter.wand.toString();
    });
    // do something on start
    console.log("Connection to User Hub Successful");
}

function rejected() {
    // rejected logs
    console.log("Connection to User Hub Rejected");
}

// start connection
connectionHouse.start().then(fullfilled, rejected);