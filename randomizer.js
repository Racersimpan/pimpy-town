function randomizer(){

    let copy = [...menyData]; // kopia så vi kan ta bort items

    for(let i=1;i<=3;i++){

        const randomIndex = Math.floor(Math.random()*copy.length);
        const item = copy[randomIndex];

        document.getElementById("dagens_"+i).innerHTML =
        `<h1>${item.namn}</h1><br>
        <p>${item.beskrivning}</p><br>
        <h2>${item.pris} kr</h2>`;

        copy.splice(randomIndex,1); // ta bort så inga dubbletter
    }
}

randomizer();