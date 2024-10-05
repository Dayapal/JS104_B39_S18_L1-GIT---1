
let arr = [1,2,3,4,5,6];

// expect output = [2,4,6]
let ans2 = arr.filter(function(a){
    return a % 2 === 0;
})

let ans = arr.filter((a) => a % 2 === 0)
console.log(ans)