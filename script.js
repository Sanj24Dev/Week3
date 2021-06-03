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


// sticky navbar on scrolling
window.addEventListener("scroll", function()
{
    if(window.scrollY > 10)
    this.document.getElementById("change").className = "sticky";
    else
    this.document.getElementById("change").className = "navbar";
})

// toggle menubar
var MenuItems = document.getElementById('menu-items');

MenuItems.style.maxHeight = "0px";

function menutoggle()
{
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}









