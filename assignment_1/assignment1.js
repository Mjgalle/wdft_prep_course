/*
Exercise #1
Initialize an empty array below in the variable numbers.
*/
var numbers;
var numbers = [];
console.log('hello world')
console.log('test');



/*
Exercise #2
Using the loop provided for you below, use an array's push method 
to insert the numbers 0 to 10 into positions 0 through 9 of the numbers 
array you just initialized above.'If you're not sure how to use the array push 
method go back and re read this module on data structures.'
*/



for(var i=0;i<10;i++){
    //use the array push() method here.

    numbers.push("0");
    numbers.push("1");
    numbers.push("2");
    numbers.push("3");
    numbers.push("4");
    numbers.push("5");
    numbers.push("6");
    numbers.push("7");
    numbers.push("8");
    numbers.push("9");
    numbers.push("10");
    
    var lenth = numbers.push("10");
    
    console.log(numbers);
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    
    console.log(length);
}


/* or I think you can also do this so you dont have to write out all the different
numbers*/

numbers.push("0<=10");

for(var i=0;i<10;i++){
    //use the array push() method here.

    numbers.push("0<=10");

    var lenth = numbers.push("10");
    
    console.log(numbers);
    ["0<=10"]
    
    console.log(length);
}



/*
Exercise #3
Test that you used the array push method correctly by printing the sum 
of the values at position 3 and 6 of the array (use the console.log() 
function to print to the console). 
The outputted value should be 9.
*/




/*
Exercise #4
Use the console.log() function and the array .pop() to add all the values in the array.
*/

var sum = 0;
/* remove this line to uncomment the code block
while(numbers.length != 0){
    //write pop function here
}
remove this line to uncomment the code block */
console.log(sum);


/*
Exercise #5
Create an empty object and assign it to the variable car below.
*/
var car = {};

/*
Exercise #5
Give the car object a property called "colour" and assign it the value of "black". 
Test that your code works correctly by outputting the "colour" property to the console. 
You should see the value "black" printed out.
*/

var car = { 
    colour: "black",
}

