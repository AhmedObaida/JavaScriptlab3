var myWindow;
var text;
var count = 0;
function openWindow()
{
    myWindow =window.open("",""," height=500 width=500 ");

    function typing()
    {
        text = "Hello there";
        myWindow.document.write(text[count])
        count++;
    }
    setInterval(typing,1000)
     
}  


    
