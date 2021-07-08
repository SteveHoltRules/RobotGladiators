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

var enemyNames = ["Roboto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames[0]);

console.log(enemyNames.length);

for (var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log("Loop " + (i + 1));
  console.log(enemyNames[i] + " is at " + i + " index");
}

var round = 1

var fight = function (enemyName) {
  window.alert("Welcome to Robot Gladiators " + playerName);
  var enemyHealth = 50;
  var enemyAttack = 12;
  console.log("Today's battle will be between " + playerName + " and " + enemyNames[i] + ".")
  //Ask to skip
  var promptFight = window.confirm("Would you like to FIGHT (ok) or SKIP this battle (cancel)?")
  //Confirm Skip
  if (promptFight === false) {
    playerMoney = - 2;
    console.log(playerMoney);
    return;
  }
  else {
    console.log(promptFight);
  }
  console.log(enemyNames[i] + " Health");
  console.log(enemyHealth);
  console.log(playerName + " Health");
  console.log(playerHealth)
  window.alert("Let the Fight Begin!");
  onemore = true;
  //My loop is not re-evaluated with every pass. Why is that?
  while (onemore === true && playerHealth > 0 && enemyHealth > 0) {
    //Attack Strength
    var playerAttackStrength = getRandomInt(playerAttack - 7, playerAttack);
    console.log(playerAttackStrength);

    //Attack Strength
    var enemyAttackStrength = getRandomInt(enemyAttack - 9, enemyAttack);
    console.log(enemyAttackStrength);

    //Enemy Attacked by player
    console.log("Round " + round);
    // enemyHealth = enemyHealth - playerAttackStrength;

    window.alert("The " + enemyNames[i] + " has " + enemyHealth + " health remaining. Your attack had a strength of " + playerAttackStrength + ".");
    console.log(enemyNames[i] + " after Attack");
    console.log(enemyHealth);
    console.log("Attack Strength");
    console.log(playerAttackStrength);

    //Player attacked by enemy
    playerHealth = playerHealth - enemyAttackStrength;

    window.alert(playerName + " has " + playerHealth + " health remaining. The enemy's attack had a strength of " + enemyAttackStrength + ".");
    console.log(playerName + " Health after Attack");
    console.log(playerHealth);
    console.log(enemyNames[i] + " Attack Strength");
    console.log(enemyAttackStrength);
    if (playerHealth <= 0) {
      console.log(playerName + " died.");
    }
    else {
      console.log(playerName + " survived the robot battle!");
    }
    //The while loop is working, but it isn't getting down to the code where the died statement lives. How do I ensure this happens? Call it outside the loop?
    if (enemyHealth <= 0) {
      console.log(enemyNames[i] + " has died!");
      // if EHealth <= 0 then send this message. After the message, then display enemyHealth
    }
    else {
      console.log(enemyNames[i] + " still has " + enemyHealth + " health left.");
    }
    round++;
    //Check player health

    var onemore = window.confirm("Another round?");
    console.log(onemore);
    // return (enemyHealth && playerHealth);
  }
}

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
};