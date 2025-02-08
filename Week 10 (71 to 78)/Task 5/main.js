let nums = [2, 12, 11, 5, 10, 1, 99];
let res=nums.reduce( function (acc, cur)
{
    if (cur % 2 === 0) {
        return cur * acc;
    }
    return cur+acc;
},1);
console.log(res);
// 500