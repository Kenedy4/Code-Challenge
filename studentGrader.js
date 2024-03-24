// Week 1 Code Challange in js.

// Challenge 1: Grade calculater
// Declaring the function
function studentGrader(marks) {
  // For the grade greater than 79, the student gets grade "A"
  if (marks > 79 && marks <= 100) {
    return "Grade A";
  }
  // For the grade between 60 and 79, the student gets grade "B"
  else if (marks >= 60 && marks <= 79) {
    return "Grade B";
  }
  // For the grade between 50 and 59, the student gets grade "C"
  else if (marks >= 50 && marks <= 59) {
    return "Grade C";
  }
  // For the grade between 40 and 49, the student gets grade "D"
  else if (marks >= 40 && marks <= 49) {
    return "Grade D";
  }
  // For any grade below 40, the student gets grade "E"
  else marks < 40;
  return "Grade E";
}
console.log(studentGrader());
