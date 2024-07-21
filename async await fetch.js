'use strict'

// using async, it returns a promise object
(async function fetchdata() {
  try {
    const response1 = await fetch('https://raw.githubusercontent.com/lignah/lignah/main/manifest.json');
    const data1 = await response1.json();
    console.error(data1.profile.skills[0]);

    const response2 = await fetch('https://raw.githubusercontent.com/lignah/lignah/main/%E2%80%8Bsample.txt');
    const data2 = await response2.text();
    console.log(data2);
  } catch (e) {
    console.error('error fetching data:', e);
  }
})();   // IIFE, fetchData();

/* same code, then == await */
// fetch('https://raw.githubusercontent.com/lignah/lignah/main/manifest.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.profile.skills[0]);
//     return fetch('https://raw.githubusercontent.com/lignah/lignah/main/%E2%80%8Bsample.txt');
//   })
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(e => console.error('error:', e));