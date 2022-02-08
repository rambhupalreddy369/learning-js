const first = [2,3,1];

const second = [5,4,8,6,7];

const joined = first.concat(second);

console.log(joined)

const parts = joined.slice(2);

console.log(parts);

const first1 = [{id : 0}];
const second1 = [1,2,3,4];

const combined = first1.concat(second1);
first1[0].id = 10;

console.log(combined);
const slice= combined.slice(1);

console.log(slice);