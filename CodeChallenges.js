function printFizzBuzz(){
  for(let i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
      console.log("fizzbuzz");
    }
    else if(i % 3 == 0){
      console.log("fizz")
    }
    else if (i % 5  == 0){
      console.log("buzz");
    }
    else{
      console.log(i);
    }
  }
}

printFizzBuzz()


//⦁	Write a method that returns the largest element in an array.
function findLargestElement(array){
  let largestElement;
  for(let i = 0; i < array.length; i++){
    let currentValue = array[i];
    let nextValue = array[i+1];  
    if(currentValue > nextValue){
      largestElement = currentValue;
    }
    else if (currentValue < nextValue){
      largestElement = nextValue;
    }
  }
  return largestElement;
}
let largeArr = [20, 22, 26, 66, 02, 84, 255, 5];
console.log(findLargestElement(largeArr));