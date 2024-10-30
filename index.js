const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacter = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charSets =[]
let number = 15;


var slider = document.getElementById("myRange");
var output = document.getElementById("number-of-char");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  number= this.value
  }
  
function getPassword(){
    
     const isUpper = document.getElementById("uc").checked;
  const isNO = document.getElementById("no").checked;
  const isSpecial = document.getElementById("sc").checked;

  const charSets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  if (isUpper) charSets.push(uppercase);
  if (isNO) charSets.push(numbers);
  if (isSpecial) charSets.push(specialCharacter);

  const allChars = [].concat(...charSets);
  
  let password = "";
     for(i=0;i<number;i++)
    {
        password += allChars[Math.floor(Math.random()*allChars.length)]
        
    }
   return password
    charSets.length = 0
}  
  
  
function generatePassword(){
 
    passwordOne = getPassword();
    passwordTwo = getPassword();
    document.getElementById("password-one").textContent = passwordOne
   document.getElementById("password-two").textContent = passwordTwo
    }




function copyPassword1(){
 
  
  
  
    var copyText = document.getElementById("password-one").textContent;


  navigator.clipboard.writeText(copyText);
  console.log(copyText)

}