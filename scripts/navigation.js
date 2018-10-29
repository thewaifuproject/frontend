function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.left = "250px";
    document.getElementById("main").style.width = "calc(100% - 250px)";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.left = "50px";
    document.getElementById("main").style.width = "calc(100% - 50px)";
    document.body.style.backgroundColor = "white";
}

$('document').ready(function(){
    
    $("#waifusmenu").click(function() {
        console.log("somting");
        
        $('.wmenu').toggleClass('wmenu-active');
    });

});
