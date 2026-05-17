function print(){
    console.log("Hello World");
    return function(){
        console.log("afghjkdfgujgh");
        
    }
}
print()

const print1 = function (){
    console.log("Hello Expression");
}

print1()

const copyPrint = print
copyPrint();

const copyPrint1 = print()
copyPrint1()
