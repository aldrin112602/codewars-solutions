## Instructions
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

### Examples:
```javascript
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

## Sample Test
```javascript
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
});
});
```