// Chapter 21 - 25
// Chapter 21 (Changing Case)
// Q1
// var allLower = userInput.toLowerCase();

// // Q2
// x = x.toLowerCase();

// // Q3
// y = y.toUpperCase();

//Q4
var originalString = "Your Original String HERE";
var lowerCaseString = originalString.toLowerCase();

// Q5
var myArray = ["Hello", "World", "JavaScript"];
var lowerCaseElement = myArray[1].toLowerCase(); 

// Q6
var myString = "hello world";
alert(myString.toUpperCase())

// Q7
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
alert(cityName)


// Chapter 22 - 25 (Strings)
// Q1
var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);

// Q2
var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3); // This slices "ap" from "captain"
var numberOfCharacters = slicedPart.length;

// Q3
var animal = "elephant";
var seg = animal.slice(2, 6);

// Q4
var firstVariable = "This is a test string.";
var secondVariable = firstVariable.length;

// Q5
var originalString = "This is an example string.";
var lengthOfString = originalString.length;
var middleSegment = originalString.slice(1, lengthOfString - 3);

// Q6
var text = "To be or not to be.";
var indx = text.indexOf("be");
//indx value is 3

// Q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
//indx value is 16

// Q8
var text = "Let's go to the movies. Ready to go?";
var indx = text.lastIndexOf("go");
console.log(indx)
//indx value is 33

// Q9
// if (indexNum !== -1) {
    
// }

// Q10
var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);

// Q11
var text = "This is a long enough string.";
var cha = text.charAt(9);

// Q12
var str = "Example string";
var x = str.charAt(str.length - 1);


// Q13
var input = "This is a test string.";
var cha = input.charAt(4);

// Q1
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

// Q2
 var userPhoneModel = prompt("Enter your favorite phone name","Samsung Galaxy S6 Edge Plus")
 var lengthOfInput =  userPhoneModel.length;
 document.write( "my favorite phone is: "+ userPhoneModel+ "<br>length of string: " + lengthOfInput)

// Q3
var word = "Pakistani";
var indexOfN = word.indexOf("n");        
document.write("<br><br>String: " + word + "<br>Index of'n': " + indexOfN);

// Q4
var word1 = "hello World";
var indexOfN1 = word1.lastIndexOf("l");        
document.write("<br><br>String: " + word1 + "<br>Last index of'l': " + indexOfN1);

// Q5
var word = "Pakistani";
var charAt3 = word.charAt(3);
document.write("<br><br>String: " + word + "<br>Character at index 3: " + charAt3);

// Q6
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "!");

// Q7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("<br><br>city: "+city+"<br>After replacement: " + newCity);

// Q8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("<br><br>After replacement: " + newMessage);

// Q9
var stringValue = "472";
var numberValue = 472
document.write("<br><br>Value: " + stringValue + "<br> Type: " + typeof stringValue + "<br>");
document.write("Value: " + numberValue + "<br> Type: " + typeof numberValue);

// Q10
var userInput = prompt("Please enter some text:","peanuts");
var upperCaseInput = userInput.toUpperCase();
document.write("<br><br>user input: "+userInput+"<br>In uppercase: " + upperCaseInput);


// Q12
var num = 35.36;
var numStr = num.toString();
var result = numStr.replace('.', '');
document.write("<br><br>Number: "+numStr+"<br>Result: " + result);



// Q13
var isValid = false;
while (!isValid) {
    var username = prompt("Enter your username:");
    // Check for the presence of special characters
    if (username.indexOf('!') !== -1 || username.indexOf(',') !== -1 || username.indexOf('.') !== -1 || username.indexOf('@') !== -1) {
        alert("Please enter a valid username without special symbols [@ . , !].");
    } else {
        isValid = true;
        alert("Username accepted: " + username);
    }
}


// Q14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/ma'am?");
var itemFound = false;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput.toLowerCase()) {
        alert(userInput + " is available at index " + i + " in our bakery");
        itemFound = true;
        break;
    }
}

if (itemFound) {
    alert("We are sorry. " + userInput + " is not available in our bakery");
}
document.write("<br><br>")


// Q16
var university = "University of Karachi";
var universityArray = university.split('');
universityArray.forEach(function(character) {
document.write(character + "<br>");
}); 

document.write("<br><br>")

// Q17
var userInput = prompt("Please enter a string:")
document.write("User input: " + userInput)
if(userInput !== null && userInput.length > 0) {
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("Last character of input: " + lastCharacter);
} else {
    document.write("No input provided!");
}



// Q18
var sentence = "The quick brown fox jumps over the lazy dog";
var lowerCaseSentence = sentence.toLowerCase();
var words = lowerCaseSentence.split(" ");
var count = 0;
for (var i = 0; i < words.length; i++) {
if (words[i] === "the") {
         count++;
}
}

document.write("Text: "+sentence)
document.write( "There are "+ count+" occurrences of (s) of Word 'the': ");

