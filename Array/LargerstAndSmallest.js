let number = new Array();
for(i=0;i<10;i++){
let num = Math.floor(Math.random()*900)+100;
number[i] = num;
}

console.log(number);

let largestNumber = 0;
let secondLargestNumber = 0;
let smallestNumber = number[9];
let secondSmallestNumber = number[0];
for(element of number){
  // for largest number and second largest number
  if(element>largestNumber){
    secondLargestNumber = largestNumber;
    largestNumber = element;
  }else if(element>secondLargestNumber && element != largestNumber){
    secondLargestNumber = element;
  }
  // for smallest number and second smallest number
    if(element<smallestNumber){
        secondSmallestNumber = smallestNumber;
        smallestNumber = element;
    }else if(element<secondSmallestNumber && element != smallestNumber){
        secondSmallestNumber = element;
    }
}
console.log("Largest => "+largestNumber);
console.log("Second largest => "+secondLargestNumber);
console.log("Smallest => "+smallestNumber);
console.log("Second smallest => "+secondSmallestNumber);