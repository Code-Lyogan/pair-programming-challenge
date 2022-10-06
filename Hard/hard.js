let hello1 = "{hello world}";

let hello2 = "{hello world]";

let hello3 = "hello world";

function checkBrack(str) {
    let brackets = true;
        if (
    (str.charAt(0) == "{" && str.charAt (str.length - 1) == "}") ||

    (str.charAt(0) == "[" && str.charAt (str.length - 1) == "]") ||

    (str.charAt(0) == "(" && str.charAt (str.length - 1) == ")")
) {
    brackets = true;
    } else {
    brackets = false;
}
    return brackets;
}
console.log(checkBrack(hello1));

console.log(checkBrack(hello2));

console.log(checkBrack(hello3));