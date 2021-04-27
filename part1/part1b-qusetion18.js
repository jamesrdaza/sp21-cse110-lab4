var intervalID = setInterval(testFunc, 1000);

function testFunc()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    
    console.log(time);
}