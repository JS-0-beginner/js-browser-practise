console.log('Recognize fetch as an Asynchronous activity.');

console.log('First      __________________',1);
console.log('Second     __________________',2);
console.log('Third      __________________',3);


setTimeout( () =>
{
    console.log('Asynchronuous Arrow Function');
},
4000 //time 4ms x 1000 = 4s
)


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log('Asynchronuous Fetch',json))

console.log('Fourth     __________________',4);

for (let index = 0; index < 10; index++) {
    console.log(index);
}
