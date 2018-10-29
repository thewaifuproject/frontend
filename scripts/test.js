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
    $("#mySidenav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });
});
