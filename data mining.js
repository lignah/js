// data mining, process of extracting useful information from data
// function that counts the occurrences of letters */

counting_literal('aacbbbbaasdvscbt')

function counting_literal(...rest) {

  let objecting= {}
  const arraying= [...rest[0]].sort()
  arraying.forEach(a=> {
    if (a in objecting) objecting[a]++
    else objecting[a]= 1
  });

  console.log(objecting);
}
/* { a: 4, b: 5, c: 2, d: 1, s: 2, t: 1, v: 1 }
*/
