document.getElementById("dagens_1").innerHTML = randomizer();
document.getElementById("dagens_2").innerHTML = randomizer();
document.getElementById("dagens_3").innerHTML = randomizer();

function randomizer() {
num = Math.random()
num = num * 15 + 1 //should be 1-15
return Math.floor(num);
}


fetch("meny.json")
.then(response => response.json())
.then(data => {

    // platta ut alla maträtter till en lista
    menyData = data.Mat.flatMap(kategori => kategori.items);

    randomizer();
});

function randomizer(){

    let copy = [...menyData]; // kopia så vi kan ta bort items

    for(let i=1;i<=3;i++){

        const randomIndex = Math.floor(Math.random()*copy.length);
        const item = copy[randomIndex];

        document.getElementById("dagens_"+i).innerHTML =
        `<h1>${item.namn}</h1><br>
        <p>${item.beskrivning}<p><br>
        <h2>${item.pris} kr<h2>`;

        copy.splice(randomIndex,1); // ta bort så inga dubbletter
    }

}
