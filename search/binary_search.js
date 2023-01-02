//Binary search work on the basis of finding middle element and remove half of array such that if middle element is less than target element then remove second half array and vice-versa.Binary search only word in sorted array.

function search(arr,ele) {

    let left=0; //first index
    let right=arr.length-1; //last index
    while (left<=right) {
    let midvalue=Math.floor((left+right)/2); //avergae value of first and last index
    if (arr[midvalue]==ele) {
        return midvalue;// index
    }
    if (ele<arr[midvalue]) {
        right=midvalue-1 //if the target element is less than the value of midvalue index then 
        //remove the right values from array
    }else{
        left=midvalue+1
//if the target element is greater than the value of midvalue index then 
        //remove the left values from array
    }
        
    }
    return -1;
}

console.log(search([3,4,5,8,9,0],9))
console.log(search([3,44,8,9,0],2))
console.log(search([3,4,5,8,9,0],8))


// Here Big O is O(logn)