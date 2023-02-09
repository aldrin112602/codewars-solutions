## Instructions

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

### Examples:
```bash
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
```

## Sample Test
```javascript
const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});
```