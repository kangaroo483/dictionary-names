var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
//get what the user input
//in.html, the input box has id=pw
var input = document.getElementById('pw').value;

//loop through alllllll the words in the word list
//earlier, wordlist was set to contain a list of English words

//WAIT WAIT JUST TRY THIS:
//TELL US THE 4th owrd in the wordsList
for (var index = 0; index < wordsList.length; index ++){
  console.log(wordsList[index])
  //warn them if their password matches a word from the list
  if (wordsList[index] == input) {
    alert("That is a weak password! It's an English word.");
    return; //stop this function as soon as I find this match
    }
  }
  //after the for loop finishes, if it wasn't an English word,
  //tell them their password is safe
  alert("Your password is just fine!");

}
