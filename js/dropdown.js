function dropdown() {
	var dd = document.getElementById("dropdown");
	if (dd.style.display == '') {
		dd.style.display = 'none';
	}else{
		dd.style.display = '';
	}
}
window.onclick = function(event) {
	if (!event.target.matches('#menu')) {
		var dd = document.getElementById("dropdown");
		dd.style.display = 'none';
	}
} 