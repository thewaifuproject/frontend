function openNav() {
  if(window.innerWidth>600){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.left = "250px";
    document.getElementById("main").style.width = "calc(100% - 250px)";
  } else {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.opacity= "1";
    document.getElementById("mySidenav").style.pointerEvents = "auto";
    console.log("ee")
    //document.getElementById("mySidenav").style.display= "block";
  }
  document.body.style.backgroundColor = "#584678"//"rgba(0,0,0,0.4)";

  /*var element = document.getElementById("main");
  element.classList.remove("main-closed");
  element.classList.add("main-active");*/
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  if(window.innerWidth>600){
    document.getElementById("main").style.left = "50px";
    document.getElementById("main").style.width = "calc(100% - 50px)";
  }
  else{
    document.getElementById("main").style.left = "0px";
    document.getElementById("main").style.width = "100%";
    document.getElementById("mySidenav").style.height = "0%";
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.top= "0px";
    document.getElementById("mySidenav").style.opacity= "0";
    document.getElementById("mySidenav").style.pointerEvents = "none";
    //document.getElementById("mySidenav").style.display= "none";
  }

  document.body.style.backgroundColor = "#000"//"white";
  
  var element = document.getElementById("main");
  element.classList.remove("main-open");
  element.classList.add("main-closed");
}

$('document').ready(function(){
    
    $("#waifusmenu").click(function() {
        console.log("somting");
        
        $('.wmenu').toggleClass('wmenu-active');
    });

    
    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

});

