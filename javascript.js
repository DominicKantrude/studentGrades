


//Student Grades




const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 77, 88, 83, 91, 63, 65, 72, 73, 74, 75]
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    console.log(score)
    switch (true) {
        case score > 90:
            grades.A++;
            break;

        case true == score > 81:
            grades.B++;
            break;

        case score >= 71:
            grades.C++;
            break;

        case score >= 61:
            grades.D++;
            break;

        default:
            grades.F++;
            break;
    }
}
console.info(grades)


let mostAchievedGrade = "";
let leastAchievedGrade = "";
for (let grade in grades) {
    if (mostAchievedGrade === "") {
        mostAchievedGrade = grade;
        leastAchievedGrade = grade;
    } else if (grades[mostAchievedGrade] < grades[grade]) {
        mostAchievedGrade = grade;
    }else if (grades[leastAchievedGrade] > grades[grade]){
        leastAchievedGrade = grade;
    }
    console.log(`${grades[grade]} students recieved a grade of ${grade}`);

}

console.log(`most achieved grade is ${mostAchievedGrade}`);
console.log(`least achieved grade is ${leastAchievedGrade}`);


scores.sort(function (a, b) { return a - b });
console.log(`lowest score is ${scores[0]}`);
console.log(`highest score is ${scores[scores.length - 1]}`);





//     Which grade had the most students achieve it ? Use an if statment, and a currentGradeCount variable,
 //in your for..in loop to see if the current grade's scoreis higher than the last one.
// Which grade had the fewest students achieve it ?




