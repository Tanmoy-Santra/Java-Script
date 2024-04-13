//for of--array  specific loop

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);        
}

const words="student"
for (const letter of words) {
    console.log(letter);    
}

//maps : Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. 

const map=new Map()
map.set('up','utter pradesh')
map.set('kol','kolkata')
map.set('del','delhi')
map.set('del','delhi')
console.log(map)
//for of loop
for (const [key,value] of map) {
    console.log(key,'-',value); 
    console.log(value);   
}
//in case of object
const myObject={
    'game1':'Free Fire',
    'game2':'PUBG'
}
// for (const game of myObject) {
//         console.log(game);//objects are not iterable by this loop
// }
//for in loop
for (const key in myObject) {
    console.log(myObject[key],':',key);
}

const programming=['js','c++','java','sql','php']

for (const key in programming) {
    console.log(programming[key]);   
}

// const map=new Map()
// map.set('up','utter pradesh')
// map.set('kol','kolkata')
// map.set('del','delhi')
// map.set('del','delhi')
// for (const key in map) {
//     console.log(key);    
// }//not iterabe by this method

//for each loop

const codding=['java','python','cpp','c']

codding.forEach( function (item) {
    console.log(item);
} )


codding.forEach( (val) => {
    console.log(val);
} )

function pintme(item){
    console.log(item);
}
codding.forEach(pintme)

codding.forEach( (item,index,arr) => {

    console.log(item);
    console.log(index);
    console.log(arr);

})
//*********************most importent***************** */

const myCodding = [
    {
        langName : "javascript",
        filename:"js"
    },
    {
        langName : "java",
        filename:"java"
    },
    {
        langName : "typescript",
        filename:"ts"
    },
    {
        langName : "html",
        filename:"html"
    },

]
myCodding.forEach( (item)=>{
    console.log(item.langName);
})