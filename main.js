import { HashMap } from "./script.js";

const table = new HashMap(50);

table.set('apple', 'red');
table.set('banana', 'yellow');
table.set('carrot', 'orange');
table.set('dog', 'brown');
table.set('elephant', 'gray');
table.set('frog', 'green');
table.set('grape', 'purple');
table.set('hat', 'black');
table.set('ice cream', 'white');
table.set('jacket', 'blue');
table.set('kite', 'pink');
table.set('lion', 'golden');

console.log(table.remove('apple'));

console.log(table.length());

// table.clear();

console.log(table.keys());

console.log(table.values());

console.log(table.entries());