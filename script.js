// sticky navbar on scrolling
window.addEventListener("scroll", function()
{
    if(window.scrollY > 10)
    {
        this.document.getElementById("change").className = "sticky";
        document.getElementById('logo').src="https://imgur.com/fVn6V66.png";
    }
    else
    {
        this.document.getElementById("change").className = "navbar";
        document.getElementById('logo').src="https://imgur.com/nGjYsxB.png";
    }
    
})


var i=0;

function menutoggle()
{
    i++;
    if(i%2!=0)
        this.document.getElementById("menu-items").className = "show";
    else
        this.document.getElementById("menu-items").className = "normal";
}



// to change imgs according to the colors

function showBlack()
{
    document.getElementById('diffcolors').src="https://imgur.com/hg9SG3g.png";
}

function showc2()
{
    document.getElementById('diffcolors').src="https://imgur.com/TM7PeXd.png";
}

function showc3()
{
    document.getElementById('diffcolors').src="https://imgur.com/Rw5d77x.png";
}

function showc4()
{
    document.getElementById('diffcolors').src="https://imgur.com/Qzor5fb.png";
}

function showc5()
{
    document.getElementById('diffcolors').src="https://imgur.com/mUnM3IH.png";
}

function showc6()
{
    document.getElementById('diffcolors').src="https://imgur.com/x7YSWB1.png";
}

function showc7()
{
    document.getElementById('diffcolors').src="https://imgur.com/UrpJE7Z.png";
}

function showc8()
{
    document.getElementById('diffcolors').src="https://imgur.com/NhNLYpm.png";
}



