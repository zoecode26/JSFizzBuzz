var i;
for (i=1; i <101; i++){
    fizzBuzz(i);  
}

function fizzBuzz(number){
    if (number%5 == 0 && number%3 ==0){
        return "FizzBuzz";
    }
    else if (number%3 == 0){
        return "Fizz";
    }
    else if (number%5 == 0){
        return "Buzz";
    }
    else{
        return number;
    }
}