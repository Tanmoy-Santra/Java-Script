const maevel_heros=["thor","Ironman","spiderman"]
const dc=["superman","flash","Ironman"]
//direct push
console.log('push');

maevel_heros.push(dc)
console.log(maevel_heros);
//output : [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'Ironman' ] ]  
//marvel_heros has merged the dc array as a single element

//concat
console.log('concat');

newArr=maevel_heros.concat(dc)
console.log(newArr);
//['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'Ironman']


//spread
console.log('spread');

const all_new_heros=[...maevel_heros,...dc]
console.log(all_new_heros);
//using flat
console.log('spread with flat');

console.log(all_new_heros.flat(Infinity));

//['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'Ironman']

//flat
console.log('flat');

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_arr.flat(Infinity)
console.log(real_another_array);// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//from--make any string in to array
console.log('from');

console.log(Array.isArray("Tanmoy"));
console.log(Array.from("tanmoy"));
console.log(Array.from({name:"tanmoy"}));
//if the array is not froms in any cause its returns a emplty array


//of
console.log('of');

let a1=123
let a2=678
let a3=90

console.log(Array.of(a1,a2,a3));
