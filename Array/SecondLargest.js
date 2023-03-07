let number = [112,450,685,345,693,980,453,121,675,333];
let temp=0;
for(let i=0;i<number.length;i++){
  for(let j=0;j<number.length;j++){
    if(number[j]>number[j+1]){
      temp = number[j];
      number[j] = number[j+1];
      number[j+1] = temp;
    }
  }
}

console.log("Sorted array => ");
for(let i=0;i<number.length;i++){
  console.log(number[i]," ");
}

console.log("Second largest => " , number[number.length-2]);
console.log("Second smallest => ",number[1]);