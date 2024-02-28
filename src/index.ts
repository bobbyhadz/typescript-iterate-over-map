export {};

// EXAMPLE 1 - Iterate over a Map in TypeScript

const map1 = new Map<string, string | number>([
  ['name', 'Bobby Hadz'],
  ['country', 'Germany'],
  ['age', 30],
]);

map1.forEach((value, key) => {
  // Bobby Hadz name
  // Germany country
  // 30 age
  console.log(value, key);
});

// ---------------------------------------------------

// // EXAMPLE 2 - Iterate over a Map in TypeScript using `for...of`

// const map1 = new Map<string, string | number>([
//   ['name', 'Bobby Hadz'],
//   ['country', 'Germany'],
//   ['age', 30],
// ]);

// for (const [key, value] of map1) {
//   // name Bobby Hadz
//   // country Germany
//   // age 30
//   console.log(key, value);
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Iterate over a Map object's Keys or Values in TypeScript

// const map1 = new Map<string, string | number>([
//   ['name', 'Bobby Hadz'],
//   ['country', 'Germany'],
//   ['age', 30],
// ]);

// // ✅ Iterate over a Map's keys
// for (const key of map1.keys()) {
//   console.log(key); // 👉️ name, country, age
// }

// // ✅ Iterate over a Map's values
// for (const value of map1.values()) {
//   console.log(value); // 👉️ Bobby Hadz, Germany, 30
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Converting the iterator objects to arrays

// const map1 = new Map<string, string | number>([
//   ['name', 'Bobby Hadz'],
//   ['country', 'Germany'],
//   ['age', 30],
// ]);

// // 👇️ const keys: string[]
// const keys = Array.from(map1.keys());
// console.log(keys);

// // 👇️ const values: (string | number)[]
// const values = Array.from(map1.values());
// console.log(values);
