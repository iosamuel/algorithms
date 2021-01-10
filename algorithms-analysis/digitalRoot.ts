// O(n^2)
function digitalRootN(n: number): number {
  if (n < 10) return n; // O(1)

  return digitalRoot(
    n
      .toString() // "942" // O(n)
      .split("") // ["9", "4", "2"] // O(n)
      .reduce((acc, num) => acc + +num, 0) // 15 // O(n)
  );
}

console.time("N1");
const res = digitalRootN(13218944444444444); // O(1)
console.timeEnd("N1");

console.log("------------");

console.time("N");
const res2 = digitalRoot(13218944444444444); // O(1)
console.timeEnd("N");

console.log(res); // O(1)
console.log(res2); // O(1)

function digitalRoot(n: number) {
  return ((n - 1) % 9) + 1; // O(1)
}
