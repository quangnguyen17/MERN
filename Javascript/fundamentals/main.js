
// JS CODE
const nums = [1, 2, 3, 4, 5]
const wang = {
    firstName: 'Quang',
    lastName: 'Nguyen',
    age: 18,
    rip: {
        dob: '11/15/2001',
        dod: null
    }
}

var { age: wangAge } = wang;
var { rip: { dob, dod } } = wang;

// console.log(dob);