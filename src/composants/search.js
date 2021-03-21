
// import './App.css';
// import React from "react";


// const search = async () => {
// 	let searchValue = searchInput.value.trim();
// 	if (!searchValue) return;
// 	songsList.innerHTML = '';

// 	searchValue = searchValue.replace(' ', '+');
// 	const response = await fetchItunesSongs(searchValue);
// 	if (response.resultCount) {
// 		document.querySelector('.no-result').style.display = 'none';
// 		const songs = response.results.filter((r) => r.kind === 'song');
// 		const ul = document.createElement('ul');
// 		songs.forEach((s) => {
// 			ul.appendChild(createSongLI(s));
// 		});
// 		songsList.appendChild(ul);
// 	} else {
// 		document.querySelector('.no-result').style.display = 'block';
// 	}
// };


// export default search;