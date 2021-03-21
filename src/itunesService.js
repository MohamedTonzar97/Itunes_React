async function  fetchItunesSongs(term){
	var API = 'http://localhost:8085/itunes';
	try {
		var url = `${API}?term=${term}`;
		var response = await fetch(url);
		var responseJson = await response.json();
		return responseJson;
	} catch (err) {
		console.log(err);
	}
};

export default  fetchItunesSongs;