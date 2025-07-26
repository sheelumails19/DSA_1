function reverseString(str) {
  let stack = [];
  for (let char of str) stack.push(char);
  let reversed = "";
  while (stack.length) reversed += stack.pop();
  return reversed;
}

console.log(reverseString("hello")); // "olleh"
