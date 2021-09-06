///// node setinterval.js /////

console.log('First  __________________(1)');
console.log('Second __________________(2)');
console.log('Third  __________________(3)');

//Anonymous function

/* 
setInterval( () =>
{
    console.log('tik tok');
},
1000
) 
*/

//Running Interval
/* 
let seconds = 0;

setInterval( () =>
{
    seconds++;
    console.log(seconds);
},
1000
) 
 */

//Stop Interval
let seconds = 0;

//declare the function in a variable
const counter = setInterval( () =>
{
    // seconds++;
    // console.log(seconds++);
    console.log(++seconds);
    if(seconds > 9)
    {
        clearInterval(counter);
    }
},
1000
) 

console.log('Fourth __________________(4)');

console.log('Counting');