// let welcome = "Welcome"
// showMessage(welcome);

// function logMessage() {
//   console.log("Here is the message")
// }

// logMessage()
// logMessage()

// let myFunction = function (message, fName) {
//   console.log(message)
//   console.log(fName)
// }

// myFunction("Hello", "Mohammad");

// let key = 42

// function getSecretCode(value) {

//   let keyGenerator = function() {
//     let key = 12;
//     console.log("in keyGenerator: ", key);
//     return key;
//   }
//   let code = value * keyGenerator();
//   console.log("in getSecretCode: ", key);
//   return code;
// }

// let secretCode = getSecretCode(2);
// showMessage(secretCode);

// changePercentoff(30);

// let mySymbol = Symbol();

// let person = {
//   name: "John",
//   age: 32,
//   partTime: false,
//   [mySymbol]: "secretInformation",
//   showInfo: function(realAge) {
//     showMessage(`${this.name} is ${realAge}`);
//   }
// };

// person.age = 33;
// person["age"] = 34;
// showMessage(person.age)
// showMessage(typeof person.showInfo)

// function increementAge(p) {
//   p.age++;
// }
// increementAge(person);
// showMessage(person.age);

// let s = "Hello"; 
// showMessage(s.charAt(1));

// const header = document.getElementById("message");
// header.style.fontWeight = "800";

const button = document.getElementById("see-review");

button.addEventListener("click", function(){
  const review = document.getElementById("review");
  if(review.classList.contains("d-none")) {
    review.classList.remove("d-none");
    button.textContent = "Close REVIEW";
  } else {
    review.classList.add("d-none");
    button.textContent = "SEE REVIEW";
  }
  // console.log("click");
});
