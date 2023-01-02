
function factorialRecursion(n){
    if(n===0){
        return 1
    }

  return  n*
        factorialRecursion(n-1)
}
console.log(factorialRecursion(5))

// Here Big O is O(n)