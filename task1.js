var myWindow;
function openNewWindow()
{
    myWindow = window.open("https://www.google.com/?hl=ar");
}

function closeWindow()
{
    myWindow.close();
    // settimeout( function(){document.location.href='https://www.google.com/?hl=ar'}, 5000 );
}