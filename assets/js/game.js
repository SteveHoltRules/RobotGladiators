//Gate States
//"Win" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"Lose" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 50;
var playerAttack = 15;
var playerMoney = 10;

console.log(playerName);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Console Log

var round = 1

var fight = function () {
  window.alert("Welcome to Robot Gladiators " + playerName);
  console.log("Today's battle will be between "+ playerName + " and " + enemyName + ".")
  //Ask to skip
  var promptFight = window.confirm("Would you like to FIGHT (ok) or SKIP this battle (cancel)?")
  //Confirm Skip
  if (promptFight === false){
    playerMoney =- 2;
    console.log(playerMoney);
    return;
  }
  else{
    console.log(promptFight);
  }
  console.log(enemyName + " Health");
  console.log(enemyHealth);
  console.log(playerName + " Health");
  console.log(playerHealth)
  window.alert("Let the Fight Begin!");
  onemore = true;
//My loop is not re-evaluated with every pass. Why is that?
  while (onemore === true && (playerHealth>0 && enemyHealth>0)){
    //Attack Strength
    var playerAttackStrength = getRandomInt(playerAttack - 7, playerAttack);
    console.log(playerAttackStrength);

    //Attack Strength
    var enemyAttackStrength = getRandomInt(enemyAttack - 9, enemyAttack);
    console.log(enemyAttackStrength);

    //Enemy Attacked by player
    console.log("Round " + round);
    enemyHealth = enemyHealth - playerAttackStrength;

    window.alert("The " + enemyName + " has " + enemyHealth + " health remaining. Your attack had a strength of " + playerAttackStrength + ".");
    console.log("Enemy Health after Attack");
    console.log(enemyHealth);
    console.log("Attack Strength");
    console.log(playerAttackStrength);
    if (enemyHealth <= 0) {
      console.log(enemyName + " has died!");
      break;
    }
    else {
      console.log(enemyName + " still has " + enemyHealth + " health left.");
    }
    //Player attacked by enemy
    playerHealth = playerHealth - enemyAttackStrength;

    window.alert(playerName + " has " + playerHealth + " health remaining. The enemy's attack had a strength of " + enemyAttackStrength + ".");
    console.log(playerName + " Health after Attack");
    console.log(playerHealth);
    console.log(enemyName + " Attack Strength");
    console.log(enemyAttackStrength);
    if (playerHealth === 0) {
      console.log(playerName + " died.");
      break;
    }
    else {
      console.log(playerName + " survived the robot battle!");
    }
    round++;
    //Check player health
    var onemore = window.confirm("Another round?");
    console.log(onemore);
  }
}

fight();