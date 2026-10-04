//printing the array elements
//
//let courses = ['hld', 'lld', 'dsa', 6, true, null];
//console.log(courses[3]);
//console.log(courses[4]);
//console.log(courses[5]);

function createcourses(coursename) 
{
    console.log('creating course: ' + coursename);
}
createcourses('webdesign');
createcourses('webdevelopment');
createcourses('appdevelopment');

function add(x,y)
{
    console.log(x + y);
}
add(2, 3);
let students = 
    { name: 'UTSAV' ,
    des: "bit",
    rating: 4.5,
    address:'ktm    '
    };
console.log(students.name); 
console.log(typeof (students.name));
console.log(students.des);
console.log(typeof (students.des));
console.log(students.rating);
console.log(typeof (students.rating));
console.log(students.address);
console.log(typeof (students.address));


let diff=(A,B)=>A-B;
function operate(operator, a, b) {
    return operator(a, b);
}
console.log(operate(diff, 2, 3));

let sum=(A,B)=>A+B;
function operateSum(operator, a, b) {
    return operator(a, b);
}
console.log(operateSum(sum, 2, 3));

let a=100;
function outer(){
    a=200;
    function inner(){
        console.log(a);
    }
    return inner;
}

let returnedfuncvar=outer();
console.log(returnedfuncvar);
returnedfuncvar();












