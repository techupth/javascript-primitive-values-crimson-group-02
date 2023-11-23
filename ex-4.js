// Exercise #4: E-commerce logic bug
// Close Quokka before do this!

let numberOfSoldProduct = 12000;
let numberOfProductInStock = undefined;

console.log((numberOfSoldProduct / numberOfProductInStock) * 100);
// จะแสดงผลเป็น NaN เนื่องจาก ไม่สามารถนำ Number ไปคำนวณผลทางคณิตศาสตร์ร่วมกับ String ได้
