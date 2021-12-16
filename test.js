var a = ["A", "B", "C"];
a[4] = "E";
console.log(a); // [ 'A', 'B', 'C', <1 empty item>, 'E' ]
console.log(a.length) // 5