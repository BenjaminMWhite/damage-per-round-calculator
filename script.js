

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var d20 = parseInt(
    prompt("type 1 for disadanvtage, 2 for neutral rolls, 3 for advantage, 4 for super advantage"),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(d20)) {
    alert('Password length must be provided as a number');
    return null;
  }

  


  // Variable to store boolean regarding the inclusion of special characters
  var attacks = parseInt(
    prompt("how many attacks do you have")
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(attacks)) {
    alert('attacks must be an integer');
    return null;
  }
  var d4 = parseInt(
    prompt("how many d4s do you have")
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(d4)) {
    alert('attacks must be an integer');
    return null;
  }
  var d6 = parseInt(
    prompt("how many d6 do you have")
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(d6)) {
    alert('attacks must be an integer');
    return null;
  }
  var d8 = parseInt(
    prompt("how many d8s does your attack have")
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(d8)) {
    alert('attacks must be an integer');
    return null;
  }
  var d10 = parseInt(
    prompt("how many d10s does your have")
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(d10)) {
    alert('attacks must be an integer');
    return null;
  }
  var d12 = parseInt(
    prompt("how many d12 do you have"),
  
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(d12)) {
    alert('attacks must be an integer');
    return null;
  }
  var static = parseInt(
    prompt("static damage modifier"),
    
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(static)) {
    alert('attacks must be an integer');
    return null;
  }
  var thac0 = parseInt(
    prompt("what do you need to hit?"),
    
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(thac0)) {
    alert('attacks must be an integer');
    return null;
  }
console.log(thac0)
console.log(d4)
console.log ("d4s")
console.log(d6)
console.log ("d6s")
console.log(d8)
console.log ("d8s")
console.log(d10)
console.log ("d10s")
console.log(d12)
console.log ("d12s")
console.log(attacks)
console.log ("attacks")

var damage
  if (d20==1)
  {damage = ((thac0*thac0)/400) *attacks*(d4*2.5+d6*3.5+d8*4.5+d10*5.5+d12*6.5+static-static/400)
  alert(damage) 
  }
  else if (d20 == 2)
  {damage =((21-thac0)/20 *attacks*(d4*2.5+d6*3.5+d8*4.5+d10*5.5+d12*6.5+static-static/20))
  alert(damage) 
  }
  else if (d20 == 3)
  {damage= ((400-thac0*thac0)/400)*attacks*(d4*2.5+d6*3.5+d8*4.5+d10*5.5+d12*6.5+static-static/400)
  console.log(damage)
  alert(damage) 
  }
  else if(d20 == 4)
  { damage=(((thac0*thac0*thac0)/8000) *attacks*(d4*2.5+d6*3.5+d8*4.5+d10*5.5+d12*6.5+static-static/8000))
  alert(damage) 
  }
}

function generatePassword() {
   getPasswordOptions();
  
    ;
  }


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
