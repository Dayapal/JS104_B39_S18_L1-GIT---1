

let arr = [5,10,15,20];
// expectoutput  = 50;

let ans = arr.reduce((a,b) => a+b);
console.log(ans)

let ans2 = arr.reduce(function(a,b){
    return a+b
})
console.log(ans2)