let array=[2,44,60,5,9];

// deleting  element in array 
let pos=2;
for (let index = pos; index <array.length-1; index++) {
    array[index]=array[index+1]
} 

array.length=array.length-1
// console.log(array)//by DSA
array.splice(pos,1)//by js
console.log(array)