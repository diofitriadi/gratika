let arr = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

arr.sort(function (a, b) {
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  } else if (typeof a === "string") {
    return -1;
  } else if (typeof b === "string") {
    return 1;
  } else {
    return a - b;
  }
});

console.log(arr);