function changeImg(id) {
	document.getElementById("big-img").src = document.getElementById(id).src;
}

function num() {
	var count = document.getElementById("count").innerHTML;

	document.getElementById("count").innerHTML = Number(count) + 1;
}
