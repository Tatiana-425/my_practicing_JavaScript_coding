// practice on error handling

try {
console.log(a+b)
// console.log (1+1)
} catch(err) {
    console.log(err)
    console.log('There was an error. The error is saved in the error log')
};

console.log('My programme has not stopped');

/*
This function adds a $10 tourist surcharge to every hotel 
booking. But there's a problem. If we pass in an argument 
that is not a number, we get weird and unexpected results. 
Let's refactor it to fix that!
*/
/*
Task:
    1. Add a try block.
    2. Inside the try block, check if 'payment' is a number. 
       If it's not a number, throw a reference error stating 
       'payment is not a number'. 
       If it is a number, perform the calculation and log out 
       the result.
    3. Add a catch block to log out the error.
*/

function addTouristSurcharge(payment) {

    try {
        if (typeof (payment) != 'number') {
            throw new ReferenceError('payment is not a number')
        }
        else {
            console.log(payment + 10)
        }
    }catch(err) {
        console.log(err)
    }
};

addTouristSurcharge("300")
addTouristSurcharge(300)

function letterFinder(word, letterToMatch){
    
    var condition1;
    var condition2;

    if (typeof (word) == 'string' && word.length > 1) {
        condition1 == true;
    } else {
        condition1 == false;
    };
    if(typeof(letterToMatch) == 'string' && letterToMatch.length === 1){
        condition2 == true;
    } else {
        condition2 == false;
    };
    /*
    Task:
    
        1. Inside the function body, set up two variables called 
           'condition1' and 'condition2'.
        2. 'condition1' needs to hold a boolean which is true if 
           the 'word' parameter is of the data type of string 
           AND has a length of 2 or more.
        3. 'condition2' needs to hold a boolean which is true if 
           the 'letterToMatch' parameter is of the data type of 
           string AND has a length of exactly 1.
        4. Wrap the rest of the logic in the function in an if 
           statement so it only executes if BOTH 'condition1' AND 
           'condition2' are true.
        5. Add an else statement that logs out "Please pass in 
           correct arguments." if condition1 and condition2 don't 
           both return true.
        
        Expected output when letterFinder is called with 'test' and 't':
        
            Found letter t at index 0
            ---No match found at index 1
            ---No match found at index 2
            Found letter t at index 3
        
        Expected output when letterFinder is called with [6, 7] and 't':
        
            Please pass in correct arguments    
    */
        if (condition1 == true && condition2 == false){
        for (var i = 0; i < word.length; i++){
            if(word[i] == letterToMatch){
                console.log('Found the letter ' + letterToMatch + ' at index ' + i)
            }
            else {
                console.log('No match found at index ' + i)
            }
        }
    } else {
        console.log("Please pass correct arguments.")
    }
    }
    
    letterFinder([6,7], 'o')