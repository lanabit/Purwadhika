class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power
  }

  damage(power) {
    this.health = this.health - power;
  }

  showStatus() {
    return `${this.name} = Health: ${this.health}, Power: ${this.power}`
  }
}

class shootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  randomize() {
    return (Math.floor(Math.random() * 10)) % 2 === 0
  }

  getRandomItem() {
    const item1 = {health: 0, power: 10};
    const item2 = {health: 10, power: 0};

    return this.randomize() ? item1 : item2;
  }

  start(){
    if(true) {
      let playerHit = this.player2
      let played = 'player2';

      while(playerHit.health > 0){
        console.log(`${played}`)
        const {health, power} = this.getRandomItem();
        
        //get random item and update stats
        if(health) playerHit.health += health;
        if(power) playerHit.power += power;

        //hit
        if(played == 'player2') {
          this.player1.health -= playerHit.power;
          playerHit = this.player1;
          played = 'player1'
        }else{
          this.player2.health -= playerHit.power;
          playerHit = this.player2;
          played = 'player2'
        }

        console.log(`${health}, ${power}`);
        console.log(player1);
        console.log(player2);
      }

      if(this.player1.health > this.player2.health) {
        console.log(`${this.player1.name} menang`)
      }else {
        console.log(`${this.player2.name} menang`)
      }
    }
  }
}

let player1 = new Player('Megawati')
let player2 = new Player('Jokowi')
const game = new shootingGame(player1,player2)
game.start()