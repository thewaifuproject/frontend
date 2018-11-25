function main(){
    var modal = document.getElementById('waifu-detail');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function openModal(a){
    var modal = document.getElementById('waifu-detail');
    modal.style.display = "block";
    document.getElementById('detail-title').innerText = a.firstElementChild.id;
}

function closeModal(){
    var modal = document.getElementById('waifu-detail');
    modal.style.display = "none";
}


function insertCard(waifu) {
	let imgUrl = "https://api.waifuchain.moe/image/"+waifu+".jpeg"
	let name = "Mikan Yuuki"
	let card = 	'<div class="flex-item">'+
					'<div class="waifuCard">' + 
						'<div onclick="openModal(this)" id="ima">'+
						'<img id="'+waifu+'" src="'+imgUrl + '">' + 
						'<span class="assign">'+name+'</span>'+
						'</div>'+
						'<p>'+name+'</p>'+
						'<button class="buttonlight">Bid</button>'+
					'</div>'+
				'</div>'
    waifu+=100
	document.getElementById("bid-list").innerHTML += card;
	imgUrl = "https://api.waifuchain.moe/image/"+(waifu)+".jpeg"
	name = "Mikan Yuuki"
	card = 	'<div class="flex-item">'+
					'<div class="waifuCard">' + 
						'<div onclick="openModal(this)" id="ima">'+
						'<img id="'+waifu+'" src="'+imgUrl + '">' + 
						'<span class="assign">'+name+'</span>'+
						'</div>'+
						'<p>'+name+'</p>'+
						'<button class="buttonlight">Bid</button>'+
					'</div>'+
				'</div>'
	document.getElementById("trade-list").innerHTML += card;
}