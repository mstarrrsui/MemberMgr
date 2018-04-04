var numbers = [1, 2, 3, 4, 5, 6];

function head([x]) {
  return x;
}

function tail([x, ...y]) {
  return y;
}

function reverse([x, ...y]) {
    if (x === undefined) return [];
    return reverse(y).concat(x);
}

var h = head(numbers);
var t = tail(numbers);
var reversed = reverse(numbers);

h;
t;
reversed;