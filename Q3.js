

let arr = [5,10,15,20];
let arr2 = [5,10,15,20];
// expectoutput  = 50;
// expectoutput  = 50;
let add = 2

let ans = arr.reduce((a,b) => a+b);
console.log(ans)

let ans2 = arr.reduce(function(a,b){
    return a+b
})
console.log(ans2)