var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

function listAllColors(){
    for(var i = 0; i < colors.length; i=i+2){
        console.log(colors[i]);
    }
};

listAllColors();

/*
Task: 
    Build a second function called listSizes which loops through 
    the new array ‘sizes’ and logs out only the sizes which are larger 
    than 6. 
    Hint: you can use an if/else inside a for loop to to do this.
*/

var sizes = [4, 5, 6, 7, 8, 9, 10]

function listSizes(array){
    for(i=0; i<array.length; i++){
        if(array[i]>6){
            console.log(array[i]);}
            else {
                console.log("the size is not available")
            }
        }
    };

    listSizes(sizes);

    /*
Task: 
    1. Create a function called letterFinder which takes two 
       parameters: 'word' and 'letterToMatch'.
    2. Inside letterFinder, create a for loop. The for loop
       should run until its counter (i) is equal to the length 
       of 'word'.
    3. Add an if statement inside the for loop and have it check 
       if the letter at word[i] is equal to 'letterToMatch'. If it is, log out 
       "Found the letter x at index y". (Replace x and y with the 
       letter and position!)
    4. Add an else statement that logs out "No match found at index y". 
    
    Expected output when letterFinder is called with 'test' and 't':
    
    Found letter t at index 0
    ---No match found at index 1
    ---No match found at index 2
    Found letter t at index 3
*/
function letterFinder(word, letterToMatch){
    for(i=0; i<word.length; i++){
        if(word[i]==letterToMatch){
            console.log("Found the letter "+letterToMatch+" at index "+i)
        }else{
            console.log("No match found at index "+i)
        }
    }
};

letterFinder('Giraffe', 'f');

// object creation
var villain = {}

villain.name = "Gregory Hirsch";
villain.age = 30;
villain.weapon = "Samsung phone";
villain.aim = "not to be fired by all means";
villain.health = 1000;

console.log(villain.name, villain.health)


/*
Task: 
    I have given you an empty object called villain. 
    1. Use dot notation to add 'name', 'age', 'weapon’, ‘aim' and ‘health’
       keys to the object with values from your imagination.
    2. Log out the name and health of your villain.
*/

var castle = {}

castle['price'] = 2000000
castle['color'] = 'pink'
castle['number of rooms'] = 20


function updateObject(object, key, value){


    /*
    Task: 
    As the function's name suggests, we want to make a change to our 
    object. I have added a third parameter called value.
    
    1. Write code inside the function so that when we call the 
       function a new value is assigned to the specified key on 
       the object.
       
    2. Call that function (I have added the value 'Lime Green'). 
       In the console, you should see the updated color for the 
       castle.
       
       Experiment with different keys and values, for example:
       updateObject(castle, 'price', 4000000).
*/

    object[key] = value;
    
    // Log the updated object to the console
    console.log(object);
}

updateObject(castle, 'color', 'Lime Green');
updateObject(castle, 'price', 0);

/*
Task: 
    1. Create an empty array and store it in a variable named 
       presentList.
    2. Push 5 items that you would like to receive as a gift.
    3. Use the pop method to delete all of the items 
       (because you received all of the gifts!!)
    
    Extra: you could use a for loop to pop off all of the items. 
    This might be a bit tricky
*/

var presentList = []

presentList.push("dog");
presentList.push("cat");
presentList.push("Samsung phone");
presentList.push("TV");
presentList.push("notebook");

console.log(presentList);
var length = presentList.length

function deletePresents(presentList){
    var length = presentList.length;

    for(let i = 0; i < length; i++){
        presentList.pop();
    };
};
deletePresents(presentList);
console.log(presentList);

// Math object

/*var randomNumber = Math.random()*10;
console.log(randomNumber);

var roundedNumber = Math.ceil(0.01);

console.log(roundedNumber);*/

function createRandomInteger(){
    var randomNumber = Math.random()*10;
    randomNumber = Math.ceil(randomNumber);
    console.log(randomNumber);
};
createRandomInteger();

// Methods available on strings

var greet = "Hello, ";
var place = "World";
greet.length; 
greet.charAt(0); // 'H'
"Wo".concat("rl").concat("d"); // 'World'
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".lastIndexOf('-'); // 6
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

/*
Task:
You are preparing costumes for a theatre, and JavaScript is going
to help!

    1. Create an empty array literal and store it in a variable 
       named 'costumeItems'.
    2. Use the push method to add 3 items of clothing.
    3. Use the pop method to delete one item.
    4. Log out 'costumeItems' each time to check your results .
    5. Log out just the 2nd item in the array.
*/

var costumeItems = [];
costumeItems.push('dress','coat','hat');
console.log(costumeItems);
costumeItems.pop();
console.log(costumeItems);
console.log(costumeItems[1]);

/*
Task:
A car rental company has asked you to help them organise 
their fleet of vehicles.

1. Create a new object literal and assign it to the 
   variable 'hireCar'.
   
2. Using the dot notation, assign a 'color' property to 
   the hireCar object. Its value should be a string 
   holding a color of your choice.
   
3. Using the dot notation, assign an 'isConvertible' property 
   to the object and give it a boolean value (true/false) 
   of your choice.
   
4. Use the brackets notation to add a 'number of doors' property.

5. Log out the entire object.
*/

var hireCar = {};
hireCar.color = "black";
hireCar.isConvertible = true;
hireCar["number of doors"] = 4;
console.log(hireCar);

// methods on objects

var restaraunt = {};

restaraunt.name = "Seb's";
restaraunt.price = 2000000;
restaraunt.isFull = false;

restaraunt.summariseRestaraunt = function(){
    console.log("The Seb's is a beautiful restaraunt in Luxembourg.")
}


restaraunt.summariseRestaraunt();

restaraunt.restarauntClosed = function(){
    console.log("Sorry! Restaraunt is closed at the moment.")
}

restaraunt.restarauntClosed();

// using typeOf operator - allows to identify type of data inside its parameter

var test = typeof(restaraunt.summariseRestaraunt);
console.log(test);
var test = typeof(restaraunt);
console.log(test)