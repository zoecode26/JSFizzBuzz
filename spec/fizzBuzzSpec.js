describe("fizzBuzz", function(){
    it ("prints Fizz if number is divisible by 3", function(){
       expect(fizzBuzz(6)).toEqual("Fizz"); 
    });

    it ("prints Buzz if number is divisible by 5", function(){
        expect(fizzBuzz(10)).toEqual("Buzz"); 
    });

    it ("prints FizzBuzz if number is divisible by 3 and 5", function(){
        expect(fizzBuzz(15)).toEqual("FizzBuzz"); 
    });

    it ("prints number if number isn't divisible by 3 or 5", function(){
        expect(fizzBuzz(4)).toEqual(4); 
    });
});