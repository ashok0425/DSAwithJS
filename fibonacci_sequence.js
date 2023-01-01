// it is the squence in which each number is the sum of two proceeding number

function fib(n){
let arr1=[0,1];     //1
for (let index = 2; index < n; index++) {
    arr1[index] = arr1[index-1]+arr1[index-2];   //7 i.e n
}
return arr1 //1
}

console.log(fib(7))

// Here Big O is for given function is O(n) as function contain 1 loop which is liner time complexility