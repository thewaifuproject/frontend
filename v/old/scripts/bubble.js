var nbubbles=0;

function createskin(){
    var id='w'+nbubbles;
    var html = '<img src="images/waifu.jpg" id="'+id+'" class="circle-frame tobounce" style="position: absolute; left: 0px; top: 0px; z-index: 9;"></img>';
    document.body.innerHTML = html + document.body.innerHTML;
    console.log("crea la bubble "+nbubbles);

    $(".tobounce").throwable({
        gravity:{x:0,y:1},
        impulse:{
            f:-152,
            p:{x:1,y:1.5}
        },
        bounce:0.5,
        shape:"circle",
        drag:true,
        autostart:false
    });
    nbubbles++;
}