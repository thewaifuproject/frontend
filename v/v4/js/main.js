function main(){
    window.addEventListener("scroll",function(){
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var body = document.body, html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        
        var secV = height/9
        var redenH = ((scrollTop/height)/2)/(secV/height)
        
        var redenV = redenH*w
        //this.console.log(secV + "  " + height)
        //var el = document.getElementById('d').style.width = "calc("+w+"px - "+redenV+"px)"transform: translate(-90%,0);
        document.getElementById('b1').style.transform = "translate("+-(redenV/w)*100+"%, 0%) scaleX(1.01)"
        document.getElementById('b2').style.transform = "translate("+((-(redenV/w)*100)+100)+"%, 0%) scaleX(1.01)"
        //document.getElementById('db2').style.transform = "translate("+((-(redenV/w)*100)+100-1)+"%, 0%)"
        document.getElementById('b3').style.transform = "translate("+((-(redenV/w)*100)+200)+"%, 0%) scaleX(1.01)"
        document.getElementById('b4').style.transform = "translate("+((-(redenV/w)*100)+300)+"%, 0%) scaleX(1.01)"
        document.getElementById('b5').style.transform = "translate("+((-(redenV/w)*100)+400)+"%, 0%) scaleX(1.01)"
        
        //console.log(document.getElementById('test2').getBoundingClientRect().top)
        if (document.getElementById('test2').getBoundingClientRect().top > 0){
            document.getElementById('nav').style.backgroundColor = '#fff'
            document.getElementById('nav').style.color = '#000'
            document.getElementById('bgg2').style.opacity = '0'
        } else {
            document.getElementById('nav').style.backgroundColor = '#584678'
            document.getElementById('nav').style.color = '#fff'
            document.getElementById('bgg2').style.opacity = '1'
        }

        /*if (document.getElementById('test3').getBoundingClientRect().top > 0){
        } else {
            document.getElementById('nav').style.backgroundColor = '#fff'
            document.getElementById('nav').style.color = '#000'
            document.getElementById('sec3').style.background = '#fff'
            document.getElementById('sec3').style.color = '#000 !important'
        }*/

    });
}