

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
        render();
    }); 
}


    function render(){
        let rows = ""; // kezdetben üres
        state.ships.forEach((ships) => {
            // `` = változó behelyettesítés (AltGR + 7)
            rows += `
                <tr>
                    <td>${ships.name}</td>
                    <td>${ships.length}</td>
                    <td>${ships.price}</td>
                    <td>${ships.person}</td>
                    <td>${ships.trailer}</td>
                </tr>
            `; 
            console.log(ships.name);  
        });
    
        doc.tbody.innerHTML = rows;
}