var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            oczy: "niebieskie",
            zainteresowania: [
                { nazwa: "podroze" },
                { nazwa: "gotowanie" }
            ]
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]

        }
    ]
}

//console.log (jsonOsoby.osoby[1].zainteresowania);
//console.log (jsonOsoby.osoby[2].oczy);

jsonOsoby.osoby.forEach(function(e) {
    console.log (e.imie);
});
jsonOsoby.osoby.forEach(function(e) {
    console.log (e.wzrost);
});
jsonOsoby.osoby.forEach(function(e) {
    console.log (e.zainteresowania);
});