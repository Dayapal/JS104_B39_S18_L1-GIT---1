

let arr = [2,3,4,5]

// expected output  [4,9,16,25]

let ans = arr.map(function(a){
    return a*a
})
console.log(ans)

let ans2 = arr.map((a) => a*a)

console.log(ans2)


// let squre1 = []
// let squre2 = "" 
// for(let i = 0; i < arr.length; i++){
    //  squre.push(arr[i]*arr[i])
    // let square = arr[i] * arr[i]
    // squre1 += square + " "
      
// }
// console.log(squre1)