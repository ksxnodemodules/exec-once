
# exec-once
Create functions that executes only once to get result

## Requirements

 * ECMAScript 6 supports

## Examples

This code should displays 10 lines of one number

```javascript
var once = require('exec-once')
var randomOnce = once(Math.random)
for (let count = 10; count; --count) {
    console.log(randomOnce())
}
```
