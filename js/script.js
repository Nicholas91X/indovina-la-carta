let soldi = 100;
let monete = document.getElementById("monete");
monete.innerHTML = soldi;
let segnale = document.getElementById("segnale-risultato");
const scopri = document.querySelector(".btn");
const card = document.querySelector(".card");
const assoCuori = `<img class="w-100" src="img/Asso Cuori.jpg">`;
const assoPicche = `<img class="w-100" src="img/Asso Picche.jpg">`;
const assoFiori = `<img class="w-100" src="img/Asso Fiori.jpg">`;
const assoQuadri = `<img class="w-100" src="img/Asso Quadri.jpg">`;
const reCuori = `<img class="w-100" src="img/Re Cuori.jpg">`;
const rePicche = `<img class="w-100" src="img/Re Picche.jpg">`;
const reFiori = `<img class="w-100" src="img/Re Fiori.jpg">`;
const reQuadri = `<img class="w-100" src="img/Re Quadri.jpg">`;
const jolly = `<img class="w-100" src="img/Jolly.jpg">`;


scopri.addEventListener("click", function(){
    let x = 0;
    let differenze = document.getElementById("differenze");
    let puntata = document.getElementById("puntata").value;
    let scelta = document.getElementById("select-card").value;
    console.log(scelta);
    const num = Math.floor(Math.random() * 10);
    console.log(num);
    switch (num) {
        case 1:
            card.innerHTML = assoCuori;
            x = "Asso di Cuori";
            break;
        case 2:
            card.innerHTML = assoPicche;
            x = "Asso di Picche";
            break;
        case 3:
            card.innerHTML = assoFiori;
            x = "Asso di Fiori";
            break;
        case 4:
            card.innerHTML = assoQuadri;
            x = "Asso di Quadri";
            break;
        case 5:
            card.innerHTML = reCuori;
            x = "Re di Cuori";
            break;
        case 6:
            card.innerHTML = rePicche;
            x = "Re di Picche";
            break;
        case 7:
            card.innerHTML = reFiori;
            x = "Re di Fiori";
            break;
        case 8:
            card.innerHTML = reQuadri;
            x = "Re di Quadri";
            break;
        case 0:
        case 9:
            card.innerHTML = jolly;
            x = "Joker";
            break;
        default:
            alert("failed");
            break;
    }

    if (scelta == x) {
        soldi = soldi + (puntata * 10);
        segnale.innerHTML = "Grande!!!";
        differenze.classList.remove("crimson");
        differenze.classList.add("verde");
        differenze.innerHTML = "+"+puntata * 10;
        setTimeout(function() {
            alert("Hai indovinato!");
        }, 200);
    } else {
        segnale.innerHTML = "Riprova";
        differenze.classList.remove("verde");
        differenze.classList.add("crimson");
        differenze.innerHTML = -puntata;
        soldi = soldi - (puntata);
    }

    document.getElementById("risultato").innerHTML = x;
    monete.innerHTML = soldi;
    console.log(soldi);
})

