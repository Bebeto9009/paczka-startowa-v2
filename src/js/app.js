const playerList = 'https://raw.githubusercontent.com/Bebeto9009/the_game/master/player.json';
let playerArr = [];
let obj = [];

fetch(playerList)
    .then(function (res) {
        if (res.ok){
            return res.json();
        } else {
            throw new Error ("Błąd połączenia");
        }
    })
    .then(function (data) {
        obj = data;
        playerArr = obj.map(el => Object.values(el));
        console.log(playerArr[0]);
    })
    .catch(function(error) {
        console.log("Błąd: ", error);
    });

