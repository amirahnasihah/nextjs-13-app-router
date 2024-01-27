```javascript
function sum(a) {
  return function (b) {
    return a + b;
  };
}

// Update header text
document.querySelector("#header").innerHTML = message;

// Log to console
console.log(sum(10)(20));

// ouput: 30
```