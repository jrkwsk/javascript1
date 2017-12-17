'use strict';

//function wyswietlWKonsoliImie(imieWyswietl) {
//    console.log(imieWyswietl)
//}
//wyswietlWKonsoliImie("Monia");
//wyswietlWKonsoliImie("Ula");
//wyswietlWKonsoliImie("Kuba");
//wyswietlWKonsoliImie("SSS");


function obliczOdsetki (kapital, procent) {
var kapitalzOdsetkami = kapital + kapital * procent; 
    return kapitalzOdsetkami; 
}

var inwestycjaKuby = obliczOdsetki (1000, 0.05);

console.log (inwestycjaKuby);


