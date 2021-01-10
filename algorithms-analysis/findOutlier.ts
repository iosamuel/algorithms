// const numbers = [2, 4, 0, 100, 4, 11, 2602, 36];
const numbers = [160, 3, 1719, 19, 11, 13, -21];
const outlier = findOutlier(numbers);

console.log(outlier);

// O(n)
/* function findOutlier(integers: number[]) {
  let even = integers.filter(a => a % 2 == 0);
  let odd = integers.filter(a => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
} */

// O(n)
/* function findOutlier(integers: number[]) {
  return integers.slice(0, 3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
}
function even(n: number) {
  return n % 2 === 0;
}
function odd(n: number) {
  return !even(n);
} */

// O(n)
/* function findOutlier(integers: number[]) {
  let number = 0;
  const filtered = integers.filter(n => (n & 1 ? true : (number = n) && false));
  return filtered.length > 1 ? number : filtered[0];
} */

// O(log n)
function findOutlier(integers: number[]) {
  let number = 0;
  for (let i = 0; i < integers.length; i += 3) {
    const firstThree = integers.slice(i, i + 3).filter(n => (n & 1 ? true : (number = n) && false));
    if (firstThree.length === 2) {
      break;
    } else if (firstThree.length === 1) {
      number = firstThree[0];
      break;
    }
  }
  return number;
}
