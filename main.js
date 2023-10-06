//Scrivi un programma che stampi in console i numeri da 1 a 100, 
//ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
  let element = document.createElement("div");
element.className ="item";  
 
    if (i % 3 == 0 && i % 5 == 0) {
        element.textContent = "FizzBuzz";
        element.classList.add("fizzbuzz");
        //console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        element.textContent = "Fizz";
        element.classList.add("fizz");
        //console.log("Fizz");
    } else if (i % 5 == 0) {
        element.textContent = "Buzz";
        element.classList.add("buzz");
        //console.log("Buzz");
    } else {
        element.textContent = i;
    }

    container.appendChild(element);
}