


let arr = [1,2,3,4,5];

// expectedoutput = 20

let ans1 = arr.filter((a) => a % 2 === 0)
console.log(ans1)

let ans2 = ans1.map(function(a){
    return a*a
})
console.log(ans2)

let ans3 = ans2.reduce(function(a,b){
    return a+b
})
console.log(ans3)

