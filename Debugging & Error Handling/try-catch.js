function checkPalindrome(string) {
    if(!string) throw "string inexistente";

    return string.split("").reverse().join("") === string;
}


function tryCatchExample(string){
    try {
        checkPalindrome(string)
    } catch(ele){
        console.log(ele)
    }
}

console.log(tryCatchExample("")); // string inexistente
//undefined