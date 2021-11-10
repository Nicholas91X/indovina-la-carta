let soldi = 100;
document.getElementById("monete").innerHTML = soldi;
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
        document.getElementById("segnale-risultato").innerHTML = "Grande!!!";
        document.getElementById("differenze").classList.remove("crimson");
        document.getElementById("differenze").classList.add("verde");
        document.getElementById("differenze").innerHTML = "+"+puntata * 10;
        setTimeout(function() {
            alert("Hai indovinato!");
        }, 200);
    } else {
        document.getElementById("segnale-risultato").innerHTML = "Riprova";
        document.getElementById("differenze").classList.remove("verde");
        document.getElementById("differenze").classList.add("crimson");
        document.getElementById("differenze").innerHTML = -puntata;
        soldi = soldi - (puntata);
    }

    document.getElementById("risultato").innerHTML = x;
    document.getElementById("monete").innerHTML = soldi;
    console.log(soldi);
})

