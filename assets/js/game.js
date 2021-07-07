function fight() {
  window.alert("The fight has begun!");
}



// fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName);


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  window.alert("Welcome to Robot Gladiators " + playerName);
}

fight();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var playerAttackStrength = getRandomInt(playerAttack - 3, playerAttack);
console.log(playerAttackStrength);

console.log("Enemy Health");
console.log(enemyHealth);
//Attack the enemy robot
enemyHealth = enemyHealth - playerAttackStrength;

//Enemy attack player
var enemyAttackStrength = getRandomInt(enemyAttack - 3, enemyAttack);
console.log(enemyAttackStrength);
//Player Attacked
playerHealth = playerHealth - enemyAttackStrength;

//Console Log
window.alert("The " + enemyName + " has " + enemyHealth + " health remaining. Your attack had a strength of " + playerAttackStrength + ".");
console.log("Enemy Health after Attack");
console.log(enemyHealth);
console.log("Attack Strength");
console.log(playerAttackStrength);

window.alert(playerName + " has " + playerHealth + " health remaining. The enemy's attack had a strength of " + enemyAttackStrength + ".");
console.log("Player Health after Attack");
console.log(playerHealth);
console.log("Enemy Attach Strength");
console.log(enemyAttackStrength);

//check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
  console.log("Your player is still alive!");
}

//Check player health
if (playerHealth === 0) {
  console.log("Your robot died.");
}
else {
  console.log( playerName+" survived the robot battle!");
}

if (enemyHealth <= 0) {
  console.log(enemyName + " has died!");
}
else {
  console.log(enemyName + " still has " + enemyHealth + " health left.")
}