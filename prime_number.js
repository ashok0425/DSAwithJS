// In mathmametic prime number can be defined as natural number that are not product of any two smaller natural number.
// for 2,3,5,7,11
// 2 is only even prime number

function Isprime(n){
    if(n<2){
        return false;
       }
       for (let index = 2; index < n; index++) {
            if (n%index===0) {
                     return false;
            }
        }
        return true;  
}

console.log(Isprime(5))

// Here Big O is for given function is O(n) as function contain 1 loop which is liner time complexility
