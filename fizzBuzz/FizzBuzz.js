function fizzBuzz(num) {
    // for(var i=1; i<= 100; i++){
    //     var output = '';
    //     if(i % 3 == 0) {output += 'Fizz'};
    //     if(i % 5 == 0) {output += 'Buzz'};
    //     // if(i % 3 == 0 && i % 5 == 0) {output += 'FizzBuzz';}
    //     if(output == '') {output = i}
    //     console.log(output);
    //     }
  
    // }
    let result = [];
    if(num%3 == 0) result.push("Fizz");
    if(num%5 == 0) result.push("Buzz");
    if(num%7 == 0) result.push("Suzz");
    return result.join("") || undefined;
  }
  module.exports = fizzBuzz;