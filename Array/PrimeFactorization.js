let array = [undefined];
let a = 130;
let index = 0;
for (let i = 2; i < a; i++) {
    while( a%i == 0){
      console.log(i," ");
      array[index] = i;
      index++;
      a = a/i ;
    }
}
  if(a>=2){
    console.log(a);
    array[index++]=a;
  }

console.log(array);