/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
var number = 1 ;
    while (number <= 100){
        console.log(number);
        number = number +1;
    }
/* the on you see ontop is the one I thought was correct
/* later i realized there is a short hand for it





/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (var number = "#";
number.length <7;
number +="#")
console.log(number);