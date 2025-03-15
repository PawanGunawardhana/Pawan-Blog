// further readings for creating Map and map method with Arrays
let map = new Map();
console.log(map);

let map1 = ([
    ["name ", "John"],
    ["age  ", 30],
    ["phone", 7169595]
]);

let map2 = [
     {
        "name": "John",
        "age": 30,
        "phone": 7169595},
     {
        "name":"Doe",
        "age": 25,
        "phone": 7169595
     },
     {
        "name": "pawan",
        "age": 30,
        "phone": 7169595
     }
]

console.log(map1);
console.log(typeof(map1));

for (const x of map1) {
    console.log(`${x[0]} : ${x[1]}`);
}

map2.forEach((map) => {
    console.log(map.name); 
});

map.set("fname", "Chamal");
map.set("lname", "Dias");
map.set("phone", 35346346);
console.log(map);
console.log(typeof(map));

console.log(`First name is ${map.get('fname')}`);
console.log(`Phone number is ${map.get('phone')}`);

console.log(map.has('email'));

console.log(map.size);

for(let x of map){
    // console.log(x);
    console.log(`${x[0]} : ${x[1]}`);
}
