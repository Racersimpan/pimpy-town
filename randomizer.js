
document.getElementById("dagens_1").innerHTML = randomizer();
document.getElementById("dagens_2").innerHTML = randomizer();
document.getElementById("dagens_3").innerHTML = randomizer();

function randomizer() {
num = Math.random()
num = num * 15 + 1 //should be 1-15
return Math.floor(num);
}

