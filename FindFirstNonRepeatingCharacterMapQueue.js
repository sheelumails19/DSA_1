function firstUniqueChar(str) {
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let [char, count] of map) {
    if (count === 1) return char;
  }
  return null;
}

console.log(firstUniqueChar("aabbcdeff")); // "c"
