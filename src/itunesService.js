export async function  fetchItunesSongs(term){
	var API = 'https://serveritunes.herokuapp.com/itunes';
	try {
		var url = `${API}?term=${term}`;
		var response = await fetch(url);
		var responseJson = await response.json();
		return responseJson;
	} catch (err) {
		console.log(err);
	}
};