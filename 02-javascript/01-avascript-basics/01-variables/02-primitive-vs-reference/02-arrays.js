const arr = ["shmuel", 65, true, 4567];

console.log(arr);
console.log(arr[2]);

arr.push("Joni");
console.log(arr);

const arr1 = arr;
console.log("arr1 first", arr1);

arr1.push(123456);
console.log("arr1 second", arr1);
console.log("arr second", arr);
