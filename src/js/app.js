const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/the_game/master/player.json';
let obj = [];
let playerArray = [];

fetch(firstPlayer)
    .then(function (response) {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error ('Błąd połączenia');
        }
})
    .then(function (data) {
        obj = data;
        playerArray = obj.map(el => Object.values(el));
        let noPlayer = document.querySelector('.game-ordinar-numbers');
        let namePlayer = document.querySelector('.game-name');

        noPlayer.value = playerArray[0][0];
        namePlayer.value = playerArray[0][1];
    })
    .catch(function (error) {
        console.log("Błąd: ", error);
    }); //fetch json first player

let list = document.querySelector('.game__section');

function newPlayer(){
    let noNewPlayer = document.createElement('input');
    noNewPlayer.classList.add('game-ordinar-numbers');
    // noNewPlayer.innerHTML =
}

let btnNewPlayer = document.querySelector('.btn-add');
btnNewPlayer.addEventListener('click', newPlayer);
