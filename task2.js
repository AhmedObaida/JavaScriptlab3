
function start()
{
    var myDate = new Date();
    document.getElementById("time").innerHTML = myDate.toLocaleTimeString();
   
}

function startClock()
{
    alert("Clock started");
    setInterval(start,1000);
       
}
