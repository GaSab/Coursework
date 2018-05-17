window.onload = function() {

	var http = new XMLHttpRequest();
	http.open('GET', 'localhost:3000/api/estados', true);
	http.send();

	console.log(http);
}