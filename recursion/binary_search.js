//Binary search work on the basis of finding middle element and remove half of array such that if middle element is less than target element then remove second half array and vice-versa.Binary search only word in sorted array.

function search(arr,ele,left,right) {
    
if(left>right){
    return -1;
}

    let midvalue=Math.floor((left+right)/2); //avergae value of first and last index
    if (arr[midvalue]===ele) {
        return midvalue;// index
    }

    if (ele<arr[midvalue]) {
        right=midvalue-1
      return  search(arr,ele,left,right)
        //if the target element is less than the value of midvalue index then 
        //remove the right values from array
    }else{
        left=midvalue+1
       return search(arr,ele,left,right)
//if the target element is greater than the value of midvalue index then 
        //remove the left values from array       
    }

}
let arr=[3,4,5,8,9,0];
let left=0; //first index
let right=arr.length-1; //last index

console.log(search(arr,9,left,right))



// Here Big O is O(logn)