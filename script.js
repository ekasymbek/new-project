const array = ["apple", "orange", "grape"];
console.log(array);
console.log(array.length);
const array2 = [];
function showItems(arr) {
    arr.forEach(item => console.log(item))
}
showItems(array);