function getContentOrder() {
	var userId = (window.location.search.split('&')[0]).split('=')[1];
	var passwordId = (window.location.search.split('&')[1]).split('=')[1];
	var content_send = {
		'userId':userId,
		'passwordId':passwordId
	};
	console.log(content_send);
}