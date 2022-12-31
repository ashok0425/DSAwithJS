 let array=[2,44,60,5,9];

    // adding new element in array 
    let pos=2;
    let newEl=22;
    for (let index = array.length-1; index >=pos; index--) {
        array[index+1]=array[index]
        if (index===pos) {
            array[pos]=newEl
        }
    } //by DSA
console.log(array)
//  by js
// array.splice(pos,0,newEl)