while (onemore === true && playerHealth > 0 && enemyHealth > 0) {
  //Attack Strength
  var playerAttackStrength = getRandomInt(playerAttack - 7, playerAttack);
  console.log(playerAttackStrength);

  //Attack Strength
  var enemyAttackStrength = getRandomInt(enemyAttack - 9, enemyAttack);
  console.log(enemyAttackStrength);

  //Enemy Attacked by player
  console.log("Round " + round);
  enemyHealth = enemyHealth - playerAttackStrength;

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
  //The while loop is working, but it isn't getting down to the code where the died statement lives. How do I ensure this happens? Call it outside the loop? Answer put it a the end of the while
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