let array=[2,44,60,5,9];

// searching  element in array 
let item=9;
let pos=null;
for (let index = 0; index <array.length; index++) {
   if (array[index]==item) {
  pos=index
   }
} 

// console.log(pos)//by DSA
console.log(array.indexOf(9))//by js