'use strict';

class Osoba {
    constructor (imie, nazwisko, plec) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.plec = plec;
    }
wyswietlDetale () {
    console.log ("Imie: " + this.imie + ", Nazwisko " + 
                this.nazwisko + ", Płeć: " + this.plec );
    
}
}

var ewa = new Osoba ("Ewa", "Rogulska", "Kobieta");
ewa.wyswietlDetale ();

var damian = new Osoba ("Damian", "Pawelec", "Mężczyzna");
damian.wyswietlDetale ();

console.log (ewa);

var tablica = [ewa, damian];





/*
var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function () {console.log (this.imie)}
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function () {console.log(this.imie)}
}

kaja.przedstawOsobe ();

krystian.przedstawOsobe ();

console.log (kaja.wzrost);
*/


