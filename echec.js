console.log("debut echec.js");

// structure de données
let indexJeu2Echec = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];

const jeuEchecInitial = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

let jeu2Echec = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];



// initialisation du jeu 
initialiserJeu();

function initialiserJeu() {
    console.log("initialiserJeu");
    initJeu2Echec(jeuEchecInitial);
    afficherJeuDansConsole(jeu2Echec);
    afficherJeuDansBrowser(jeu2Echec);

}

function afficherJeuDansConsole(table) {
    console.log("afficherJeuDansConsole");
    console.log(table);
    console.log("table[8][2] : " + table[7][2]);
    for (let lig = 0; lig < table.length; lig++) {
        //console.log(table[lig]);
        //let strIdrisTest = "Idris fait un test sur la ligne : " + lig + " | ";
        let strIdrisTest = " | ";
        for (let col = 0; col < table[lig].length; col++) {
            //console.log('afficher colonne : ')
            strIdrisTest = strIdrisTest + table[lig][col] + ' | ';
        }
        console.log(strIdrisTest);
        //console.log(' |____|____|____|____|____|____|____|____|');
        console.log(' +----+----+----+----+----+----+----+----+');
    }

}


function afficherJeuDansBrowser(table) {
    console.log("afficherJeuDansBrowser");
    console.log(table);

    // boucle sur les lignes 
    for (let lig = 0; lig < table.length; lig++) {
        // boucle sur les colonnes
        for (let col = 0; col < table[lig].length; col++) {
            let valeur = table[lig][col]
            //console.log(valeur);
            let caseID = indexJeu2Echec[lig][col];
            //console.log(caseID + " = " + valeur);
            document.getElementById(caseID).innerText = valeur;
        }
    }
}

function initJeu2Echec(table) {
    console.log("afficherJeuDansBrowser");
    console.log(table);

    // boucle sur les lignes 
    for (let lig = 0; lig < table.length; lig++) {
        // boucle sur les colonnes
        for (let col = 0; col < table[lig].length; col++) {
            jeu2Echec[lig][col] = table[lig][col]
        }
    }
}

// ecouter les evenements

// BTN RESET : on va reinitialisée le jeu : 
let btnReset = document.getElementById("reset");
btnReset.addEventListener("click", quandOnClicSurReset);


function quandOnClicSurReset(evt) {
    console.log("quandOnClicSurReset");
    console.log(evt);
    console.log(this);
    initialiserJeu();
}

// BTN DEPLACER : récupération d'un élément HTML ! + ajout d'un listener
let btnDeplacer = document.getElementById("boutonDeplacement");
//btnDeplacer.addEventListener("click", quandOnclicSurleBouton);
btnDeplacer.addEventListener("click", quandOnclicSurDeplacer);



// on créer la fonction quandOnclicSurDeplacer :
function quandOnclicSurDeplacer(evt) {
    // on affiche le nom de la fonction
    console.log("quandOnclicSurDeplacer");
    // on affiche le paramètre
    console.log(evt)

    //je récupère les textes du mouvement demandé
    let txtDepart = document.getElementById("depart");
    //console.log("quandOnclicSurDeplacer txtDepart" + txtDepart);
    //console.log(txtDepart);
    let strDepart = txtDepart.value;
    console.log(strDepart);

    let txtDestination = document.getElementById("destination");
    //console.log("quandOnclicSurDeplacer txtDestination" + txtDestination);
    //console.log(txtDestination);
    let strDestination = txtDestination.value;
    console.log(strDestination);




    // d2 => [6][3]
    // d => [3]
    // 2 => [6]

    // d4 => [4][3]
    // d => [3]
    // 4 => [4]


    // [
    //     ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    //     ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    //     ["", "", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", "", ""],
    //     ["", "", "", "", "", "", "", ""],
    //     ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    //     ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
    // ]

    let colonneEchecEnChiffre = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7
    };




    // on traite la chaine de caractère de depart
    // le caractère n°1 devient un numero de colone
    let carStrDepart = strDepart[0];
    console.log("carStrDepart1 : " + carStrDepart);

    let chiffreColDepart = colonneEchecEnChiffre[carStrDepart];
    console.log("chiffreColDepart : " + chiffreColDepart);

    // le caractère n°2 devient un numéro de ligne
    let intDepart = strDepart[1];
    console.log("intDepart : " + intDepart);

    let chiffreLigDepart = 8 - intDepart;
    console.log("chiffreLigDepart : " + chiffreLigDepart);


    // ===============================================
    // Le traitement de la destination commence ici
    // on traite la chaine de caractère de depart
    let carStrDest1 = strDestination[0];
    console.log("carStrDest1 : " + carStrDest1);

    let colChiffreDest1 = colonneEchecEnChiffre[carStrDest1];
    console.log("colChiffreDest1 : " + colChiffreDest1);


    // ===============================================
    // TU ECRIS ICI 
    // le caractère n°2 devient un numéro de ligne

    let intDestination = strDestination[1];
    console.log("intDestination : " + intDestination);

    let chiffreLigDestination = 8 - intDestination;
    console.log("chiffreLigDestination : " + chiffreLigDestination);

    // ===============================================

    // carStrDepart = document.getElementById("depart");
    // carStrDest1 = document.getElementById("destination"); 

    // console.log(colonneEchecEnChiffre[strDepart[0]]);
    // console.log(8 - strDepart[1]);
    // console.log(jeu2Echec[8 - strDepart[1]][colonneEchecEnChiffre[strDepart[0]]]);


    // let ligStrDepart = strDepart;
    // console.log("ligStrDepart : " + ligStrDepart);

    //afficherJeuDansConsole(jeu2Echec);


    //pour déplacer les pions : 


    // ===============================================
    // TU ECRIS ICI 
    // tu dois remplacer le 4 et le 3 par les bonnes variables 
    // jeu2Echec[4][3]

    jeu2Echec[chiffreLigDestination][colChiffreDest1] = jeu2Echec[chiffreLigDepart][chiffreColDepart];
    // ===============================================


    jeu2Echec[chiffreLigDepart][chiffreColDepart] = "";

    let depart = document.getElementById("depart");
    let destination = document.getElementById("destination");

    depart.value = "";
    destination.value = "";

    afficherJeuDansBrowser(jeu2Echec);

}


function mettreValeurDansCase() {
    console.log('mettreValeurDansCase');
    echec.value.innerText = cases.value.innerText;
}

// création d'une fonction 
function quandOnclicSurleBouton() {
    console.log("quandOnclicSurleBouton");
    //je récupère les textes du mouvement demandé
    let txtDepart = document.getElementById("depart");

    console.log("quandOnclicSurleBouton txtDepart" + txtDepart);
    console.log(txtDepart);

    let strDepart = txtDepart.value;
    console.log(strDepart);
    console.log(strDepart.length);

    let txtDestination = document.getElementById("destination");
    console.log(txtDestination);
    let strDestination = txtDestination.value;
    console.log(strDestination);
    //elle valide la saisie de l'utilisateur
    if (strDepart.length !== 2) {
        console.log("Il faut que tu ne mette que les coordonées de la case de départ et d'arriver, pour que cela fonctionne !");

        return;
    } else {

        ascii_lettre_depart = strDepart.charCodeAt(0);
        console.log("le caractere ascii pour la lettre de depart" + ascii_lettre_depart);
        var lettre_a = 'ah';
        ascii_lettre_a = lettre_a.charCodeAt(0);
        ascii_lettre_h = lettre_a.charCodeAt(1);
        console.log(lettre_a);


        console.log(ascii_lettre_depart);
        if ((ascii_lettre_depart >= ascii_lettre_a) && (ascii_lettre_depart <= ascii_lettre_h) && (strDepart[1] >= 1) && (strDepart[1] <= 8)) {

            console.log('lettre saisie correct');
        } else {
            console.log('lettre saisie incorrect');
            return;
        }
    }

    if (strDestination.length !== 2) {
        console.log(" Utilise seulement les coordonées des cases !");
        return;

    } else {


        ascii_lettre_destination = strDestination.charCodeAt(0);
        console.log("le caractere ascii pour la lettre de depart" + ascii_lettre_depart);
        var lettre_a = 'ah';
        ascii_lettre_a = lettre_a.charCodeAt(0);
        ascii_lettre_h = lettre_a.charCodeAt(1);
        console.log(lettre_a);



        console.log(ascii_lettre_destination);
        if ((ascii_lettre_destination >= ascii_lettre_a) && (ascii_lettre_destination <= ascii_lettre_h)

            && (strDestination[1] >= 1) && (strDestination[1] <= 8)) {

            console.log('lettre saisie correct');
        } else {
            console.log('lettre saisie incorrect');
            return;
        }

    }

    // on décide d'afficher seulement les deux caractère 
    console.log("j'affiche le premier caractère pour la case départ");
    console.log(strDepart[0]);
    console.log("j'affiche le premier caractère pour la destination");
    console.log(strDestination[0]);

    console.log("j'affiche le deuxième caractère pour la case départ");
    console.log(strDepart[1]);
    console.log("j'affiche le deuxième caractère pour la case destination");
    console.log(strDestination[1]);

    if (strDepart.length !== 2) {
        console.log("Il faut que tu ne mette que les coordonées de la case de départ et d'arriver, pour que cela fonctionne !");
        return;
    }


    //On récupère les case de départ et de destination
    let caseDepart = document.getElementById(strDepart);
    console.log(caseDepart);
    let caseDestination = document.getElementById(strDestination);
    console.log(caseDestination);
    //On déplace les textes des cases, on effectue le mouvement demandé
    caseDestination.innerText = caseDepart.innerText;
    caseDepart.innerText = "";
    //On supprime les textes dans les champs de départ et de destination
    txtDepart.innerText = "";
    txtDestination.innerText = "";


    quandOnclicSurDeplacer(evt);

}

// detecter un clic sur une case 
let monCaseID = document.getElementById("b6");
monCaseID.addEventListener("click", quandOnClicsurUneCase);

let dire = " je suis cette case ";

function quandOnClicsurUneCase(caseID) {
    // on affiche le paramaètre de la fonction et le nom de la fonction.
    console.log("quandOnClicsurUneCase");
    console.log("case id : " + caseID);
    console.log(caseID);
    console.log(this);
}
// on créer deux boucle, lorsque l'on clique sur n'importe quel case cela affiche un message "je suis" + l'id de la case.
//=======================================================================================================================
for (let il = 0; il < indexJeu2Echec.length; il++) {
    console.log(" numéro de la ligne : " + il);

    for (let ic = 0; ic < indexJeu2Echec[il].length; ic++) {
        console.log(indexJeu2Echec[il][ic]);
        let monCaseID = document.getElementById(indexJeu2Echec[il][ic]);
        monCaseID.addEventListener("click", quandOnClicsurUneCase);
    }
}
//=======================================================================================================================
console.log("fin echec.js");