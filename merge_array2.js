let array1=[2,44,60,5,9];
let array2=[22,424,620,25,29];
let array=[]

// merigng arrayt to new form new array

for (let index = 0; index <array1.length; index++) {
  array[index]=array1[index]
} 

for (let index = 0; index <array2.length; index++) {
array[array1.length+index]=array2[index]
 } 
// console.log(array)//by dsn
console.log(array1.concat(array2))//by js