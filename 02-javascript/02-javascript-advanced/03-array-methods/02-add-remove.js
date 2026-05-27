const numbers = [1, 2, 3]

numbers.push(11)

const last = numbers.push(12)

console.log(numbers, last);
//מכניס איבר חדש ומחזיר את כמות האיברים העדכנית

numbers.unshift(1, 2)

// const a = numbers.unshift()

console.log(numbers);

numbers.pop()//מוריד איבר מסוף המערך

console.log(numbers);

numbers.shift()//מוריד איבר מתחילת המערך

console.log(numbers);
