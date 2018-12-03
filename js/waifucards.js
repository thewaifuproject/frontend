function main(){
    var modal = document.getElementById('waifu-detail');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function updateCountDown(remaining) {
    document.getElementById('waifu-countdown').innerText = remaining
}

function setWaifuName(name) {
    document.getElementById('detail-title').innerText = name
}

function setDescription(description){
    document.getElementById('waifu-description').innerText = description
}

function openModal(a){
    var modal = document.getElementById('waifu-detail');
	modal.style.display = "block";

	document.getElementById('detail-title').innerText = a.firstElementChild.id;
	document.getElementById('detail-img').src = a.firstElementChild.src;
	setWaifuName("Waifu " + a.firstElementChild.id)
	setDescription("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.")
}

function closeModal(){
    var modal = document.getElementById('waifu-detail');
    modal.style.display = "none";
}

function goDetail(a){
	console.log(a);
	var id = a.parentElement.children[0].children[0].id
	var name = a.parentElement.children[1].textContent
	window.location = 'bid-individual.html?id='+id+'&name='+name;
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
							'<button onclick="goDetail(this)" class="buttonlight">Bid</button>'+
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