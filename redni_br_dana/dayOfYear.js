//------bolji izgled-----

function dayOfYear(year, month, day) {
    if(arguments.length != 3 || typeof(day) !== 'number' || typeof(month) !== 'number' || typeof(year) !== 'number') {
        //
        throw new Error;
      }

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = day;

    for(let i = 0; i < month-1; i++){
      days += daysInMonth[i];
    }
    if (month > 2 && isLeapYear(year)) days += 1;
   
    return days;

  }

    function isLeapYear(year) {
      return(!(year % 4) && (year % 100) || !(year % 400));
  }


module.exports = dayOfYear;


// function dayOfYear(year, month, day){
//     let md = 0;
//     if(month == 2) md = 31; //kada se dodaju dani gleda se zapravo dane od prethodnog mjeseca zato smo ovaj leap year stavili u 3. mj
//     if(month == 3 && isLeapYear(year)) md = 60;
//     if(month == 3 && !isLeapYear(year)) md = 59;
//     if(month == 4) md = 91;
//     if(month == 5) md = 121;
    
//     return md + day;   

//     
//  }

// function isLeapYear(year){
//     if(year % 4 === 0) return true;
//     return false;
// }

// module.exports = dayOfYear;


