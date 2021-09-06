///// node setTimeout.js /////

console.log('First  __________________(1)');
console.log('Second __________________(2)');
console.log('Third  __________________(3)');

//Normal Function
function calculate()
{
    console.log('Normal Function');
}
// calculate();
// setTimeout(calculate, 8000); //time 8ms x 1000 = 8s
 
//Anonymous function
setTimeout(function()
{
    console.log('Anonymous Function');
},
5000 //time 5ms x 1000 = 5s
);

//Arrow Function
setTimeout( () =>
{
    console.log('Arrow Function');
},
4000 //time 4ms x 1000 = 4s
)

console.log('Fourth __________________(4)');