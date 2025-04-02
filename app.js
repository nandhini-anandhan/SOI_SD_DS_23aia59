let a = [1, 2, 3, 3, 5, 5, 6, 7, 8, 8];
let a1 = [];

a.forEach(element => {  // 'Element' should be 'element'
    if (!a1.includes(element)) {
        a1.push(element);
    }
});

console.log(a1);


//2
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));



//3
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetter("hi hello"));