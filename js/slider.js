var number = Math.floor(Math.random()*5)+1;
		
var timer1 = 0;
var timer2 = 0;
var timer3 = 0;

var slidenr = 0;

function setslide(slidenum)
{
    if (slidenr == (slidenum-1))
    {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
    }
    else 
    {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        number = (slidenum-1);
        hide();
        timer3 = setTimeout("changeslide()", 500);
    }
}

function hide()
{
    $("#slider").fadeOut(500);
}

function changeslide()
{
    number++; if (number>5) number=1;
    
    var file = "<img src=\"img/slider" + number + ".png\">";
    
    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500);
    
    slidenr = number;
    
    timer1 = setTimeout("changeslide()", 5000);
    timer2 = setTimeout("hide()", 4500);
}