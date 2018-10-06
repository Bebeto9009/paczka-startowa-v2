const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/the_game/master/player.json';
let obj = [];
let playerArray = [];
let list = document.querySelector('.game__section');
let btnNewPlayer = document.querySelector('.btn-add');
let noPlayer = document.querySelector('.game-ordinar-numbers');
let namePlayer = document.querySelector('.game-name');
let gameRow = document.querySelector('.game__row');


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

        noPlayer.value = playerArray[0][0];
        namePlayer.value = playerArray[0][1];
        console.log(playerArray.indexOf('namePlayer.value'))
    })
    .catch(function (error) {
        console.log("Błąd: ", error);
    }); //fetch json first player

let count=1;
function newPlayer(){
    count++;

    let playersRow = document.createElement('div');
    playersRow.classList.add('game__row');

    let noNewPlayer = document.createElement('input');
    noNewPlayer.classList.add('game-ordinar-numbers');
    noNewPlayer.value = count;

    let namePlayer = document.createElement('input');
    namePlayer.classList.add('gamen-name');

    let editPlayer = document.createElement('i');
    editPlayer.classList.add('fas', 'fa-edit');

    let removePlayer = document.createElement('i');
    removePlayer.classList.add('fas', 'fa-trash-alt');

    let acceptNewPlayer = document.createElement('i');
    acceptNewPlayer.classList.add('fas', 'fa-check');

    list.appendChild(playersRow);
    playersRow.appendChild(noNewPlayer);
    playersRow.appendChild(namePlayer);
    playersRow.appendChild(editPlayer);
    playersRow.appendChild(removePlayer);
    playersRow.appendChild(acceptNewPlayer);
} // add new inputs for new player

btnNewPlayer.addEventListener('click', function(event){
    event.preventDefault();
    newPlayer();

}); // create new player on button

function deletePlayer(){
    console.log('test');
    gameRow.parentNode.removeChild(gameRow);
}  // delete player function

let deleteIcon = document.querySelector('.fa-trash-alt');
deleteIcon.addEventListener('click', deletePlayer);
// button to function delete player


let acceptPlayer = document.querySelector('.fa-check');
acceptPlayer.addEventListener('click', addPlayer);
let counter = [];

function addPlayer(){
    counter.push(namePlayer.value)
    gameRow.id = counter.indexOf(namePlayer.value);
}

