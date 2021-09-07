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

//SetInterval

let countDown = 0;
const interval = 1000;

const stop = setInterval(() => {

    // countDown++;
    console.log(countDown++);
    if(countDown > 10)
    {
        clearInterval(stop);
    }
    
}, interval);

//Task(2)
const add = () =>
{
    const userInput = prompt("Give a positive number");
    const mainResult = parseFloat(userInput) + 200;

    const result = document.getElementById('result');
    result.innerText = parseFloat(mainResult);
    result.innerText = `Result  :   ${mainResult}`;

    alert(`Result ${mainResult}`);
       
}

const profile = () =>
{
    const response = confirm('Avishek, Do you want see your GitHub Profile?');

    if(response == true)
    {
        // const address = location.assign('https://github.com/avishekataur');
        // console.log(address);
        // location.href = 'https://github.com/avishekataur';
        // console.log('https://github.com/avishekataur');

        window.open("https://github.com/avishekataur", "_blank");

        const url = 'https://github.com/avishekataur';
        console.log(url);

        
    }
    else
    {
        console.log('No Profile');
    }
    

    //  console.log(location.assign('https://github.com/avishekataur'));
}
