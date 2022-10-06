function gcdNum(num1, num2) {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while (num2) {
    var total = num2;
    num2 = num1 % num2;
    num1 = total;
    }
    return num1;
}
    console.log(gcdNum(336, 360));