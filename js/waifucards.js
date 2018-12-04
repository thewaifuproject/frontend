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

	document.getElementById('detail-title').innerText = todaywaifus[a.firstElementChild.id]['name'];
	document.getElementById('detail-img').src = todaywaifus[a.firstElementChild.id]['image'];
	setWaifuName("Waifu " + todaywaifus[a.firstElementChild.id]['name'])
	setDescription(todaywaifus[a.firstElementChild.id]['description'])
}

function closeModal(){
    var modal = document.getElementById('waifu-detail');
    modal.style.display = "none";
}

function goDetail(a){
	console.log(a);
	var id = a.parentElement.children[0].children[0].id
	var name = a.parentElement.children[1].textContent
	window.location = 'bid-individual.html?id='+id+'&obj='+JSON.stringify(todaywaifus[id]);
}

var todaywaifus = {}
function insertCard(id, waifu) {
todaywaifus[id] = waifu;
		let card = 	'<div class="flex-item">'+
						'<div class="waifuCard">' + 
							'<div onclick="openModal(this)" id="ima">'+
							'<img id="'+id+'" src="'+waifu['image'] + '">' + 
							'<span class="assign">'+waifu['name']+'</span>'+
							'</div>'+
							'<p>'+waifu['name']+'</p>'+
							'<button onclick="goDetail(this)" class="buttonlight">Bid</button>'+
						'</div>'+
					'</div>';
	document.getElementById("bid-list").innerHTML += card;
}
