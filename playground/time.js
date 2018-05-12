let moment = require('moment');

// let date = moment();
// // date.add(1, 'year')
// // console.log(date.format('MMM Do, YYYY'))
// console.log(date.format('h:mm a'))

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));