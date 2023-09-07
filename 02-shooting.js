/*
● Specifications :
    ○ Create a shooting game between two player
    ○ Each player has three properties : name, health and power
    ○ Each player will take turns to shooting
    ○ Before shooting, players get a chance to get random items (health +10 or power +10)
    ○ The game will continue until one of the players has health < 0
● Requirements : 
    ○ Create ShootingGame & Player class
    ○ ShootingGame class : 
        ■ constructor(player1, player2) → player objects as a parameter
        ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
        ■ start() → start shooting games
○ Player class :
    ■ Property → name, health (default 100), power (default 10)
    ■ hit(power) → subtract player health
    ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
    ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
○ ShootingGame start() function flow :
    ■ In every turn :
        ● Show each player status before shooting
        ● Get random item for each player before shooting
        ● Show each player status after shooting
    ■ Show winner name
*/

class Player {
    constructor(name, health = 100, power = 100) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) { // subtract player health
        this.health -= power
    }

    useItem(item) {
        this.health += item.health;
    }

    showStatus() {

    }
}

class ShootingGame {
    constructor(player1, player2) {

    }

    getRandomItem() {

    }

    start() {  // start shooting game

    }
}



