function isPalindrome(str) {
    str = str.replace(/\s/g, '').split('').reverse().join('').toLowerCase();
    console.log(str);
    return (str == str.split('').reverse().join(''));  // '' so no commas
    console.log(str);
}

var pinga = isPalindrome("mala leche ma");
console.log(pinga);

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

console.log(cars);



var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...