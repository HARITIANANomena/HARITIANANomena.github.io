const cellules = document.querySelectorAll('.cell');
const info = document.querySelector('.info');
const restart = document.querySelector('#restart');

let joueurs = "X";
let joueursV = "O";
let veroullige = true;

info.innerHTML = `Toron' i ${joueurs} izao`;

const ligneGaner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let partie = ["", "", "", "", "", "", "", "", ""];

cellules.forEach(cel => {
    cel.addEventListener('click', adda);
});

var compt = 0;

function adda(e) {
    const caCible = e.target;
    const caIndex = caCible.getAttribute('data-index');

    let adcl = caCible.classList.toggle('infox');

    if (adcl) {
            partie[caIndex] = joueurs;
            caCible.innerHTML = joueurs;
        } else {
            partie[caIndex] = "";
            caCible.innerHTML = "";
        }

    compt += 1;

    console.log(partie);
    console.log(adcl);
    console.log("Compteur = ",compt);

    resultat();
}

function resultat() {
    let finDepartie = false;

    for (let i = 0; i < ligneGaner.length; i++) {

        let winer = ligneGaner[i];

        let a = partie[winer[0]];
        let b = partie[winer[1]];
        let c = partie[winer[2]];
 
        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            finDepartie = true;
            break;
        }
    }
    if (finDepartie) {
        veroullige = false;
        info.innerHTML = `Mpilalao ${joueurs} no nandresy, Arahabaina!`;
        return;
    }

    const mmtch = !partie.includes('');
    if(mmtch) {
        veroullige = false;
        info.innerHTML = `Ady sahala ny lalao!`;
        return;
    }
    toure();
}

function toure() {
    joueurs = joueurs == "X" ? "O" : "X";
    info.innerHTML = `Toron' i ${joueurs} izao !`;
    return;
}

restart.addEventListener('click', () => {
    document.location.reload();
})
