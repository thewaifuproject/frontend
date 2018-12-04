function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

function setImage(url){
    document.getElementById('waifu-image').src = url
}

function setName(name){
    document.getElementById('waifu-name').innerText = name
}

function setDescription(description){
    document.getElementById('waifu-description').innerText = description
}

function bid(){
    var amount = document.getElementById('waifu-amount').value
    console.log(amount)
}

function updateCountDown(remaining) {
    document.getElementById('waifu-countdown').innerText = remaining
}



var id;
function main(){
    id = GetURLParameter('id')
    var waifu = JSON.parse(decodeURIComponent(GetURLParameter('obj')))

    setImage(waifu['image'])
    setName(waifu['name'])
    setDescription(waifu['description'])
}
