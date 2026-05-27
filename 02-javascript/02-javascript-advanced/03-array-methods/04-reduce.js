const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers.reduce(
  (prevValue, currentValue) => prevValue + currentValue,
  0,
);

console.log(sum);



const flatArr = [[1,2,3,4,],[5,6,7,8,],[9,10,11,12],[13,14,15,16]]

function superSlomon(arr){
    const united = arr.reduce(
        (prevValue, corentValue) => [...prevValue, ...corentValue]
    )
    console.log(united);
    
    return united
}

superSlomon(flatArr)