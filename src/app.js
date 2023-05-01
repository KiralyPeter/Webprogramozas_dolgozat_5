

const doc = {
    tbody: document.querySelector("#tbody")
};

const state = {
    host: "http://localhost:8000/",
    ships: []
};

getShips();

function getShips(){
    // host + végpont
    let url = state.host + "ships"
    fetch(url) // fetch - asszinkron utasítás...
    .then(response => response.json())
    .then(result => {
        console.log(result);
        state.ships = result;
        // render();
    }); 
}