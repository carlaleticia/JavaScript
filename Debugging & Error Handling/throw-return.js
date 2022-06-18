function checkPalindrome(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(checkPalindrome("")); // string inexistente


function checkPalindrome2(string) {
    if(!string) throw "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(checkPalindrome2("")); //string inexistente 

