let arr=[2,44,60,5,9];
let arr1=[]
// reverse  element in array 

for (let index = arr.length; index >=0; index--) {
   arr1[index]=arr[arr.length-1-index]
} 
arr1.length=arr1.length-1
// console.log(arr1)//by DSA
console.log(arr.reverse())//by js