// Recursion is a problem solving techinque where the solution depends on the smaller instance of the same problem 
//In short Recursion is the funtion calling itself;

// Given a number n ,find the nth element of the fibonannic sequence

function fabrecursioon(n){
    if(n<2){
        return n;
    }
   return fabrecursioon(n-1)+fabrecursioon(n-2); 
                           
}                        
                          
console.log(fabrecursioon(6))//8

// Big O notation is O(2^n)