var myWindow;
// function openNewWindow()
// {
//     myWindow = window.open("https://www.google.com/?hl=ar");
// }




function showText()
{
    myWindow = window.open("","","height=500 width=500");
    myWindow.document.write("Hello");
    setTimeout(closeWindow,3000);
}

function closeWindow()
{
    myWindow.close();
}