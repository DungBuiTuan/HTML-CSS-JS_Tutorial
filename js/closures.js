//let p = 1;
let score = (function () {
  let p = 20;
  return function () {
    return (p += 1);
  };
})();

console.log(score());
console.log(score());
console.log(score());
