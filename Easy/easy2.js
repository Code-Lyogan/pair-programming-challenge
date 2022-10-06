var newArray = [1,2,3,4,5,6,7,8,9,10];
var prime = newArray.filter(sortPrimeNum);
function sortPrimeNum(input) {
    for(var i = 2; i < input; i++) {
        if(input % i === 0) {
        return false;
        }
    }
    return input !== 1;
}
    console.log(prime);

    // My partner was Kaila Bryson!