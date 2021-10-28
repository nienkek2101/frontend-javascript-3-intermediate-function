// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


// Dit was mijn poging!!
// function getEmailDomain(email) {
//     // geeft string na @ t/m laatste karakter
//     return getEmailDomain.substring(getEmailDomain.lastIndexOf("@"), getEmailDomain.length)
// }
//
// const domainName = getEmailDomain("nienke.kapers@gmail.com")
// console.log(domainName);

function getEmailDomain(emailadress) {
    // bepaal op welk indexnummer het apenstaartje staat
    const indexOfApenstaartje = emailadress.indexOf("@");
    // knip alles na het apenstaartje van het emailadres af
    const domain = emailadress.substring(indexOfApenstaartje + 1);
    return domain;
}

const domainOne = getEmailDomain("nienke.kapers@gmail.com");
const domainTwo = getEmailDomain("n.eeken@novi-education.nl");
const domainThree = getEmailDomain("nienke@kapers.eu");

console.log(domainOne);
console.log(domainTwo);
console.log(domainThree);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emailadress) {
// als e-mail na @ novi-education.nl bevat --> log dan Student
// als e-mail na @ novi.nl bevat --> log dan Medewerker
// als e-mail geen van beide bevat --> log dan Extern
    const indexOfApenstaartje = emailadress.indexOf("@");
    const domain = emailadress.substring(indexOfApenstaartje +1);
    if (domain.includes("novi.nl")) {
        console.log("Medewerker");
    } else if (domain.includes("novi-education.nl")) {
        console.log("Student");
    } else {
        console.log("Extern");
    }
}

const emailOne = typeOfEmail("n.eeken@novi-education.nl");
const emailTwo = typeOfEmail("t.meilink@novi.nl");
const emailThree = typeOfEmail("a.wiersma@outlook.com");
const emailFour = typeOfEmail("novi.nlaapjesk@outlook.com")


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(emailadress) {
    // bevatApenstaartje moet true zijn
    // bevatKomma moet false zijn
    // laatstePunt moet false zijn

    const bevatApenstaartje = emailadress.includes("@");
    const bevatKomma = emailadress.includes(",");
    const aantalKarakters = emailadress.length;
    const laatstePunt = aantalKarakters.includes(".");

    console.log(aantalKarakters);
    if ((bevatApenstaartje = true) && (bevatKomma = false ) && (laatstePunt = false)) {
        console.log("Dit e-mailadres klopt");
    } else {
        console.log("Dit e-mailadres klopt niet")
    }

    // if (emailadress.includes("@") && emailadress.includes(",") = false) {
    //     console.log("Yes");
    // } else {
    //     console.log("No");
    // }
}



const emailFive = checkEmailValidity("n.eeken@novi-education.nl");
const emailSix = checkEmailValidity("tessameilink@novi.nl");
const emailSeven = checkEmailValidity("n.eekenanovi.nl");
const emailEight = checkEmailValidity("n.eeken@novinl.");
const emailNine = checkEmailValidity("tessmellink@novi,nl");