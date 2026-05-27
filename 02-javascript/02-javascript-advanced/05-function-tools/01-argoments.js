function superConcatSolomon() {
  console.log(arguments);
  let united = []
  for(const arr of arguments) {
    united = [...united, ...arr]
    console.log("arr", arr);
    
    console.log("united", united);
    
  }
  return united
}

superConcatSolomon([1, 2, 3], [4, 5, 6], [20, 23, 24]);