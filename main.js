import { HashMap, HashSet } from "./script.js";

// ====================== HashMap

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

console.log(table.has('jacket'));

// table.clear();

console.log(table.keys());

console.log(table.values());

console.log(table.entries());

// ===================== HashSet

const set = new HashSet();

set.add("apple");
set.add("banana");

console.log(set.has("apple"));
console.log(set.has("grape"));
set.remove("apple");
console.log(set.has("apple"));
