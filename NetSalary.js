// Part #3: Calculate Net Salary
// Section 1: PAYE
// Start with function declaration
function mySalary(totalpay) {
  // comment
  if (totalpay <= 24000) {
    return totalpay * 0.1;
    // find the difference between the first limit from your current salary,
    // then the difference multiplied by the given percentage
  } else if (totalpay >= 24001 && totalpay <= 32333) {
    return 24000 * 0.1 + totalpay - 24000 * 0.25;
  }
  //   comment
  else if (totalpay >= 32334 && totalpay <= 500000) {
    return 24000 * 0.1 + totalpay - 32333 * 0.33 + 32333 * 0.25;
    // Comment
  } else if (totalpay >= 500001 && totalpay <= 800000) {
    return totalpay - 500000 * 0.32 + 24000 * 0.1 + 500000 * 0.3;
    // Comment
  } else {
    return totalpay * 0.35;
  }
}
//console.log(total(30000));

// Section 2: NHIF Deductions
// Calculate NHIF Deductions
function MyNHIF(totalpay) {
  if (totalpay <= 5999) {
    return 150;
  } else if (totalpay >= 6000 && totalpay <= 7999) {
    return 300;
  } else if (totalpay >= 8000 && totalpay <= 11999) {
    return 400;
  } else if (totalpay >= 12000 && totalpay <= 14999) {
    return 500;
  } else if (totalpay >= 15000 && totalpay <= 19999) {
    return 600;
  } else if (totalpay >= 20000 && totalpay <= 24999) {
    return 750;
  } else if (totalpay >= 25000 && totalpay <= 29999) {
    return 850;
  } else if (totalpay >= 30000 && totalpay <= 34999) {
    return 900;
  } else if (totalpay >= 35000 && totalpay <= 39999) {
    return 950;
  } else if (totalpay >= 6000 && totalpay <= 44999) {
    return 1000;
  } else if (totalpay >= 6000 && totalpay <= 49999) {
    return 1100;
  } else if (totalpay >= 6000 && totalpay <= 59999) {
    return 1200;
  } else if (totalpay >= 6000 && totalpay <= 69999) {
    return 1300;
  } else if (totalpay >= 6000 && totalpay <= 79999) {
    return 1400;
  } else if (totalpay >= 6000 && totalpay <= 89999) {
    return 1500;
  } else if (totalpay >= 6000 && totalpay <= 99999) {
    return 1600;
  } else {
    return 1700;
  }
}
// console.log(MyNHIF(10000));

// Part #3
function NSSFDeduction(myGross) {
    if (myGross <= 7000){
        return myGross*0.6
    }
  else if (myGross <= 7001 && myGross <= 18000) {
    return myGross * 0.06;
  }
  else {
    return 1080
  }
}

// Part 4
// Calculating the Actual Net Salary, with provided fixed salary as example.
// Not complete, to be competed
let Salary= "money"
let MyNHIF = totalpay*0.06
let NSSFDeduction=