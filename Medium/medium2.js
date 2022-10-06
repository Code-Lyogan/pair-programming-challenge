let string1 = "So dark the con of man";

let string2 = "Madonna of the Rocks";

let string3 = "Things are good";

let string4 = "Dogs eat ants";

function isAnagram(str1, str2) {
    let ana = /[a-zA-Z0-9]/;

    let statement1 = str1.match(ana).length;
    let statement2 = str2.match(ana).length;

    console.log(statement1);
    console.log(statement2);
        if (statement1 != statement2) {
    return false;
}

    let stand1 = str1.split().sort().join();

    let stand2 = str1.split().sort().join();
        if (stand1 == stand2) {
    return true;
}

}
    console.log(isAnagram(string1, string2));
    console.log(isAnagram(string3, string4));