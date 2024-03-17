// some of my practicing tasks on conditionals
var sunny = false;  
if (sunny){
    console.log("Wear sunglasses")
}  
else {
    console.log("Do not wear sunglasses")
}

var light = "green";
if (light == "green"){
    console.log("you should go")
} else if( light == "red") {
    console.log("you should stop")
} else if(light == "yellow"){
    console.log("slow down!")
} else {
    console.log("you should exercise caution")
}

var dogState = "fed"

switch(dogState){
    case 'fed':
        console.log("Do not feed it");
        break;
    case 'slightly hungry':
        console.log("give it a yummy");
        break;
    case 'hungry':
        console.log("feed it properly");
        break;
    case 'very hungry':
        console.log("run away from a dog");
        break;
    default:
        console.log("an error occured");      
}

var tornadoWarning = false;
var weather = "sunny"; 
var day = 90; 

switch(weather){
    case 'sunny':
    console.log('Wear shorts and a t-shirt.');
    break;
    case 'cold':
    console.log("Wear a coat.");
    break;
    case 'rainy':
    console.log("Wear a rain jacket.")
    break;
    case 'in-between':
    console.log("Wear a sweater.")
    break;
    default:
    console.log("An error occured");
};

if (tornadoWarning){
    console.log("🚨Tornado Warning!🚨")
} else {
    console.log("The weather is normal.")
};

switch (day){
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
    default:
    console.log("maximum number of forecasts has been reached.");
}

/*
Task 1: using if-else statements 

The movie theater has a variable pricing 
system that works as follows:
    
    - If the customer is 65 or older, they get a senior discount and pay $7.
    - If the customer is between the ages of 14 and 24, they get a student discount 
      and pay $6. 
    - If the customer is under the age of 14, they get a child discount and pay $5. 
    - If the customer is an adult between the ages of 25 and 64, they pay a normal 
      price of $10.
    - If the customer is a Movie Club member, they pay $0. 
    
    1. Write a series of if-else statements that check the values of the variables 
       below and console.log the appropriate price. 
    2. Set up the statements so that if an invalid age is provided (such as a string 
       of text characters), the message "Invalid input" is returned in the console. 
    3. Go through each one of the test cases below and check if you get the correct 
       output in the console. 

*/

var customerAge = 66;
var movieClubMember = false;

/* Test cases */
//customerAge= 41; // expected result: $10
//customerAge = 20; // expected result: $6
//customerAge = "x"; // expected result: Invalid input. 
//customerAge = 9; // expected result: $5
//customerAge = 68; // expected result: $7
//movieClubMember = true; // expected result: $0

/* Recap of conditions and results:  
    65+: $7
    14-24: $6
    Under 14: $5
    25-64: $10
    Club member: $0
    Invalid customerAge: "invalid input"
*/


 if(movieClubMember){
    console.log("$0");
 } else if(!movieClubMember, customerAge >= 65){
    console.log("$7")
 } else if (!movieClubMember, customerAge >= 14 && customerAge <= 24){
    console.log("$6")
 } else if(!movieClubMember, customerAge < 14){
    console.log("$5")
 } else if(!movieClubMember, customerAge >= 25 && customerAge <= 64){
    console.log("$10")
 } else {
    console.log('Invalid input')
 }

 var day;

/* Test cases */
//day = "Monday"; //expected result: "Chili Lime Tacos"
//day = "Tuesday"; //expected result: "Cauliflower Pizza"
//day = "Wednesday"; //expected result: "Hawaiian Hot Dogs"
//day = "Thursday"; //expected result: "Grilled Beet Burger"
//day = "Friday"; //expected result: "Sweet Potato Curry Falafel"
//day = "Saturday"; //expected result: "No daily special today."
day = "Sunday"; //expected result: "No daily special today."

switch (day){
    case 'Monday':
        console.log('Chili Lime Tacos');
        break;
    case 'Tuesday':
        console.log('Cauliflower Pizza');
        break;
    case 'Wednesday':
        console.log('Hawaiian Hot Dogs');
        break;
    case 'Thursday':
        console.log('Grilled Beet Burger');
        break;
    case 'Friday':
        console.log('Sweet Potato Curry Falafel');
        break;
    case 'Saturday': 
    case 'Sunday':
        console.log('No daily special today.');
        break;      
    default:
        console.log('An error occured');                                                
}

/* Task 1: Incrementing with a for loop 

Imagine you're programming an educational math app for children. 
For one of the lessons, the app needs to show the children a list 
of all of the numbers from 0 to 100. It then needs to show them 
the message "Count complete!"

    1. Set up a for loop that will console.log all of the numbers 
       from 0 to 100, in ascending order. 
    
    2. Once the sequence of numbers is complete, console.log the 
       message ("Count complete!").
 
*/
 
for(var i=0; i<=100; i++){
    console.log(i)
};
console.log('Count complete!');

// Decrementing for-loop

for (var i=10; i>0; i--){
    console.log(i)
};
console.log('Happy New Year!');

/* Task 3: Incrementing with a while loop

    Imagine you're creating a flight simulator, and you're 
    programming the part that will control the plane's acceleration. 
    Starting at a speed of 200 MPH, the plane accelerates to its 
    maximum speed of 500 MPH. Your task is display the plane's speed 
    as it accelerates. 

    1. Set up a while loop that will console.log all of the numbers 
    from 200 to 500, in ascending order.  
      
    2. Once the sequence of numbers is complete, console.log the message 
    ("Maximum speed reached!").

    The final results should be the same as if you wrote the following: 
    
        console.log(200);
        console.log(201);
        console.log(202);
        ...etc...
        console.log(500);
        console.log("Maximum speed reached!");
*/
 
var speed = 205

while(speed >= 200 && speed<501){
    console.log(speed);
    speed=speed+1;
}
console.log("Maximum speed reached!");

// Decrementing with a while loop

var day = 365

while(day <= 365 && day >= 0){
    console.log(day);
    day--;
}
console.log("The end!");

var currentYear = 1982;

while(currentYear<=2023){
    console.log(currentYear);
    currentYear++;
}
console.log("Welcome to the present! The year is " + currentYear + ".");

// nested loops

/* Challenge

    Imagine you're creating an app that helps children practice the multiplication tables. You need to create a list of all of the multiplications for the numbers 1 to 10. 
    
    Task: 
        - Use a nested loop to console log the multiplications for each table, in ascending order,    displaying each multiplication as a string. 
        - At the start of each table, console log a string that says which number the table is for.

    Expected Results: 
    
        "----- 1 Times Table ----- "
        "1 times 1 equals 1"             
        "1 times 2 equals 2"
        "1 times 3 equals 3"
        "1 times 4 equals 4"
        "1 times 5 equals 5"
        "1 times 6 equals 6" 
        "1 times 7 equals 7"
        "1 times 8 equals 8"
        "1 times 9 equals 9"     
        "1 times 10 equals 10"      
         "----- 2 Times Table ----- "     
        "2 times 1 equals 2"
        "2 times 2 equals 4"
        "2 times 3 equals 6"
        "2 times 4 equals 8"
        etc...
*/ 

for (var i = 1; i <= 10; i++) {
    console.log( i + " Times Table");
    for (var j = 1; j <=10; j++) {
        console.log(i + " times " + j + " equals " + i * j);
    }
};

/* 

Task 1: Working with if-else statements and loops 

    Imagine you're creating a wedding planning app. Someone is using the app 
    to help them plan the seating arrangements for a wedding reception. As 
    part of those arrangements, the user wants the placemats at the tables to 
    match the theme colors of the wedding, which are white, pink, and blue. There 
    are 10 placemats at each table. They want the first and last placemats 
    at each table to be white, and they want the rest of the placemats to 
    alternate between pink and blue. 
    
    1. Using a for loop and if-else conditional statements, console.log 
       the colors and their corresponding placemat numbers.  
    2. Check that your results appear as follows: 
    
        Placemat 1: white
        Placemat 2: pink
        Placemat 3: blue
        Placemat 4: pink
        Placemat 5: blue
        Placemat 6: pink
        Placemat 7: blue
        Placemat 8: pink
        Placemat 9: blue
        Placemat 10: white

    Hint: You can use an operator you learned earlier in the course to
    check if a number is odd or even! 
*/

for(i=1; i<=10; i++){
    switch(i){
        case 1:
        case 10:
            console.log("white");
            break;
        case 2:
        case 4:
        case 6:
        case 8:
            console.log("pink");
            break;
        case 3:
        case 5:
        case 7:
        case 9:
            console.log("blue");
            break;
        default:
            console.log("An error occured");
            break;                                        
    }
};

for (var i = 1; i <= 10; i++){
    if (i == 1 || i == 10){
        console.log("white");
    } else if (i % 2 == 0){
        console.log("pink");
    } else {
        console.log("blue");
    }
}