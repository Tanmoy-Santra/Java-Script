const codeing=["js","java","cpp",'c']
const values=codeing.forEach((item)=>{
    console.log(item);
    return item//its not return any values
})
console.log(values);//retuns undefind

//using filter --returns the value 
const mynum=[1,2,3,4,5,6,7,8,9,10]

const newnums = mynum.filter((num)=>{
    return num>4
})
console.log(newnums);

const newNo=[]
mynum.forEach((num)=>{
    if (num>4) {
        newNo.push(num)        
    }
})
console.log(newNo );

//*********ex********************
let books = [
    {
        name: "To Kill a Mockingbird",
        genre: "Fiction",
        publishYear: 1960,
        editionYear: 1988
    },
    {
        name: "1984",
        genre: "Science Fiction",
        publishYear: 1949,
        editionYear: 2013
    },
    {
        name: "Pride and Prejudice",
        genre: "Romance",
        publishYear: 1813,
        editionYear: 2003
    },
    {
        name: "The Great Gatsby",
        genre: "Fiction",
        publishYear: 1925,
        editionYear: 2014
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        publishYear: 1997,
        editionYear: 2018
    },
    {
        name: "The Catcher in the Rye",
        genre: "Fiction",
        publishYear: 1951,
        editionYear: 2001
    },
    {
        name: "The Hobbit",
        genre: "Fantasy",
        publishYear: 1937,
        editionYear: 2012
    },
    {
        name: "The Lord of the Rings",
        genre: "Fantasy",
        publishYear: 1954,
        editionYear: 2004
    },
    {
        name: "Moby-Dick",
        genre: "Adventure",
        publishYear: 1851,
        editionYear: 2016
    },
    {
        name: "The Hitchhiker's Guide to the Galaxy",
        genre: "Science Fiction",
        publishYear: 1979,
        editionYear: 2007
    }
];

let bookDetails=books.filter((book)=>{
    return book.genre==='Fantasy'
})

bookDetails=books.filter((book)=>{
    return book.publishYear>1950
})
console.log(bookDetails);


//map
/**************/

const numbers=[1,2,3,4,5,6,7,8,9]

const newnum =numbers.map((num)=>num+10)
console.log(newnum);

const newnumbers=numbers
                 .map((num)=>num*10)
                 .map((num)=> num+1)
                 .filter((num)=>num>=40)
console.log(newnumbers);

//reduce 
const numbers1=[1,2,3]
// const myTotal=numbers1.reduce(function (acc,curval){
//     console.log(`acc:${acc} currval :${curval}`);
//     return acc+curval
// }, 0)
// console.log(myTotal);
//output
// acc:0 currval :1
// acc:1 currval :2
// acc:3 currval :3
// 6


const myTotal =numbers1.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);
                   
const shopingCart=[
    {
        itemName:"js",
        price:299
    },
    {
        itemName:"java",
        price:399
    },
    {
        itemName:"React",
        price:899
    },
    {
        itemName:"data science",
        price:1299
    }
]

const priceTopay=shopingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceTopay);