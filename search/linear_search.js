
function search(ele) {
let arr=[3,4,5,8,9,0];

    for (let index = 0; index < arr.length; index++) {
if(arr[index]==ele) 
    return index;
    }
    return -1;

}
console.log(search(9))

// Here Big O is O(n)