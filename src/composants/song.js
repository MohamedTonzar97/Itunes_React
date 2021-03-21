// import './App.css';
// import React from "react";


// /**
//  * From a song object returned by the API, create a <li> tag
//  * @param {object} s
//  */

// const createSongLI = (s) => {
// 	const li = document.createElement('li');
// 	const h1 = document.createElement('h1');
// 	const span = document.createElement('span');
// 	h1.textContent = s.artistName;
// 	span.textContent = s.trackName;
// 	li.id = s.trackId;
// 	li.setAttribute('data-preview', s.previewUrl);
// 	li.addEventListener('click', handleClickSong);
// 	li.appendChild(h1);
// 	li.appendChild(span);
// 	return li;
// };

// export default createSongLI;