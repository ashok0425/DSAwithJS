// In mathmametic factorial of n number is the product of all positive integer less or equal to n.It is denoted by n!.
// for e.g 5!=5*4*3*2*1=120
// factorial of 0 is 1;

function factorial(n){
    let fac=1;  //1
    for (let index = 2; index <= n; index++) {
        fac=fac*index;// it run 4 times i.e n-1
    }
    return fac;  //1
}

console.log(factorial(5))

// Here Big O is for given function is O(n) as function contain 1 loop which is liner time complexility
