// // Cách 1: Array literal
// const fruits = ['Apple'];
// // Chỉ số (index)
// // Bắt đầu: 0
// console.log(fruits[0]);
// // ... (spread operator)
// fruits.push('Banana', 'Orange');
//
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);
// // block-scope
// // global-scope
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// // slice, indexOf, map, shift, unshift, concat, pop, join, filter, find, reduce
// // slide: trả về một mảng mới
// const newFruits = fruits.slice(fruits.length - 1);
// console.log();
// console.log('fruits: ' + fruits);
// console.log('newFruits: ' + newFruits);
// // indexOf
// const index = fruits.indexOf("Pineapple");
// if (index !== -1) {
//     console.log(fruits[index]);
// } else {
//     console.log('Không tìm thấy kết quả');
// }
// const firstItem = fruits.shift(); // Xóa phần tử đầu và trả về nó
// console.log(firstItem);
// const totalItems = fruits.unshift('Pineapple');
// console.log(totalItems);
// const newFruits2 = new Array(3);
// newFruits2.push(1);
// newFruits2.push(2);
// const newFruits3 = fruits.concat(newFruits2);
// console.log(newFruits3);
//
// fruits.pop();
// console.log(fruits);
//
// // map(): trả về một mảng mới, biến đổi các giá trị trong mảng thành giá trị mới dựa vào hàm callback trả về
// function listItem(item) {
//     return '<li>'+item+'</li>';
// }
// function listItem(item, index) {
//     return '<tr><td>'+(index+1)+'</td><td>'+item+'</td></tr>';
// }
// document.getElementById("demo").innerHTML = fruits.map(listItem).join("");
// document.getElementById("content").innerHTML = fruits.map(listItem).join("");
// document.write(fruits.join(''));

let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(','));
// const numbers = prompt("Vui long nhap vao mot so");
// console.log(numbers);
// const arr = [];
// console.log(typeof parseInt(numbers[0]));
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0 && +numbers[i] !== 0) {
//         arr.push('-' + numbers[i]);
//     }
//     else {
//         arr.push(numbers[i]);
//     }
// }
// console.log(arr.join(''));
const filteredColor = myColor.filter(function (item) {
    return item === 'Green';
})
console.log(filteredColor);
const arr = [1, 2, 3, 4, 5];
// function lessThan50(item) {
//     return item < 50;
// }
// const filteredArr = arr.filter(lessThan50)
// console.log(filteredArr);
// console.log(arr.find(function (item) {
//     return item > 50
// }));
const total = arr.reduce(function (prevValue, currentValue) {
    prevValue += currentValue;
    return prevValue;
}, 0)
console.log(total);
