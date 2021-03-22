$.ajax({
	method: "GET",
	url: 'https://api.themoviedb.org/3/movie/now_playing',
	data: {
		api_key: '997d5afab1fcec94dbc66136953d1bee',
		language: 'en-US'
	}
})
.done (function(data) {
	let results = JSON.parse(data);
	console.log(results);
	display(results);
}).fail(function() {
	console.log("ERROR");
});


// function display (results) {
	
// }