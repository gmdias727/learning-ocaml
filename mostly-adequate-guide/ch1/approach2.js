const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const a = 4;
const b = 2;
const c = 0;

const result = 
    add(multiply(b, add(a,c)), multiply(a,b));

console.log(result);

// Associative /  Associativo
add(add(x,y), z) === add(x, add(y,z));

// Commutative /  Comutativo
add(x, y) === add(y, x);

// Identity / Identidade
add(x, 0) === x;

// Distributive / Distributiva
multiply(x, add(y,z)) === add(multiply(x, y), multiply(x, z));

