// In mathmametic ,An integer is the power of two if there exists an integer 'x' such that 'n'===2^x
// for e.g
// 8=2x2x2=2^3
// 4=2x2=2^4


function Ispowertwo(n){
    if(n<1){
        return false;
    }
       while ( n >1 ) {
            if (n%2!=0) {
                     return false;
            }
            n=n/2;
        }
        return true;  
}

console.log(Ispowertwo(1))

// Here Big O is for given function is O(n) as function contain 1 loop which is liner time complexility
