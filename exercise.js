function range(start, end, step) {
  let array = []
  if (end > start && step > 0) {
    for (var x = start; x <= end; x += step) {
      array.push(x)
    }
    return array
  }
  else {
    return array
  }
} 

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

function lastIndexOf(array, value) {
  for (var x = array.length - 1; x >= 0; x -= 1) {
    if (array[x] === value) {
      return x 
    }
  }
  return -1
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

function concat(array1, array2) {
  return array1.concat(array2)
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);


function loopyLighthouse(range, multiples, words) {
  for (var x = range[0]; x <= range[1]; x += 1) {
    if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      console.log(words[0] + words[1])
    }
    else if (x % multiples[0] === 0) {
      console.log(words[0])
    }
    else if (x % multiples[1] === 0) {
      console.log(words[1])
    }
    else {
      console.log(x)
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon'])


function merge(array1, array2) {
  let array = array1.concat(array2)
  return array.sort()
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);