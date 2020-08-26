/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

var i = 1;

while (i <= 100) {
  var contenuto = document.getElementById("lista").innerHTML;
  var sostituto = i;
  if ((i % 3 == 0) && (i % 5 == 0)) {
    sostituto = "FizzBuzz";
  } else if (i % 5 == 0) {
    sostituto = "Buzz";
  } else if (i % 3 == 0) {
    sostituto = "Fizz"
  }
  document.getElementById("lista").innerHTML = contenuto + "<li>" + sostituto + "</li>";
  i++;
}
