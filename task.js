//// node task.js ////

//Task(1)

console.log('first');
console.log('second');

function calculate(number)
{
    console.log(number*3);
}
/*  
const result = calculate(120);
setTimeout(result, 3500); //This will not work as you expected
setTimeout(calculate(120), 3500); //This will also not work as you expected
 */
setTimeout(calculate, 3500, 120);  //Now in this syntax, it will work

setTimeout(
    function(second)
{
    console.log(second*3);
},
3500, 500
);

setTimeout(
    () =>
    {
        console.log('Nothing');
    },
    5000
);

console.log('third');
